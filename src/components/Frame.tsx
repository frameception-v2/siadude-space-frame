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
    <div className="w-[300px] mx-auto py-2 px-2 bg-gradient-to-b from-amber-700 to-yellow-900 border-4 border-double border-amber-300 rounded-lg relative">
      {/* Wild West Wanted Poster Style Header */}
      <div className="text-center mb-3">
        <div className="font-serif text-xl font-bold text-amber-200 p-1 mb-1 shadow-lg" style={{textShadow: "2px 2px 0px #000"}}>
          🤠 WANTED: $HMBT OUTLAWS 🤠
        </div>
        <div className="font-serif text-xs text-amber-100 p-1 italic" style={{textShadow: "1px 1px 0px #000"}}>
          Sheriff @siadude's Hambone Territory
        </div>
      </div>

      {/* Wanted Poster Content */}
      <div 
        className="bg-amber-100 bg-opacity-90 p-3 rounded-md border-2 border-amber-800 shadow-lg text-center mb-3 relative"
        style={{backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIiBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBoLTQweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMTB2MTBoLTEwek0xMCAxMGgxMHYxMGgtMTB6TTAgMjBoMTB2MTBoLTEwek0yMCAwaDEwdjEwaC0xMHpNMTAgMjBoMTB2MTBoLTEwek0zMCAxMGgxMHYxMGgtMTB6TTIwIDIwaDEwdjEwaC0xMHpNMzAgMzBoMTB2MTBoLTEweiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==')"}}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-amber-100 opacity-70 -z-10"></div>
        <p className="font-serif text-amber-950 font-bold mb-2 text-lg">
          🦴 HAMBONE EMPIRE 🦴
        </p>
        <p className="font-serif text-amber-800 text-sm mb-3">
          Bounty Hunter: <span className="text-amber-950 font-bold">siadude</span>
        </p>
        <p className="font-serif text-amber-700 text-xs mb-2">
          Reward: $212 | Bones Buried: 20.57M hmbt
        </p>
      </div>

      {/* Action Button */}
      <button 
        onClick={handleOpenUrl}
        className="w-full bg-amber-800 hover:bg-amber-700 text-amber-200 font-serif font-bold py-2 px-4 rounded-sm border-2 border-amber-300 shadow-lg transform hover:scale-105 transition-all"
        style={{textShadow: "1px 1px 0px #000"}}
      >
        🦴 CLAIM YER BOUNTY 🦴
      </button>

      {/* Wild West Footer */}
      <div className="text-center mt-3 text-xs text-amber-200">
        <p className="animate-pulse font-serif" style={{textShadow: "1px 1px 0px #000"}}>
          ⭐ Ride on, partner! ⭐
        </p>
        <p className="text-[10px] mt-1 text-amber-100 font-serif">
          Est. 1875 | Last seen: High Noon, 4/3/25
        </p>
      </div>
    </div>
  );
}
