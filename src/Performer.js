import Person from "./Person";
import { v4 } from "uuid";

import "./css/Canvas.css"

export default function Performers(props){

    const renderPeople = props.performers.map((coordinates) => {
            return (
                <Person key={v4()} update={props.update} ref={coordinates.ref} id={coordinates.id} x={coordinates.x} y={coordinates.y}/>
            )
    })
    

    return(
        <div>
            {renderPeople}
        </div>

    )
}