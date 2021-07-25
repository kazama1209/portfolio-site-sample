import FaceIcon from "@material-ui/icons/Face"
import SchoolIcon from "@material-ui/icons/School"
import BusinessIcon from "@material-ui/icons/Business"
import ComputerIcon from "@material-ui/icons/Computer"

import { History } from "interfaces/index"

export const histories: History[] = [
  {
    title: "Birth",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "1992",
    backGround: "rgb(255, 192, 203)",
    icon: <FaceIcon />

  },
  {
    title: "University",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2011- 2015",
    backGround: "rgb(233, 30, 99)",
    icon: <SchoolIcon />
  },
  {
    title: "Business",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    date: "2015 - 2020",
    backGround: "rgb(16, 204, 82)",
    icon: <BusinessIcon />
  },
  {
    title: "Web Enginner",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "2020 - Now",
    backGround: "rgb(33, 150, 243)",
    icon: <ComputerIcon />
  }
]
