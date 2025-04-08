/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useRef } from "react";

import animationData7 from "@/static/Main Scene (2).json";
import Lottie from "lottie-react";

export default function CreditSelector() {
  const lottieRef = useRef<any>(null);

  const playSegment = () => {
    const markers = lottieRef.current?.getLottie?.().animationData.markers;
    console.log(lottieRef.current?.getLottie);
    const start = markers.find((m: any) => m.name === "running");
    const end = markers.find((m: any) => m.name === "stop");
    console.log("hi" + start);

    if (start && end) {
      lottieRef.current.playSegments([start.frame, end.frame], true);
    }
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto p-4">
      <h2 className="text-lg font-semibold mb-2">1. Choose a package</h2>

      <div className="w-[200px] h-[200px] mt-20 ">
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData7}
          loop={false}
        />
      </div>

      <button onClick={playSegment}>Play Named Segment</button>
    </div>
  );
}
