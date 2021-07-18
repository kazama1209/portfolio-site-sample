import { GetStaticProps } from "next"

import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Container, Box } from "@material-ui/core"

import CommonLayout from "components/layouts/CommonLayout"
import MyAvatar from "components/MyAvatar"
import MyHistory from "components/MyHistory"
import SkillCards from "components/SkillCards"
import WorkCards from "components/WorkCards"
import PostCards from "components/PostCards"
import Partners from "components/Partners"

import { fetchLatestPosts } from "lib/api/posts"
import { Post } from "interfaces/index"

const useStyles = makeStyles(() => ({
  profile: {
    padding: "4rem 0 5rem 0",
    backgroundColor: "#f0f8ff"
  },
  skills: {
    padding: "4rem 0 5rem 0",
    backgroundColor: "#ffffff"
  },
  works: {
    padding: "4rem 0 5rem 0",
    backgroundColor: "#f0f8ff"
  },
  blog: {
    padding: "4rem 0 5.5rem 0",
    backgroundColor: "#ffffff"
  },
  partners: {
    padding: "4rem 0 5rem 0",
    backgroundColor:"#f0f8ff"
  },
  box: {
    backgroundSize: "cover",
    backgroundImage: `url(https://www.pakutaso.com/shared/img/thumb/KAZ_kusahana_TP_V.jpg)`,
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
    backgroundColor: "rgba(0, 0, 0, 0.4)"
  },
}))

export const getStaticProps: GetStaticProps = async () => {
  const posts: Post[] = await fetchLatestPosts(5) // トップページは最新の5件取得

  return {
    props: { posts },
    revalidate: 1
  }
}

const Profile = ({ posts }) => {
  const classes = useStyles()

  return (
    <CommonLayout title="Profile | Portfolio">
      <>
        <section id="profile" className={classes.profile}>
          <Container maxWidth="lg">
            <Grid container justifyContent="center" style={{ marginBottom: "1rem" }}>
              <Grid item>
                <Typography variant="h2" gutterBottom>
                  Profile
                </Typography>
              </Grid>
            </Grid>
            <MyAvatar />
            <MyHistory animate={true} />
          </Container>
        </section>
        <section id="skills" className={classes.skills}>
          <Container maxWidth="lg">
            <Grid container justifyContent="center" style={{ marginBottom: "1rem" }}>
              <Grid item>
                <Typography
                  variant="h2"
                  gutterBottom
                >
                  Skills
                </Typography>
              </Grid>
            </Grid>
            <SkillCards animate={true} />
          </Container>
          
        </section>
        <section id="works" className={classes.works}>
          <Container maxWidth="lg">
            <Grid container justifyContent="center" style={{ marginBottom: "1rem" }}>
              <Grid item>
                <Typography variant="h2" gutterBottom>
                  Works
                </Typography>
              </Grid>
            </Grid>
            <WorkCards animate={true} />
          </Container>
          
        </section>
        <section id="blog" className={classes.blog}>
          <Container maxWidth="lg">
            <Grid container justifyContent="center" style={{ marginBottom: "1rem" }}>
              <Grid item>
                <Typography variant="h2" gutterBottom>
                  Blog
                </Typography>
              </Grid>
            </Grid>
            <PostCards posts={posts} animate={true} />
          </Container>
        </section>
        {/* <section id="partners" className={classes.partners}>
          <Container maxWidth="lg">
            <Grid container justifyContent="center" style={{ marginBottom: "1rem" }}>
              <Grid item>
                <Typography variant="h2" gutterBottom>
                  Partners
                </Typography>
              </Grid>
            </Grid>
            <Partners />
          </Container>
        </section> */}
      </>
    </CommonLayout>
  )
}

export default Profile
