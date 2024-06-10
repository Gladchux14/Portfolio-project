/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",
            "./src/Components/**/*.{js,ts,jsx,tsx}"
          ],
  theme: {
    fontSize: {
      'body-1': '16px', // Example size, customize as needed
    },
    lineHeight: {
      'body-1': '24px', // Example line height, customize as needed
    },
    extend: {},
  },
  plugins: [],
}

