import { Grid } from "@material-ui/core"
import StarIcon from "@material-ui/icons/Star"

import { VerticalTimeline, VerticalTimelineElement }  from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import { careers } from "data/careers"

const MyHistory: React.FC = () => {

  return (
    <Grid container justifyContent="center" style={{ marginTop: "2rem" }}>
      <VerticalTimeline>
        {
          careers.map(({ title, description, date, backGround, icon }, i) => {
            return (
              <VerticalTimelineElement
                key={i}
                className="vertical-timeline-element"
                date={date}
                iconStyle={{ background: backGround, color: "#fff" }}
                icon={icon}
              >
                <h3 className="vertical-timeline-element-title">{title}</h3>
                <p>
                  {description}
                </p>
              </VerticalTimelineElement>
            )
          })
        }
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(255, 215, 0)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </Grid>
  )
}

export default MyHistory
