import { extendTheme } from '@chakra-ui/react'

export const globalTheme = extendTheme({
  colors: {
    dPimary: '#666CFF',
    dBlack: '#242424',
    dRed: {
      400: '#F56565',
      500: '#E53E3E',
    },
    dGray: {
      dark: '#232323B3',
      medium: '#BABABA',
      light: '#F8F8F8',
    },
  },
})
