/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8FBFF",
        foreground: "#1A1A1A",
        primary: "#2C8DF8",
        "primary-foreground": "#FFFFFF",
        "primary-light": "#E8F2FF",
        secondary: "#5DA12B",
        "secondary-foreground": "#FFFFFF",
        "secondary-light": "#F0F7E8",
        "accent-blue": "#1E5FD8",
        "accent-green": "#4A8620",
        destructive: "#D32F2F",
        "destructive-foreground": "#FFFFFF",
      },
      fontFamily: {
        heading: ["Roboto", "system-ui", "sans-serif"],
        paragraph: ["Roboto", "system-ui", "sans-serif"]
      },
      fontWeight: {
        heading: "700",
        paragraph: "400"
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1', letterSpacing: '0.05em' }],
        sm: ['0.875rem', { lineHeight: '1.25', letterSpacing: '0.025em' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '0em' }],
        lg: ['1.125rem', { lineHeight: '1.75', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.75', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '2', letterSpacing: '-0.015em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25', letterSpacing: '-0.015em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
      }
    },
  },
  plugins: [],
};



