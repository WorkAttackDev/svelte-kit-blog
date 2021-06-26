const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		borderRadius: {
			none: '0',
			sm: '0.125rem',
			DEFAULT: '1.5rem',
			full: '9999px'
		},
		boxShadow: {
			sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
			DEFAULT: '0 1px 2px rgba(0, 0, 0, 0.2)',
			md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			focus: '0 1px 2px rgba(255, 129, 28, 0.2)',
			fill: '0.5em 0 0.5em -0.4em #ff811c, inset -5.25em 0 0 0 #ff811c',
			xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
			'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
			inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
			none: 'none'
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.trueGray,
			animation: {
				DEFAULT: '#A855F7',
				secondary: '#6366F1'
			},
			design: {
				DEFAULT: '#FACC15'
			},
			programming: {
				DEFAULT: '#1E252B',
				secondary: '#002644'
			},
			workattack: {
				DEFAULT: '#ff811c'
			},
			secondary: '#f0f2f5'
		},

		screens: {
			xs: '375px',
			sm: '500px',
			md: '768px',
			lg: '1024px',
			xl: '1440px'
		},

		extend: {
			backgroundImage: (theme) => ({
				'gradient-design':
					"url('/images/pattern.svg'), linear-gradient(to right, #ff811c, #FACC15)",
				'gradient-animation':
					"url('/images/pattern.svg'), linear-gradient(to right, #A855F7, #6366F1)",
				'gradient-programming':
					"url('/images/pattern_50.svg'), linear-gradient(to right, #1E252B, #002644)",
				'workattack-pattern': "url('/images/pattern.svg')",
				'workattack-pattern_5': "url('/images/pattern_5.svg')"
			})
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
