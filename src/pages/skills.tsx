import { makeStyles } from "@material-ui/core/styles"
import { Container, Grid, Typography, Box } from "@material-ui/core"

import CommonLayout from "components/layouts/CommonLayout"
import SkillCards from "components/SkillCards"

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "3rem",
    marginBottom: "6rem"
  },
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
    <>
      <CommonLayout title="Skills | Portfolio">
        <Container maxWidth="lg" className={classes.container}>
          <Grid container justifyContent="center" style={{ marginBottom: "1rem" }} >
            <Grid item>
              <Typography variant="h2" gutterBottom>
                Skills
              </Typography>
            </Grid>
          </Grid>
          <SkillCards animate={false} />
        </Container>
      </CommonLayout>
    </>
  )
}

export default Skills
