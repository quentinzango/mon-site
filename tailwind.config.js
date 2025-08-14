// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'zts-blue': '#2563eb', // Vérifiez cette ligne
          'zts-dark': '#1e293b',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        }
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }