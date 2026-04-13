/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        court: {
          green: '#2d6a4f',
          dark: '#1a1a2e',
          card: '#16213e',
          accent: '#e94560',
          surface: '#0f3460',
          gold: '#f0c040',
          live: '#ff4444',
        },
      },
    },
  },
  plugins: [],
}
