import { Cormorant_Garamond, Outfit } from "next/font/google";

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

// export const outfit = Outfit({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600"],
//   variable: "--font-outfit",
// });

export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

// export const cormorant = Cormorant_Garamond({
//   subsets: ["latin"],
//   variable: "--font-cormorant",
// });
