import { useState } from "react"
// import ReactCardFlip from "react-card-flip"

import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography, Box } from "@material-ui/core"

import { works } from "data/works"

import dynamic from "next/dynamic"

const ScrollRevealContainer = dynamic(
  import("components/utils/ScrollRevealContainer"),
  { ssr: false }
)


const Partners = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false)

  const flipCard = (e) => {
    setIsFlipped(!isFlipped)
  }

  return (
    <Grid container spacing={4} justifyContent="center">
      {
        works.map(({ image }, index: number) => {
          return (
            <Grid item key={index} sm={6} md={4} style={{ textAlign: "center" }}>
              
              <ScrollRevealContainer
                animate={true}
                delay={(index + 1) * 100}
                origin="right"
              >
                <div
                  onMouseEnter={(e) => flipCard(e)}
                  onMouseLeave={(e) => flipCard(e)}
                >
                  {/* <ReactCardFlip
                    isFlipped={isFlipped}
                    flipDirection="horizontal"
                  > */}
                    <Box
                      borderRadius={8}
                      style={{
                        width: "20rem",
                        height: "20rem",
                        margin: "0 auto",
                        backgroundSize: "cover",
                        backgroundImage: `url(${image})`,
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat"
                      }}
                    />
                    <Box
                      borderRadius={8}
                      style={{
                        width: "20rem",
                        height: "20rem",
                        margin: "0 auto",
                        backgroundSize: "cover",
                        backgroundImage: `url(${image})`,
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat"
                      }}
                    />
                  {/* </ReactCardFlip> */}
                </div>
              </ScrollRevealContainer>
            </Grid>
          ) 
        })
      }
    </Grid>
  )
}

export default Partners
