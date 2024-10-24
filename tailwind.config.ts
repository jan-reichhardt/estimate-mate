import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '160': '40rem',
      }
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    colors: {
      'primary-bg': '#F5F5F5',
      'blue': '#4A90E2',
      'green': '#7ED321',
      'orange': '#F5A623',
      'primary': '#333333',
    }
  },
  plugins: [],
}
export default config