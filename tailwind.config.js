/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "slack-purple": "#611F69",
        "slack-deep": "#4A154B",
        "slack-green": "#2EB67D",
        "slack-blue": "#36C5F0",
        "slack-yellow": "#ECB22E",
        "slack-red": "#E01E5A",
        "slack-bg": "#FAF7F5",
        "slack-warm": "#F8F5F2",
        "slack-surface": "#FFFFFF",
        "slack-text": "#1D1C1D",
        "slack-muted": "#616061",
        "slack-border": "#E8E1E8",
      },
      borderRadius: {
        premium: "24px",
        "premium-sm": "18px",
      },
      fontFamily: {
        sans: [
          "Inter",
          "SF Pro Display",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
