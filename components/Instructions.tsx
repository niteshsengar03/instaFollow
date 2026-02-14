import React from "react";
import { Download, Settings, FileJson, UploadCloud } from "lucide-react";

const Instructions: React.FC = () => {
  const steps = [
    {
      id: 1,
      caption: "Open Instagram > Menu",
      desc: "Go to your profile and tap the three lines in top right.",
    },
    {
      id: 2,
      caption: "Accounts Center",
      desc: "Tap on 'Accounts Center' at the top.",
    },
    {
      id: 3,
      caption: "Your Information",
      desc: "Select 'Your information and permissions'.",
    },
    {
      id: 4,
      caption: "Export Info",
      desc: "Tap 'Export your information'.",
    },
    {
      id: 5,
      caption: "Create Export",
      desc: "Tap 'Create Export'.",
    },
    {
      id: 6,
      caption: "Export to Device",
      desc: "Choose 'Export to device' (not Google Drive).",
    },
    {
      id: 7,
      caption: "Check Email",
      desc: "Ensure the notification email is correct.",
    },
    {
      id: 8,
      caption: "Save Settings",
      desc: "Double check your email and save.",
    },
    {
      id: 9,
      caption: "Customise Info",
      desc: "Select 'Customise information' (Don't select all).",
    },
    {
      id: 10,
      caption: "Followers Only",
      desc: "Uncheck everything, then select ONLY 'Followers and following'.",
    },
    {
      id: 11,
      caption: "Date Range",
      desc: "Tap 'Date range' to change it from 'Last year'.",
    },
    {
      id: 12,
      caption: "All Time",
      desc: "Select 'All time' to ensure accurate results.",
    },
    {
      id: 13,
      caption: "Format",
      desc: "Tap 'Format' (Default is usually HTML).",
    },
    {
      id: 14,
      caption: "Select JSON",
      desc: "Choose 'JSON'. This is required for the app to work.",
    },
    {
      id: 15,
      caption: "Save Settings",
      desc: "Double check your email and save.",

      // caption: "Start Export", desc: "Tap 'Create files' or 'Start export'."
    },
    {
      id: 16,
      caption: "Enter Password",
      desc: "Enter your Instagram password to confirm.",
    },
    {
      id: 17,
      caption: "Wait 10 Mins",
      desc: "Close the app. Instagram will email you when ready.",
    },
    {
      id: 18,
      caption: "Download",
      desc: "Click the link in email, or return to 'Your Information' to download.",
    },
  ];

  return (
    <div
      id="instructions"
      className="max-w-7xl mx-auto px-4 mb-16 scroll-mt-10"
    >
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-slate-800">
        {/* Header Section */}
        <div className="p-8 border-b border-gray-100 dark:border-slate-800 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Step-by-Step Guide
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Follow these exact screens on your phone to get the correct ZIP
            file.
          </p>
        </div>

        {/* Process Overview (4 Pillars) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gray-50 dark:bg-slate-950/50 border-b border-gray-100 dark:border-slate-800">
          <div className="flex flex-col items-center text-center p-2">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl text-blue-600 mb-3">
              <Settings size={24} />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wide">
              1. Settings
            </h3>
          </div>
          <div className="flex flex-col items-center text-center p-2">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl text-purple-600 mb-3">
              <Download size={24} />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wide">
              2. Request
            </h3>
          </div>
          <div className="flex flex-col items-center text-center p-2">
            <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-xl text-yellow-600 mb-3">
              <FileJson size={24} />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wide">
              3. Select JSON
            </h3>
          </div>
          <div className="flex flex-col items-center text-center p-2">
            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl text-green-600 mb-3">
              <UploadCloud size={24} />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wide">
              4. Upload
            </h3>
          </div>
        </div>

        {/* 18 Screenshots Grid */}
        <div className="p-6 lg:p-8 bg-gray-100 dark:bg-slate-950">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col gap-3 group">
                <div className="relative aspect-[9/19] bg-gray-200 dark:bg-slate-800 rounded-2xl shadow-sm border-4 border-gray-300 dark:border-slate-700 overflow-hidden group-hover:border-blue-500 dark:group-hover:border-blue-500 transition-colors duration-300">
                  {/* Number Badge */}
                  <div className="absolute top-2 left-2 w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg z-20 border border-white dark:border-slate-900">
                    {step.id}
                  </div>

                  {/* Image */}
                  <img
                    src={`/tutorial/${step.id}.png`}
                    alt={`Step ${step.id}: ${step.caption}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback if image missing
                      (e.target as HTMLImageElement).style.display = "none";
                      (
                        e.target as HTMLImageElement
                      ).parentElement?.classList.add(
                        "flex",
                        "items-center",
                        "justify-center",
                      );
                    }}
                  />

                  {/* Fallback Text (Hidden if image loads) */}
                  <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center p-2 text-center">
                    <span className="text-gray-400 text-xs uppercase font-bold">
                      Image Missing
                    </span>
                    <span className="text-gray-500 text-[10px] mt-1">
                      /public/tutorial/{step.id}.png
                    </span>
                  </div>
                </div>

                <div className="text-center px-1">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1 leading-tight">
                    {step.caption}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug hidden sm:block">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-white dark:bg-slate-900 border border-blue-100 dark:border-blue-900/50 rounded-xl p-5 shadow-sm max-w-2xl mx-auto">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="text-blue-600 font-bold text-lg mr-2">
                  Pro Tip:
                </span>
                Make sure to select{" "}
                <strong className="bg-yellow-100 dark:bg-yellow-900/40 px-1 rounded">
                  JSON format
                </strong>
                . If you download HTML, we cannot process it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
