import { GetStaticPaths, GetStaticProps } from "next"

import { makeStyles } from "@material-ui/core/styles"
import { Container, Grid, Typography } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"

import moment from "moment"

import ShareButton from "components/utils/ShareButton"
import CommonLayout from "components/layouts/CommonLayout"

import { fetchAllPosts, fetchPostById } from "lib/api/posts"
import { Post } from "interfaces/index"

const useStyles = makeStyles(() => ({
  blog: {
    backgroundColor: "#f0f8ff"
  },
  container: {
    paddingTop: "4rem",
    paddingBottom: "6rem",
    width: 640,
    maxWidth: "100%",
  },
  gridContainer: {
    // marginTop: "2rem",
    // width: 640,
    // maxWidth: "100%",
    padding: "0 1rem",
    overflow: "hidden"
  }
}))

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: Post[] = await fetchAllPosts()
  const paths = posts.map(({ id }) => `/blog/${id}`)

  return { 
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id: string = String(params.id)
  const post: Post = await fetchPostById(id)

  return {
    props: { post },
    revalidate: 1
  }
}

const BlogId = ({ post }) => {
  const classes = useStyles()

  return (
    <CommonLayout title="Blog | Portfolio">
      <section className={classes.blog}>
        <Container className={classes.container}>
          <Card>
            <CardContent>
              <Grid container direction="column" spacing={3} className={classes.gridContainer}>
                <Grid item>
                  <Typography variant="h2">{post.title}</Typography>
                </Grid>
                <Grid item>
                  <Typography color="textSecondary">
                    {moment(post.publishedAt).format("MMMM Do YYYY")}
                  </Typography>
                </Grid>
                <Grid item>
                  <img src={post.thumbnail.url} style={{ height: "auto", width: "100%" }} />
                </Grid>
              </Grid>
              <Grid container
                direction="column"
                alignItems="center"
                className={classes.gridContainer}
                >
                <Grid item style={{ marginTop: "1.5rem" }}>
                  <ShareButton
                    url={`https://<デプロイ後のドメイン>/blog/${post.id}`} // 適宜変更
                  />
                </Grid>
              </Grid>
              <Grid container direction="column" alignItems="center" className={classes.gridContainer}>
                <Grid item>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${post.body}`
                    }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </section>
    </CommonLayout>
  )
}

export default BlogId
