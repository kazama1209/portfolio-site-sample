import { makeStyles, Theme } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"

import GitHubIcon from "@material-ui/icons/GitHub"
import TwitterIcon from "@material-ui/icons/Twitter"
import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import MailIcon from "@material-ui/icons/Mail"

// import { socialNetworks } from "data/social_networks"
// import { SocialNetwork } from "interfaces/index"

const useStyles = makeStyles((theme: Theme) => ({
  snsIcon: {
    width: "30px",
    height: "30px",

    [theme.breakpoints.down("xs")]: {
      width: "25px",
      height: "25px",
    }
  }
}))

interface SocialNetworksProps {
  color?: string
}

const SocialNetworks = ({ color }: SocialNetworksProps) => {
  const classes = useStyles()

  return (
    <Grid item container spacing={2} justifyContent="center">
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/"
      >
        <GitHubIcon
          className={classes.snsIcon}
          color={color ? "primary" : "secondary"}
        />
      </Grid>
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href="https://twitter.com/"
      >
        <TwitterIcon
          className={classes.snsIcon}
          color={color ? "primary" : "secondary"}
        />
      </Grid>
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href="https://instagram.com/"
      >
        <InstagramIcon
          className={classes.snsIcon}
          color={color ? "primary" : "secondary"}
        />
      </Grid>
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href="https://www.facebook.com/"
      >
        <FacebookIcon
          className={classes.snsIcon}
          color={color ? "primary" : "secondary"}
        />
      </Grid>
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href="https://jp.linkedin.com/"
      >
        <LinkedInIcon
          className={classes.snsIcon}
          color={color ? "primary" : "secondary"}
        />
      </Grid>
      {/* <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href="/contact"
      >
        <MailIcon
          className={classes.snsIcon}
          color={color ? "primary" : "secondary"}
        />
      </Grid> */}
    </Grid>
  )
}

export default SocialNetworks
