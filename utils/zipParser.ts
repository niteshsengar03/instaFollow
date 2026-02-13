import JSZip from 'jszip';
import { ParseResult, FollowerItem, FollowingResponse } from '../types';

export const parseInstagramZip = async (file: File): Promise<ParseResult> => {
  const zip = new JSZip();
  
  try {
    const contents = await zip.loadAsync(file);
    
    // We need to find followers_1.json and following.json
    // They are typically in connections/followers_and_following/
    
    // Helper to find file by loose path matching
    const findFile = (name: string) => {
      const foundPath = Object.keys(contents.files).find(path => path.endsWith(name));
      return foundPath ? contents.files[foundPath] : null;
    };

    const followersFile = findFile('followers_1.json');
    const followingFile = findFile('following.json');

    if (!followersFile || !followingFile) {
      throw new Error("Required JSON files (followers_1.json, following.json) not found in the ZIP. Please make sure you downloaded the 'JSON' format from Instagram.");
    }

    const followersText = await followersFile.async('text');
    const followingText = await followingFile.async('text');

    let followersData: FollowerItem[] = [];
    let followingData: FollowingResponse | null = null;

    try {
      followersData = JSON.parse(followersText);
      followingData = JSON.parse(followingText);
    } catch (e) {
      throw new Error("Failed to parse the JSON files. They might be corrupted or in an unexpected format.");
    }

    // Extract Usernames
    // Logic from prompt:
    // followers: item.string_list_data[0].value
    // following: relationships_following[].title

    const followerUsernames = new Set<string>();
    
    // Parse Followers
    if (Array.isArray(followersData)) {
      followersData.forEach((item) => {
        if (item.string_list_data && item.string_list_data.length > 0) {
          followerUsernames.add(item.string_list_data[0].value);
        }
      });
    } else {
      // Fallback for different follower structures (sometimes it's an object wrapping the array)
      const data = followersData as any;
      if (data.relationships_followers) {
         data.relationships_followers.forEach((item: any) => {
            if (item.string_list_data && item.string_list_data.length > 0) {
              followerUsernames.add(item.string_list_data[0].value);
            } else if (item.title) {
               followerUsernames.add(item.title);
            }
         });
      }
    }

    // Parse Following
    const followingUsernames: string[] = [];
    
    if (followingData && Array.isArray(followingData.relationships_following)) {
      followingData.relationships_following.forEach((item) => {
        if (item.title) {
          followingUsernames.push(item.title);
        } else if (item.string_list_data && item.string_list_data.length > 0) {
          // Fallback if title is missing but string_list_data exists
          followingUsernames.push(item.string_list_data[0].value);
        }
      });
    } else {
        throw new Error("Invalid structure for following.json");
    }

    // Compare
    const nonFollowers = followingUsernames.filter(user => !followerUsernames.has(user));

    return {
      nonFollowers,
      totalFollowing: followingUsernames.length,
      totalFollowers: followerUsernames.size
    };

  } catch (err: any) {
    console.error(err);
    throw new Error(err.message || "Failed to process the ZIP file.");
  }
};