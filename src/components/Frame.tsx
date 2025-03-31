"use client";

import { useCallback } from "react";
import { EMPIRE_BUILDER_URL } from "~/lib/constants";
import { useFrameSDK } from "~/hooks/useFrameSDK";

export default function Frame() {
  const { isSDKLoaded, sdk } = useFrameSDK();

  const handleOpenUrl = useCallback(() => {
    if (isSDKLoaded && sdk) {
      sdk.actions.openUrl(EMPIRE_BUILDER_URL);
    }
  }, [isSDKLoaded, sdk]);

  if (!isSDKLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[300px] mx-auto py-2 px-2 bg-gradient-to-b from-blue-600 to-purple-700 border-4 border-dashed border-yellow-400 rounded-lg">
      {/* MySpace Style Header */}
      <div className="text-center mb-3 animate-pulse">
        <div className="text-xl font-bold text-white bg-black p-1 rounded-md mb-1 shadow-lg">
          ★彡 $HMBT EMPIRE 彡★
        </div>
        <div className="text-xs text-white bg-black bg-opacity-70 p-1 rounded-md italic">
          ♪♫•*¨*•.¸¸♥ @siadude's profile ♥¸¸.•*¨*•♫♪
        </div>
      </div>

      {/* Glittery Content */}
      <div 
        className="bg-black bg-opacity-80 p-3 rounded-md border-2 border-pink-500 shadow-lg text-center mb-3"
      >
        <p className="text-white font-bold mb-2 text-lg">
          🏆 Build Your Empire 🏆
        </p>
        <p className="text-yellow-300 text-sm mb-3">
          Guardian: <span className="text-pink-300">siadude</span>
        </p>
        <p className="text-green-300 text-xs mb-2">
          Distributed: $212 | Burned: 20.57M hmbt
        </p>
      </div>

      {/* Action Button */}
      <button 
        onClick={handleOpenUrl}
        className="w-full bg-gradient-to-r from-red-500 to-yellow-500 hover:from-yellow-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded-full border-2 border-white shadow-lg transform hover:scale-105 transition-all"
      >
        ✨ VISIT MY EMPIRE ✨
      </button>

      {/* MySpace Footer */}
      <div className="text-center mt-3 text-xs text-white">
        <p className="animate-bounce">⋆｡°✩ Thanks for visiting! ✩°｡⋆</p>
        <p className="text-[10px] mt-1 text-gray-300">
          ©️ 2025 | Last login: 3/31/25
        </p>
      </div>
    </div>
  );
}
