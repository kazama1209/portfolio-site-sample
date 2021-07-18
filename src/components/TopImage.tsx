import { makeStyles, Theme } from "@material-ui/core/styles"
import { Typography, Box  } from "@material-ui/core"
import Button from "@material-ui/core/Button"

import Link from "components/utils/Link"

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    backgroundSize: "cover",
    backgroundImage: `url(languages.png)`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    width: "100%",
    height: "100vh"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)"
  },
  textBox: {
    position: "absolute",
    margin: "0",
    padding: "3rem",
    textAlign: "center",
    top:"50%",
    left:"50%",
    "-ms-transform": "translate(-50%,-50%)",
    "-webkit-transform": "translate(-50%,-50%)",
    transform: "translate(-50%,-50%)",
    border: "1px solid rgba(255, 255, 255)",
    borderRadius: 8
  },
  text: {
    color: "#ffffff"
  },
  button: {
    color: "#ffffff",
    borderColor: "#ffffff",
    marginTop: "2rem",
    marginBottom: "1rem",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#212121"
    }
  }
}))

const MyAvatar: React.FC = () => {
  const classes = useStyles()

  return (
    <Box className={classes.box}>
      <div className={classes.overlay} />
      <Box className={classes.textBox}>
        <Typography
          variant="h1"
          className={classes.text}
          gutterBottom
        >
          I'm Taro Yamada
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          className={classes.text}
        >
          Japanese Web Engineer
        </Typography>
        <Link href="/profile">
          <Button variant="outlined" className={classes.button}>
            Enter
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default MyAvatar
