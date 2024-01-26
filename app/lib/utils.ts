import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

type DateStyle = Intl.DateTimeFormatOptions["dateStyle"]

export function formatDate(
  date: string,
  dateStyle: DateStyle = "medium",
  locales = "en"
) {
  const formatter = new Intl.DateTimeFormat(locales, { dateStyle })
  return formatter.format(new Date(date))
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
