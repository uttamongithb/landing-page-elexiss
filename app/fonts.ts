import { Inter, Rethink_Sans } from "next/font/google";

// Global font instances with CSS variables for Tailwind mapping or scoped usage
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-inter",
});

export const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-rethink",
});
