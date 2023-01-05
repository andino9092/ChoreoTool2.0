import Person from "./Person";
import { v4 } from "uuid";

import "./css/Canvas.css"

export default function Performers(props){

    const renderPeople = props.currCoords.map((coordinates, i) => {
        const coords = [coordinates.x, coordinates.y]
        const prevCoords = props.prevCoords[i] ? [props.prevCoords[i].x, props.prevCoords[i].y] : null;
        return (
            <Person key={v4()} 
                    update={props.update}
                    id={coordinates.id} 
                    coords={coords}
                    prevCoords={prevCoords}
                    focusPerson={props.focusPerson}  
                />
        )
    })
    

    return(
        <div>
            {renderPeople}
        </div>

    )
}