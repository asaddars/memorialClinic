/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'50': '#e6f7ff',
  				'100': '#bae7ff',
  				'200': '#91d5ff',
  				'300': '#69c0ff',
  				'400': '#40a9ff',
  				'500': '#1890ff',
  				'600': '#00a6fb',
  				'700': '#096dd9',
  				'800': '#0050b3',
  				'900': '#003a8c',
  				DEFAULT: '#00a6fb',
  				foreground: '#ffffff'
  			},
  			secondary: {
  				'50': '#e6fff4',
  				'100': '#b8f5e0',
  				'200': '#8aebcc',
  				'300': '#5ce1b8',
  				'400': '#2ed7a4',
  				'500': '#2ac28e',
  				'600': '#00cd9a',
  				'700': '#00a87a',
  				'800': '#00835e',
  				'900': '#005e42',
  				DEFAULT: '#2ac28e',
  				foreground: '#ffffff'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'sans-serif'
  			],
  			serif: [
  				'Merriweather',
  				'serif'
  			]
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.8s ease-out forwards',
  			'slide-up': 'slideUp 0.8s ease-out forwards',
  			'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
  			'spin-slow': 'spin 20s linear infinite'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			slideUp: {
  				'0%': {
  					transform: 'translateY(20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			bounceGentle: {
  				'0%, 20%, 50%, 80%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'40%': {
  					transform: 'translateY(-4px)'
  				},
  				'60%': {
  					transform: 'translateY(-2px)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}