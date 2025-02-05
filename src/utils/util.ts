import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { DateTime } from "luxon";
import { Detector } from "detector-js";

export const cn = (...inputs: string[]) => {
  return twMerge(clsx(inputs));
};

export const goToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

export const truncateString = (str: string, num: number) => {
  if (str) {
    if (str.length <= num) {
      return str;
    } else {
      return str.substring(0, num) + "...";
    }
  }
  return "";
};

export const isObjectEmpty = (obj: object | null) => {
  return Object.keys(obj ?? {}).length === 0;
};

export const formatRelativeTime = (date: any) => {
  const now = DateTime.now();

  const diff = now
    .diff(DateTime.fromISO(date), [
      "years",
      "months",
      "days",
      "hours",
      "minutes",
      "seconds",
    ])
    .toObject();

  if (diff.years > 0) {
    return `${Math.floor(diff.years)}yrs`;
  } else if (diff.months > 0) {
    return `${Math.floor(diff.months)}mo `;
  } else if (diff.days > 0) {
    return `${Math.floor(diff.days)}d `;
  } else if (diff.hours > 0) {
    return `${Math.floor(diff.hours)}hr `;
  } else if (diff.minutes > 0) {
    return `${Math.floor(diff.minutes)}mins `;
  } else {
    return `${Math.floor(diff.seconds)}secs `;
  }
};

export const base64Url = (file: Blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = reject;
  });
};

import { MutableRefObject } from "react";

interface IRESPONSIVEHEIGHT {
  industryRef?: MutableRefObject<any>;
  regionRef?: MutableRefObject<any>;
  parentRef?: MutableRefObject<any>;
  eRef?: MutableRefObject<any>;
  openSubNav: boolean;
}

export const calculateHeight = ({
  industryRef,
  regionRef,
  parentRef,
  eRef,
  openSubNav,
}) => {
  if (industryRef?.current && regionRef?.current) {
    if (openSubNav) {
      const newHeight =
        industryRef.current.getBoundingClientRect().height +
        regionRef.current.getBoundingClientRect().height;

      parentRef.current.style.height = `${newHeight}px`;

      return newHeight;
    } else {
      parentRef.current.style.height = `0`;
    }
  } else {
    console.log("eREF");
    if (eRef.current && openSubNav) {
      parentRef.current.style.height = `${
        eRef.current.getBoundingClientRect().height
      }px`;
    } else {
      parentRef.current.style.height = "0";
    }
  }
};

export const utcToHoursFormat = (dateString: any) => {
  const formattedTime = DateTime.fromISO(dateString, { zone: "utc" })
    .setZone("local")
    .toFormat("h:mma")
    .toLowerCase();

  return formattedTime;
};

export const detectClient = () => {
  return new Detector();
};

export const extractUrls = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  return text.match(urlRegex);
};

export const formatCurrency = (amount: number): string => {
  if (amount >= 1000000) {
    return `$${(amount / 1000000)?.toFixed(1)}m`;
  } else if (amount >= 1000) {
    return `$${(amount / 1000)?.toFixed(0)}k`;
  } else {
    return `$${amount?.toFixed(0)}`;
  }
};