/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
    colors: {
      darkBlue: '#032648',
      darkMediumBlue: '#052745',
      darklightBlue: '#052D50',
      darkSoftBlue: '#033560',
      darkBlueIndigo: '#1F5279',
      whiteApp: '#FFFFFF',
    }
  },
  plugins: [
    'react-native-worklets/plugin',
  ],
}

