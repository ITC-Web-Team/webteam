module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'paper': '#FFFDF7',
        'paper-alt': '#F7F3EA',
        'ink': '#2D3748',
        'ink-light': '#4A5568',
        'primary': '#FF6B6B',
        'code': '#F7F3EA',
        'javascript': '#f1e05a',
        'typescript': '#3178c6',
      },
      fontFamily: {
        'handwritten': ['Architects Daughter', 'cursive'],
        'sans': ['Inter', 'sans-serif'],
        'mono': ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        'paper-texture': "url('/public/img/paper-texture.webp')",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      }
    },
  },
  plugins: [],
}
