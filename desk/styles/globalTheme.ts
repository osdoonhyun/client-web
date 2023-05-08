import { extendTheme } from '@chakra-ui/react'

export const globalTheme = extendTheme({
  colors: {
    dPrimary: '#666CFF',
    dPrimaryHover: {
      dark: '#575ce0',
      transparency: '#666bffd2',
    },
    dBlack: '#242424',
    dRed: {
      400: '#F56565',
      500: '#E53E3E',
    },
    dGray: {
      dark: '#232323d5',
      medium: '#BABABA',
      light: '#F8F8F8',
    },
  },

  fonts: {
    body: "'IBM Plex Sans KR', sans-serif",
    heading: "'Noto Sans KR', sans-serif",
    // heading: "'Roboto', sans-serif",
  },
})
