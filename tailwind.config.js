/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          border: 'var(--color-border)', // baby-blue at 20% opacity
          input: 'var(--color-input)', // lapis-blue with opacity
          ring: 'var(--color-ring)', // sea-teal
          background: 'var(--color-background)', // pearl-black
          'background-alt': 'var(--color-background-alt)', // lapis-blue with opacity
          foreground: 'var(--color-foreground)', // forest-mint
          primary: {
            DEFAULT: 'var(--color-primary)', // sea-teal
            foreground: 'var(--color-primary-foreground)', // pearl-black
          },
          secondary: {
            DEFAULT: 'var(--color-secondary)', // lapis-blue
            foreground: 'var(--color-secondary-foreground)', // forest-mint
          },
          accent: {
            DEFAULT: 'var(--color-accent)', // aqua-green
            foreground: 'var(--color-accent-foreground)', // pearl-black
            2: 'var(--color-accent-2)', // dodger-blue
          },
          muted: {
            DEFAULT: 'var(--color-muted)', // baby-blue with opacity
            foreground: 'var(--color-muted-foreground)', // forest-mint with opacity
          },
          card: {
            DEFAULT: 'var(--color-card)', // lapis-blue with opacity
            foreground: 'var(--color-card-foreground)', // forest-mint
          },
          popover: {
            DEFAULT: 'var(--color-popover)', // lapis-blue with opacity
            foreground: 'var(--color-popover-foreground)', // forest-mint
          },
          destructive: {
            DEFAULT: 'var(--color-destructive)', // red-500
            foreground: 'var(--color-destructive-foreground)', // forest-mint
          },
          success: {
            DEFAULT: 'var(--color-success)', // aqua-green
            foreground: 'var(--color-success-foreground)', // pearl-black
          },
          warning: {
            DEFAULT: 'var(--color-warning)', // amber-500
            foreground: 'var(--color-warning-foreground)', // pearl-black
          },
          error: {
            DEFAULT: 'var(--color-error)', // red-500
            foreground: 'var(--color-error-foreground)', // forest-mint
          },
        },
        fontFamily: {
          sans: ['Plus Jakarta Sans', 'sans-serif'],
          heading: ['Bricolage Grotesque', 'sans-serif'],
          serif: ['Instrument Serif', 'serif'],
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 4px)',
          sm: 'calc(var(--radius) - 8px)',
        },
      },
    },
    plugins: [],
  }