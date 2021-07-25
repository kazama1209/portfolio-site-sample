import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"

import React, { useCallback } from "react"

import { makeStyles } from "@material-ui/core/styles"
import { Container, Grid, Typography } from "@material-ui/core"
import { Pagination } from "@material-ui/lab"

import CommonPageTemplate from "components/layouts/CommonLayout"
import PostCards from "components/Posts"
import { getAllPosts, getPostsByPageNumber } from "lib/api/posts"

import { Post } from "interfaces/index"

const useStyles = makeStyles(() => ({
  blog: {
    backgroundColor: "#f0f8ff"
  },
  container: {
    paddingTop: "3rem",
    paddingBottom: "6rem"
  },
  card: {
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
  button: {
    textTransform: "none"
  }
}))

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getAllPosts()
  const allPosts: Post[] = res.data.contents

  const per_page = 8

  const range = (start: number, end: number) => {
    return (
      [...Array(end - start + 1)].map((_, i) => start + i)
    )
  }

  const paths = range(1, Math.ceil(allPosts.length / per_page)).map((number) =>  `/blog/page/${number}`)

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentPageNumber: number = Number(params.number)
  const limit: number = 8

  const res1 = await getPostsByPageNumber(currentPageNumber, limit)
  const postsByPageNumber: Post[] = res1.data.contents

  const res2 = await getAllPosts()
  const allPosts: Post[] = res2.data.contents

  return { 
    revalidate: 1,
    props: { 
      currentPageNumber,
      postsByPageNumber,
      allPosts
    }
  }
}

const BlogPage = ({ currentPageNumber, postsByPageNumber, allPosts }) => {
  const classes = useStyles()
  const router = useRouter()

  const handleChangePage = useCallback(
    (_: React.ChangeEvent<unknown>, number: number) => {
      router.push(`${number}`)
    },[router]
  )

  const perPage: number = 8

  return (
    <CommonPageTemplate title="Blog | Portfolio">
      <section id="blog-page" className={classes.blog}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container justifyContent="center" style={{ marginBottom: "1rem" }}>
            <Grid item>
              <Typography variant="h2" gutterBottom>
                Blog
              </Typography>
            </Grid>
          </Grid>
          <PostCards posts={postsByPageNumber} isAnimationOff={true} />
          <Grid container justifyContent="center" style={{ marginTop: "3rem" }}>
            <Grid item>
            <Pagination
              count={Math.ceil(allPosts.length / perPage)}
              variant="outlined"
              page={currentPageNumber}
              onChange={handleChangePage}
            />
            </Grid>
          </Grid>
        </Container>
      </section>
    </CommonPageTemplate>
  )
}

export default BlogPage
