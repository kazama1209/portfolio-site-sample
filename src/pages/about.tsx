import { makeStyles } from "@material-ui/core/styles"
import { Container, Grid, Typography } from "@material-ui/core"

import CommonLayout from "components/layouts/CommonLayout"
import MyHistory from "components/MyHistory"

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "3rem",
    marginBottom: "6rem"
  }
}))

const About: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <CommonLayout title="About | Portfolio">
        <Container maxWidth="lg" className={classes.container}>
          <Grid container justifyContent="center" style={{ marginBottom: "1rem" }} >
            <Grid item>
              <Typography variant="h2" gutterBottom>
                About
              </Typography>
            </Grid>
          </Grid>
          <MyHistory animate={false} />
        </Container>
      </CommonLayout>
    </>
  )
}

export default About
