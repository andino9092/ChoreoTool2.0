import Person from "./Person";
import { v4 } from "uuid";

import "./css/Canvas.css"
import { forwardRef, useEffect } from "react";

const Performers = forwardRef((props, ref) => {

    const renderPeople = props.currCoords.map((coordinates, i) => {
        const coords = [coordinates.x, coordinates.y]
        const prevCoords = props.prevCoords[i] ? [props.prevCoords[i].x, props.prevCoords[i].y] : null;
        console.log(prevCoords);

        return (
            <Person key={v4()} 
                    update={props.update}
                    id={coordinates.id} 
                    coords={coords}
                    prevCoords={prevCoords}
                    currPage={props.currPage}
                    ref={props.refs[i]}
                />
        )
    })
    

    return(
        <div>
            {renderPeople}
        </div>

    )
})

export default Performers