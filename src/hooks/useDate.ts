import { useEffect, useState } from 'react';

// Readonly objects, can't be modified
const LOCALE = 'en' as const;
const LOCALE_DAY_CONFIG = { weekday: 'long' } as const;
const LOCALE_MONTH_CONFIG = { month: 'long' } as const;
const LOCALE_TIME_CONFIG = {
  hour: 'numeric',
  hour12: true,
  minute: 'numeric',
  second: 'numeric',
} as const;

export interface DateTime {
  formattedDate: string;
  time: string;
}

// Our hook has a return type, no when we call it we know what we will get back.
export const useDate = (): DateTime => {
  const [today, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 60);
    return () => clearInterval(timer);
  }, []);

  // Un-comment code below to see errors, we can't modify a readonly object.
  // LOCALE_DAY_CONFIG.someNewProp = "Yesterday";
  // LOCALE_DAY_CONFIG.weekday = "Yesterday";

  const date = today.getDate();
  const day = today.toLocaleDateString(LOCALE, LOCALE_DAY_CONFIG);
  const month = today.toLocaleDateString(LOCALE, LOCALE_MONTH_CONFIG);
  const time = today.toLocaleTimeString(LOCALE, LOCALE_TIME_CONFIG);

  const formattedDate = `${day} ${date} ${month}`;

  return { formattedDate, time };
};
