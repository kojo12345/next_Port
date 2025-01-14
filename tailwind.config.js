/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			primary: '#1c1c22',
			accent: {
				DEFAULT: '#00ff99',
				hover: '#00c187'
			}
  			// background: 'var(--background)',
  			// foreground: 'var(--foreground)'
  		},
		screens: {
			sm: "648px",
			md: "648px",
			lg: "648px",
			xl: "1288px",
		},
		fontFamily: {
			primary: "var(--font-jetbrainsMono)",
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
