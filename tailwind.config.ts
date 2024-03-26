import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      "avenir-book": ["avenirbook", "Helvetica", "Arial", "sans-serif"],
      blissful: [
        "blissful_thinkingregular",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      fontSize:{
          'body-2xl':'1.75rem',
          'body-xl':'1.5625rem',
          'body-lg' :'1.375rem',
          'body-md' :'1.1875rem',
          'body-sm' :'1rem',
          'body-xs' :'.875rem',
          'heading-one-xl':'3.625rem',
          'heading-one-lg':'3.375rem',
          'heading-one-sm':'1.5625rem',
          'heading-two-xl':'3.25rem',
          'heading-two-lg':'3rem',
          'heading-two-sm':'2.75rem',
          'heading-two-xm':'2rem',
          'heading-three-xl':'3rem',
          'heading-three-lg':'2.75rem',
          'heading-three-sm':'2.5rem',
          'heading-three-xm':'1.80rem',
          'heading-four-xl':'2rem',
          'heading-four-lg':'1.75rem',
          'heading-four-sm':'1.6rem',
      },

      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(min-aspect-ratio: 13/20)' },
      },
    },
  },
  plugins: [addVariablesForColors,require("daisyui")],
  daisyui: {
    darkTheme:"light",
    base: false,
  },
};
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
export default config;
