"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

export default function CreditSelector() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedOption = creditOptions[selectedIndex];

  const handleChange = (value: number[]) => {
    setSelectedIndex(value[0]);
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="bg-black text-white p-3 rounded-lg text-center mb-2 cursor-pointer">
              <p className="text-sm">
                ${(selectedOption.price / selectedOption.credits).toFixed(4)}{" "}
                per valid email found
              </p>
              <p className="text-lg font-bold">
                {selectedOption.credits.toLocaleString()} credits
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
