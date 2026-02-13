export interface InstagramUser {
  username: string;
  href?: string;
}

export interface ParseResult {
  nonFollowers: string[];
  totalFollowing: number;
  totalFollowers: number;
}

export interface ProcessingState {
  status: 'idle' | 'processing' | 'success' | 'error';
  message?: string;
  data?: ParseResult;
}

// Internal types for JSON parsing matching the specific Instagram export format provided in prompt
export interface FollowerItem {
  string_list_data: {
    value: string;
    href: string;
    timestamp: number;
  }[];
}

export interface FollowingResponse {
  relationships_following: {
    title: string;
    media_list_data: any[];
    string_list_data: any[];
  }[];
}