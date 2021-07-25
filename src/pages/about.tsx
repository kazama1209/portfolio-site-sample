import React from "react"
import { GetStaticProps } from "next"

import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Container, Box } from "@material-ui/core"

import CommonLayout from "components/layouts/CommonLayout"
import MyAvatar from "components/MyAvatar"
import MyCareer from "components/MyCareer"
import Skills from "components/Skills"
import Works from "components/Works"
import Posts from "components/Posts"

import { getLatestPosts } from "lib/api/posts"
import { Post } from "interfaces/index"

const useStyles = makeStyles(() => ({
  gridContainer: {
    marginBottom: "1rem"
  },
  profile: {
    padding: "4rem 0 5rem 0",
    backgroundColor: "#f0f8ff"
  },
  skills: {
    padding: "4rem 0 5rem 0",
    backgroundColor: "#fff"
  },
  works: {
    padding: "4rem 0 5rem 0",
    backgroundColor: "#f0f8ff"
  },
  blog: {
    padding: "4rem 0 5.5rem 0",
    backgroundColor: "#fff"
  }
}))

export const getStaticProps: GetStaticProps = async () => {
  const res = await getLatestPosts(5)
  const latestPosts: Post[] = res.data.contents // トップページは最新の5件を取得

  return {
    props: { latestPosts },
    revalidate: 1
  }
}

const About = ({ latestPosts }) => {
  const classes = useStyles()

  return (
    <CommonLayout title="About | Portfolio">
      <React.Fragment>
        <section id="profile" className={classes.profile}>
          <Container maxWidth="lg">
            <Grid container justifyContent="center" className={classes.gridContainer}>
              <Grid item>
                <Typography variant="h2" gutterBottom>
                  Profile
                </Typography>
              </Grid>
            </Grid>
            <MyAvatar />
            <MyCareer />
          </Container>
        </section>
        <section id="skills" className={classes.skills}>
          <Container maxWidth="lg">
            <Grid container justifyContent="center" className={classes.gridContainer}>
              <Grid item>
                <Typography
                  variant="h2"
                  gutterBottom
                >
                  Skills
                </Typography>
              </Grid>
            </Grid>
            <Skills />
          </Container>
        </section>
        <section id="works" className={classes.works}>
          <Container maxWidth="lg">
            <Grid container justifyContent="center" className={classes.gridContainer}>
              <Grid item>
                <Typography variant="h2" gutterBottom>
                  Works
                </Typography>
              </Grid>
            </Grid>
            <Works />
          </Container>
        </section>
        <section id="blog" className={classes.blog}>
          <Container maxWidth="lg">
            <Grid container justifyContent="center" className={classes.gridContainer}>
              <Grid item>
                <Typography variant="h2" gutterBottom>
                  Blog
                </Typography>
              </Grid>
            </Grid>
            <Posts posts={latestPosts} />
          </Container>
        </section>
      </React.Fragment>
    </CommonLayout>
  )
}

export default About
