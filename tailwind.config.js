/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
//const colors = require('tailwindcss/colors');

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      mono: ['ui-monospace', 'SFMono-Regular'],
      display: ['Oswald'],
      body: ['"Open Sans"'],
    },
    screens: {
      sm: "640px",
      // rest of the breakpoints
    },
    extend: {
      colors : { /** 'text-{color}-{num}' , bg-{color}-{num} */ 
        blue:{
          50 : "#e3f2fd",
          100 : "#bbdefb",
          200 : "#90caf9",
          300 : "#64b5f6",
          400 : "#42a5f5",
          500 : "#2196f3",
          600 : "#1e88e5",
          700 : "#1976d2",
          800 : "#1565c0",
          900 : "#0d47a1",
        },
      },
    },
    spacing: {
      1: '8px',
      2: '12px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '48px',
    },
  },
  plugins: [],
});

