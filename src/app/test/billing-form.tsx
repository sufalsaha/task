/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
// import { calculatePrice } from "@/lib/utils";
import { PricingSlider } from "@/components/ui/pricing-slider";
import { RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { ErrorMessage } from "./error-message";
import { pricingPlan } from "./pricing-plan";

export default function BillingForm() {
  const minApplicableCredit = pricingPlan.sort((a, b) => {
    return a.creditFrom - b.creditFrom;
  })[0]?.creditFrom;

  const [selectedCredit, setSelectedCredit] = useState(minApplicableCredit);
  const [slider, setSlider] = useState(0);

  // const [applicablePrice, setApplicablePrice] = useState(3500);

  // const [error, setError] = useState<string | undefined>();

  const [pending, setPending] = useState(false);
  useEffect(() => {
    const slider = pricingPlan.findIndex((e) => e.creditFrom == selectedCredit);
    if (slider != -1) {
      setSlider(slider);
    }
    // const price = calculatePrice(selectedCredit);
    // setApplicablePrice(price);
  }, [selectedCredit, pricingPlan]);

  async function onBuyNowClick() {
    // setError(undefined);
    // setPending(true);
    // const error = await buyCredit({ credit: selectedCredit });

    console.log({ credit: selectedCredit });

    setPending(false);
    // setError(error);
  }

  return (
    <div className="max-w-screen-md text-gray-600">
      <p className="mt-5">1. Choose a package </p>
      <div className="flex flex-wrap">
        {pricingPlan
          .sort((a, b) => a.creditFrom - b.creditFrom)
          .map((e) => {
            return (
              <div
                key={e.creditFrom}
                className="flex justify-center items-center m-4"
              >
                <div
                  className={clsx(
                    "hover:bg-blue-100 border  hover:border-blue-400 rounded-md px-5 py-2 min-w-28 cursor-pointer",
                    {
                      "border-gray-300": selectedCredit !== e.creditFrom,
                      "bg-blue-100 border-blue-400":
                        selectedCredit === e.creditFrom,
                    }
                  )}
                  onClick={() => {
                    setSelectedCredit(e.creditFrom);
                  }}
                >
                  <div className="text-center text-sm font-bold">
                    {e.creditFrom.toLocaleString()}
                  </div>
                  <div className="text-center text-sm">Credits</div>
                </div>
              </div>
            );
          })}
      </div>
      <p className="">Or buy custom credits </p>
      <div className="mt-[140px]">
        <PricingSlider
          value={[slider]}
          min={0}
          max={pricingPlan.length - 1}
          step={0.01}
          onValueChange={(val) => {
            const slider = val[0];
            if (slider < pricingPlan.length - 1) {
              const creditFrom = pricingPlan[Math.floor(slider)].creditFrom;
              const creditTo = pricingPlan[Math.floor(slider)].creditTo;
              setSelectedCredit(
                Math.floor(
                  (creditFrom + (creditTo - creditFrom) * (slider % 1)) * 10
                ) / 10
              );
            } else {
              setSelectedCredit(pricingPlan.at(-1)!.creditTo);
            }
            setSlider(val[0]);
          }}
          className="my-[40px]"
          {...{ credit: selectedCredit }}
        />
      </div>
      <div className="flex justify-between text-gray-500">
        {pricingPlan.map((e, i) => {
          return (
            <div key={i}>
              <div
                className={clsx("min-w-[50px]", {
                  "text-center": i != 0,
                })}
              >
                ${e.price / 100}
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-5">2. Confirm price </p>

      <div className="pt-2">
        <span className="font-bold">$</span>{" "}
        <span className="text-5xl font-bold text-gray-800 mr-5">
          {/* {applicablePrice / 100} */}
        </span>{" "}
      </div>
      <hr className="mt-2" />
      {/* <ErrorMessage error={error} /> */}
      <div className="w-32 mt-4">
        <Button
          disabled={pending}
          onClick={onBuyNowClick}
          className="w-[120px] md:w-[150px] text-[14px] font-[700] leading-[24px] md:text-[18px] md:leading-[28px]"
        >
          {pending && <RotateCw className="animate-spin" />} Buy now
        </Button>
      </div>
    </div>
  );
}
