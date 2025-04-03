"use client";

import { Slider } from "@/components/ui/slider";
import { useState } from "react";
// import Image from "next/image";

// import { usePathname } from "next/navigation";
// import { SliderDemo } from "./slider";

const creditsOptions = [1000, 5000, 10000, 20000, 30000, 40000, 50000, 100000];

export default function Home() {
  const [selectedCredits, setSelectedCredits] = useState(creditsOptions[0]);

  const pricePerEmail = 0.025;
  const pricePerEmailm = selectedCredits * 0.025;
  // const num = 100000 / 8;
  // const nu = ((selectedCredits - 1000) / (100000 - 1000)) * 100;

  return (
    <div className="w-full flex justify-center items-center ">
      <div className="max-w-[1200px] px-20 justify-center items-cente mt-5 ">
        <div>
          <p className="mb-[20px] ">1. Choose a package</p>
          <div className="grid grid-cols-5 gap-4">
            {creditsOptions.map((credits) => (
              <button
                key={credits}
                onClick={() => setSelectedCredits(credits)}
                className={`w-[200px] flex flex-col justify-center items-center border py-3 rounded-2xl cursor-pointer
              ${
                selectedCredits === credits
                  ? "bg-[#a9ff62] border-blue-500"
                  : "bg-white border-gray-300"
              }
               hover:bg-[#a9ff62]`}
              >
                <p> {credits.toLocaleString()} </p>
                <p> Credits</p>
              </button>
            ))}
          </div>
        </div>

        <div>
          <div>
            <p className="mb-[20px] ">Or buy custom credits</p>

            <div>
              <div className="flex flex-col items-center p-4 mt-30">
                <div className="w-full mb-6 relative">
                  <Slider
                    defaultValue={[1000]}
                    min={1000}
                    max={100000}
                    step={1}
                    onValueChange={(value) => setSelectedCredits(value[0])}
                    value={[selectedCredits]}
                  />
                  <div
                    className="absolute -top-18 -right-10 w-56 bg-black text-white text-sm px-3 py-1 rounded-lg transform "
                    style={{
                      left: `${
                        ((selectedCredits - 1000) / (100000 - 1000)) * 100
                      }%`,
                    }}
                  >
                    ${pricePerEmail.toFixed(4)} per valid email found
                    <h2 className="text-xl font-semibold">
                      {selectedCredits.toLocaleString()} credits
                    </h2>
                  </div>
                  <div className="mt-2 flex justify-between ">
                    <div>$25</div>
                    <div>$123</div>
                    <div>$240</div>
                    <div>$470</div>
                    <div>$690</div>
                    <div>$900</div>
                    <div>$1100</div>
                    <div>$2000</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <p>2. Confirm Price</p>

              <h2 className=" text-3xl font-bold mt-2">
                ${pricePerEmailm.toFixed(2)}
              </h2>
              <div className="border w-full my-3"></div>
              <div>
                <button className="px-[40px] py-[8px] bg-[#000] text-[#fff] rounded-md ">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
