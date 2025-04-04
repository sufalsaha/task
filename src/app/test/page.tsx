"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const creditOptions = [
  { credits: 1000, price: 25 },
  { credits: 5000, price: 123 },
  { credits: 10000, price: 240 },
  { credits: 20000, price: 470 },
  { credits: 30000, price: 690 },
  { credits: 40000, price: 900 },
  { credits: 50000, price: 1100 },
  { credits: 100000, price: 2000 },
];

export default function Page() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (value: number[]) => {
    setSelectedIndex(value[0]);
  };

  const handlePackageClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto p-4">
      <h2 className="text-lg font-semibold mb-2">1. Choose a package</h2>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {creditOptions.map((option, index) => (
          <button
            key={index}
            className={cn(
              "border p-4 rounded-lg text-center transition-all",
              selectedIndex === index
                ? "bg-green-300 border-blue-500"
                : "bg-white border-gray-300"
            )}
            onClick={() => handlePackageClick(index)}
          >
            <p className="font-bold">{option.credits.toLocaleString()}</p>
            <p>Credits</p>
          </button>
        ))}
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="bg-black text-white p-3 rounded-lg text-center mb-2 cursor-pointer">
              <p className="text-sm">
                $
                {(
                  creditOptions[selectedIndex].price /
                  creditOptions[selectedIndex].credits
                ).toFixed(4)}{" "}
                per valid email found
              </p>
              <p className="text-lg font-bold">
                {creditOptions[selectedIndex].credits.toLocaleString()} credits
              </p>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Adjust slider to select credits</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Slider
        min={0}
        max={creditOptions.length - 1}
        step={1}
        value={[selectedIndex]}
        onValueChange={handleChange}
        className="mb-4"
      />
      <div className="flex justify-between text-sm mt-2">
        {creditOptions.map((option, index) => (
          <span key={index} className="text-gray-600">
            ${option.price}
          </span>
        ))}
      </div>
    </div>
  );
}
