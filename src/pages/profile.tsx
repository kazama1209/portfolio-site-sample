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
  }
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
      </>
    </CommonLayout>
  )
}

export default Profile
