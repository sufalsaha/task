import { pricingPlan } from "@/app/test/pricing-plan";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toShorthand(num: number) {
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(2).replace(/\.0$/, "")}M`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(2).replace(/\.0$/, "")}K`;
  }
  return `${num}`;
}

export function calculatePrice(creditQty: number) {
  const applicablePlan = pricingPlan.find((e) => {
    if (e.creditFrom <= creditQty && creditQty <= e.creditTo) {
      return e;
    }
  });

  if (applicablePlan) {
    const unitPrice = applicablePlan.price / applicablePlan.creditFrom;
    const totalPrice = unitPrice * creditQty;
    return Math.ceil(totalPrice);
  } else {
    return 0;
  }
}

export function calculateUnitPrice(creditQty: number) {
  const applicablePlan = pricingPlan.find((e) => {
    if (e.creditFrom <= creditQty && creditQty <= e.creditTo) {
      return e;
    }
  });
  if (applicablePlan) {
    const unitPrice = applicablePlan.price / applicablePlan.creditFrom;
    return unitPrice;
  } else {
    return 0;
  }
}
