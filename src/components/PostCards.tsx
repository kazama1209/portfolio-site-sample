import moment from "moment"

import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import IconButton from "@material-ui/core/IconButton"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import Button from "@material-ui/core/Button"

import { Post } from "interfaces/index"
import Link from "components/utils/Link"

import dynamic from "next/dynamic"

const ScrollRevealContainer = dynamic(
  import("components/utils/ScrollRevealContainer"),
  { ssr: false }
)

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "3rem"
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

interface PostCardsProps {
  posts: Post[]
  animate: boolean
}

const PostCards: React.FC<PostCardsProps> = ({ posts, animate }) => {
  const classes = useStyles()

  const featuredPosts = (index: number): boolean => {
    return index < 2
  }

  return (
    <Grid container spacing={4}>    
      {posts?.map((post: Post, index: number) => (
        <Grid
          item key={post.id}
          sm={featuredPosts(index) ? 12 : 6}
          md={featuredPosts(index) ? 6 : 4}
        >
          <ScrollRevealContainer
            animate={animate}
            delay={(index + 1) * 100}
            origin="bottom"
          >
            <Card className={classes.card}>
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={post.title}
                subheader={moment(post.publishedAt).format("MMMM Do YYYY")}
              />
              <Link href="/blog/[id]" as={`/blog/${post.id}`}>
                <CardMedia className={classes.cardMedia} image={post.thumbnail.url} title={post.title} />
              </Link>
              <CardContent>
                <Typography variant="body1" color="textSecondary" component="p">
                  {post.subTitle?.length > 140 ? post.subTitle.substr(0, 140) + "..." : post.subTitle}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Link href="/blog/[id]" as={`/blog/${post.id}`}>
                  <Button
                    variant="outlined"
                    size="small"
                    className={classes.button}
                  >
                    Read More...
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </ScrollRevealContainer>
        </Grid>
      ))}
    </Grid>
  )
}

export default PostCards
