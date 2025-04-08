/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { calculateUnitPrice, cn } from "@/lib/utils";

const PricingSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block size-[50px] rounded-full border-[5px] border-primary bg-background  focus:outline-none cursor-grab">
      <div className=" top-[-115px] absolute w-max p-2">
        <span className=" font-bold text-2xl text-gray-800">
          {Math.floor((props as any).credit).toLocaleString()} credits
        </span>
      </div>
      <div className="bg-[#000] top-[-70px] absolute w-max p-2 rounded-lg text-white">
        <span className="font-bold">
          $
          {parseFloat(
            (
              calculateUnitPrice(Math.floor((props as any).credit)) / 100
            ).toFixed(4)
          )}{" "}
        </span>
        per valid email found
      </div>
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
));
PricingSlider.displayName = SliderPrimitive.Root.displayName;

export { PricingSlider };
