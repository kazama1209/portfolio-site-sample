import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography, Box } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Divider from "@material-ui/core/Divider"
import Tooltip from "@material-ui/core/Tooltip"

import { skills } from "data/skills"

import dynamic from "next/dynamic"

const ScrollRevealContainer = dynamic(
  import("components/utils/ScrollRevealContainer"),
  { ssr: false }
)

const useStyles = makeStyles(() => ({
  card: {
    height: "100%",
    marginBottom: "0.5rem",
    transition: "all 0.3s",
    "&:hover": {
      boxShadow:
        "1px 0px 20px -1px rgba(0,0,0,0.2), 0px 0px 20px 5px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
      transform: "translateY(-3px)"
    }
  },
  cardMedia: {
    height: 0,
    paddingTop: "56.25%"
  },
  list: {
    width: "100%",
  },
  listItem: {
    padding: 0
  }
}))

const Skills: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={4}>
      {
        skills.map(({ field, coverImage, logos }, index: number) => {
          return (
            <Grid item key={field} xs={12} sm={6} md={4}>
              <ScrollRevealContainer
                delay={(index + 1) * 100}
                origin="left"
              >
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia} image={coverImage}/>
                  <CardContent>
                    <Typography
                      variant="h4"
                      color="textSecondary"
                      gutterBottom
                    >
                      {field}
                    </Typography>
                    <Divider style={{ marginTop: "0.5rem" }} />
                    <Grid container spacing={2} style={{ marginTop: "0.5rem" }}>
                      {
                        logos.map(({ title, image }) => (                            
                          <Grid item key={index} xs={3}>
                            <Tooltip title={title}>
                              <Box
                                style={{
                                  width: "4rem",
                                  height: "4rem",
                                  margin: "0 auto",
                                  backgroundSize: "cover",
                                  backgroundImage: `url(${image})`,
                                  backgroundPosition: "center center",
                                  backgroundRepeat: "no-repeat"
                                }}
                              />
                            </Tooltip>
                          </Grid>        
                        ))
                      }
                    </Grid>
                  </CardContent>
                </Card>
              </ScrollRevealContainer>
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default Skills
