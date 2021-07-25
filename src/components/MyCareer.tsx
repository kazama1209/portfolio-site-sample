import { Grid } from "@material-ui/core"
import StarIcon from "@material-ui/icons/Star"

import { VerticalTimeline, VerticalTimelineElement }  from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import { histories } from "data/histories"

const MyCareer: React.FC = () => {

  return (
    <Grid container justifyContent="center" style={{ marginTop: "2rem" }}>
      <VerticalTimeline>
        {
          histories.map(({ title, description, date, backGround, icon }, index) => {
            return (
              <VerticalTimelineElement
                key={index}
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

export default MyCareer
