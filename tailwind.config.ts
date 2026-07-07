import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        primary: "#E20054",
        navy: "#0A2A51",
        surface: "#E9EDF5",
        "footer-muted": "#F8F9FC",
        social: "#F180A9",
      },
      fontFamily: {
        yekan: ["Yekan Bakh", "Tahoma", "sans-serif"],
      },
    },
  },
} satisfies Config;
