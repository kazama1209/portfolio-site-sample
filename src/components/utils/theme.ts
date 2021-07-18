import { createTheme } from "@material-ui/core/styles"
import { red } from "@material-ui/core/colors"

const black: string = "#212121"
const white: string = "#fafafa"
const blue: string = "#757ce8"

const theme = createTheme({
  palette: {
    common: {
      black: black,
      white: white
    },
    primary: {
      main: black
    },
    secondary: {
      main: white
    },
    info: {
      main: blue
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    h1: {
      fontSize: "4rem",
      fontWeight: 500
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 500
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 500
    },
    h4: {
      fontSize: "1rem",
      fontWeight: 500
    }
  }
})

export default theme
