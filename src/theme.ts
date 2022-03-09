import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: '#1a94ff',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  components:{
    MuiLink:{
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          '&:hover, &.active': {
            color: '#FF6464',
            opacity: 0.7,
          },
        },
      },
    }
  }
})
theme = responsiveFontSizes(theme)
export default theme
