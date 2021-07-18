import { makeStyles, Theme } from "@material-ui/core/styles"
import { Grid, Typography } from "@material-ui/core"
import Avatar from "@material-ui/core/Avatar"

const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30)
  },
  name: {
    marginTop: "1rem",
    textAlign: "center"
  }
}))

const MyAvatar: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Avatar
          alt="Taro Tanaka"
          src="myavatar.png"
          className={classes.avatar}
        />
        <Typography variant="h5" className={classes.name}>
          Taro Yamada
        </Typography> 
      </Grid>
    </Grid>
  )
}

export default MyAvatar
