import { makeStyles } from "@material-ui/core/styles"
import { Typography, Box  } from "@material-ui/core"
import Button from "@material-ui/core/Button"

import Link from "components/utils/Link"

const useStyles = makeStyles(() => ({
  shutter: {
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    backgroundColor: "#fff",
    zIndex: 99,
    "-webkit-animation": `$byeShutter 2.4s forwards`,
    animation: `$byeShutter 2.4s forwards`
  },
  logo: {
    position: "absolute",
    width: "120px",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    "-webkit-animation": `$logo 0.8s forwards`,
    animation: `$logo 0.8s forwards`,
    animationDelay: "0.2s"
  },
  "@keyframes byeShutter": {
    "70%": {
      opacity: 1
    },
    "100%": {
      display: "none",
      opacity: 0,
      zIndex: -1
    }
  },
  "@keyframes logo": {
    "0%": {
      opacity: 1
    }, 
    "50%": {
      transform: "rotate(0deg)"
    },
    "100%": {
      transform: "scale(0.8)"
    }
  },
  wrapperBox: {
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
    color: "#fff"
  },
  button: {
    color: "#fff",
    borderColor: "#fff",
    marginTop: "2rem",
    marginBottom: "1rem",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#212121"
    }
  }
}))

const Introduction: React.FC = () => {
  const classes = useStyles()

  return (
    <>
    <div className={classes.shutter}>
      <img src="nextjs.png" alt="logo" className={classes.logo}/>
    </div>
    <Box className={classes.wrapperBox}>
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
          Japanese Web Engineer !
        </Typography>
        <Link href="/about">
          <Button variant="outlined" className={classes.button}>
            Enter
          </Button>
        </Link>
      </Box>
    </Box>
    </>
  )
}

export default Introduction
