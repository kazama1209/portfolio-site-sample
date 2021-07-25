import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography, Box } from "@material-ui/core"
import GitHubIcon from "@material-ui/icons/GitHub"

import "imagehover.css/css/imagehover.min.css"

import { works } from "data/works"

import dynamic from "next/dynamic"

const ScrollRevealContainer = dynamic(
  import("components/utils/ScrollRevealContainer"),
  { ssr: false }
)

const useStyles = makeStyles(() => ({
  textBox: {
    position: "absolute",
    margin: "0",
    textAlign: "center",
    top:"50%",
    left:"50%",
    "-ms-transform": "translate(-50%,-50%)",
    "-webkit-transform": "translate(-50%,-50%)",
    transform: "translate(-50%,-50%)",
  },
  text: {
    color: "#fff"
  }
}))

const Works: React.FC = () => {
  const classes = useStyles()
  
  return (
    <Grid container spacing={4} justifyContent="center">
      {
        works.map(({ image, title, link }, index: number) => {
          return (
            <Grid item key={index} sm={6} md={4} style={{ textAlign: "center" }}>
                <ScrollRevealContainer
                  delay={(index + 1) * 100}
                  origin="right"
                >
                  <figure
                    className="imghvr-slide-up"
                    style={{ borderRadius: 8, backgroundColor: "transparent" }}
                  >
                    <Box
                      borderRadius={8}
                      style={{
                        width: "20rem",
                        height: "20rem",
                        margin: "0 auto",
                        backgroundSize: "cover",
                        backgroundImage: `url(${image})`,
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat"
                      }}
                    />
                    <a href={link} target="_blank">
                      <figcaption
                        style={{ 
                          backgroundColor: "#212121",
                          borderRadius: 8
                        }}>
                        <Box className={classes.textBox}>
                          <GitHubIcon style={{ fontSize: "8rem" }} />
                        </Box>
                      </figcaption>
                      </a>
                  </figure>
                </ScrollRevealContainer>
              <Typography
                variant="h4"
                component="p"
                color="textSecondary"
                style={{ marginTop: "1rem", textAlign: "center" }}
              >
                {title}
              </Typography>
            </Grid>
          ) 
        })
      }
    </Grid>
  )
}

export default Works
