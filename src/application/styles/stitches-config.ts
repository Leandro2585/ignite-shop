import { createStitches } from '@stitches/react'

export const { config, styled, globalCss, css, keyframes, getCssText, theme, createTheme } = createStitches({
  theme: {
    colors: {
      white: '#FFF',
      gray900: '#121214',
      gray800: '#202024',
      gray300: '#C4C4CC',
      gray100: '#E1E1E6',
      green500: '#00875F',
      green300: '#00B37E',
      purple300: '#7465D4',
      backgroundGradient: 'linear-gradient(0deg, $purple300 0%, $green300 100%)'
    },
    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      xxl: '2rem'
    },
    sizes: {
      '80': '5rem'
    }
  }
})