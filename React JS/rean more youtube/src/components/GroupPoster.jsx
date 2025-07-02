import React from "react"
import Poster from "./Poster"
import p1 from "../assets/photo_2024-06-07_09-52-38.jpg"
import p2 from "../assets/photo_2024-06-07_09-52-38.jpg"
import p3 from "../assets/photo_2024-06-07_09-52-38.jpg"
const GroupPoster = () => {
  return (
    <React.Fragment>

        <Poster imge={p1} name="Thy sodanan" text="I want to be rish man"><button>clickhere</button></Poster>
        <Poster imge={p2} name="Ny leangmeng" text="I want to be rish man"/>
        <Poster imge={p3} name="On dara"text="I want to be rish man"/>
    </React.Fragment>
  )
}

export default GroupPoster
