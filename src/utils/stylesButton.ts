import type { ButtonVariant } from "../types";

export const BUTTON_BASE_STYLES =
  "rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";

export const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-sky-600/90 text-white hover:bg-sky-700/90 focus:ring-sky-500 " +
    "dark:bg-sky-500/80 dark:text-white dark:hover:bg-sky-400/90 dark:focus:ring-sky-300",
  secondary:
    "bg-stone-500/80 text-white hover:bg-stone-600/80 focus:ring-stone-500 " +
    "dark:bg-stone-700/80 dark:text-stone-200 dark:hover:bg-stone-600/80 dark:focus:ring-stone-400",
  success:
    "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 " +
    "dark:bg-green-500 dark:text-white dark:hover:bg-green-400 dark:focus:ring-green-300",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 " +
    "dark:bg-red-500 dark:text-white dark:hover:bg-red-400 dark:focus:ring-red-300",
  outline:
    "border border-white/30 text-white hover:bg-white/10 focus:ring-white " +
    "dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-yellow-600",
};

export const BUTTON_SIZES = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "w-full px-1 py-1 text-lg",
  xl: "w-full px-3 py-2 text-xl",
};
