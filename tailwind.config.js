module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"], // Asegura que Tailwind se aplique a todos los archivos
    theme: {
      extend: {
        colors: {
          brown: "var(--color-brown)",
          black: "var(--color-black)",
          gray: "var(--color-gray)",
          red: "var(--color-red)",
          green: "var(--color-green)",
          blue: "var(--color-blue)",
        },
      },
    },
    plugins: [],
  };
  