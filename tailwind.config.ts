// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        "text-glow": "text-glow 3s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        "text-glow": {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 5px rgba(37, 99, 235, 0.8)) drop-shadow(0 0 10px rgba(249, 115, 22, 0.8))'
          },
          '50%': {
            filter: 'drop-shadow(0 0 15px rgba(37, 99, 235, 0.4)) drop-shadow(0 0 25px rgba(249, 115, 22, 0.4))'
          }
        }
      },
    },
  },
  plugins: [],
};