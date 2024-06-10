/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-green-gradient":  "linear-gradient(45deg, #00BD78 20%, #04ACBB)",
        "chat-bg": "url('/chat-bg.jpg')",
        "my-message": "linear-gradient(90deg, #00BD78 1%, #04ACBB)",
        
      },
      colors: {
        primary: "#04ACBB",
        secondary: "#DBE2DB",
        neutral: "#fff",
        constrast: "#000",
        online: "#00BD32",
        blur: "rgba(221, 228, 221, 0.5)",
        success: "",
        warning: "",
        error: "",

        "others-message": "#5D656A",
        "new-message": "#F23C3C",
        "tab-inactive": "#8FADBD",
        "custom-black": 'rgba(0, 0, 0, 0.7)',
      },
      fontSize: {
        md: "1.1rem"
      }
    }
  },
  plugins: [],
};

