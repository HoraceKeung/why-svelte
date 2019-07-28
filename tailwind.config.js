let defaultConfig = require('tailwindcss/defaultConfig')

module.exports = {
	theme: {
		colors: {
			'transparent': 'transparent',
			'white': '#ffffff',
			'black': '#000000',

			'prime': '#ff3e00',
			'second': '#4a4a55',
			'second-10': '#4a4a551a',
			'flash': '#40b3ff'
		},
		borderColor: theme => ({
			...theme('colors'),
			default: theme('colors.second')
		}),
		minWidth: {...defaultConfig.theme.minWidth,
			'8': '2rem'
		},
		container: {
			center: true,
			padding: '1rem'
		}
	}
}
