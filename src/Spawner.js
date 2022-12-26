import Draggable from "react-draggable";
import { useEffect, useState } from "react";


export default function Spawner(props){

    const [delta, setDelta] = useState([0, 0])
    const [id, inc] = useState(0);

    const onDrag = (ui) => {
        setDelta([ui.x, ui.y])
    }

    const onDrop = (e, ui) => {
        props.spawner(id, ui.x, ui.y);
        inc(id + 1);
        console.log([ui.x, ui.y]);
    }

    useEffect(() => {
    }, [delta])

    return(
        <div>
            <Draggable 
                bounds={{top: -620, bottom: 0, left: -500, right: 500}}
                onDrag={onDrag} 
                onStop={onDrop}
                position={{x: 0, y: 0}}
                >
                <div className="person"/>
            </Draggable>
        </div>

    )
}