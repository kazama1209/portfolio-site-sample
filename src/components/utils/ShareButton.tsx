import React from "react"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from "react-share"

interface ShareButtonProps {
  url: string
}

const ShareButton: React.FC<ShareButtonProps> = ({ url }) => (
  <>
    <FacebookShareButton url={url} style={{ outline: "none" }}>
      <FacebookIcon size="32px" round />
    </FacebookShareButton>
    <TwitterShareButton
      url={url}
      style={{ marginLeft: `15px`, outline: "none" }}
    >
      <TwitterIcon size="32px" round />
    </TwitterShareButton>
    <LineShareButton url={url} style={{ marginLeft: `15px`, outline: "none" }}>
      <LineIcon size="32px" round />
    </LineShareButton>
  </>
)

export default ShareButton
