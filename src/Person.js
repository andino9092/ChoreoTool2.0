import { createRef, forwardRef, useEffect, useState} from "react";
import Draggable from "react-draggable";
import gsap from "gsap";

const Person = forwardRef((props, ref) => {

    /**
     * update function updates state in App so everything is rerendered and the animation happens again
     * 
     */
    const [coords, setCoords] = useState([props.coords[0], props.coords[1]]);
    
    const tempRef = createRef();

    const onStop = (e, ui) => {
        // props.update(props.id, ui.x, ui.y);
    }

    const onDrag = (e, ui) => {
        setCoords([ui.x, ui.y]);
    }

    useEffect(() => {
        console.log(coords);
    })
    
    
    useEffect(() => {
        console.log(props.prevCoords);
        if (props.prevCoords){
            gsap.from(tempRef.current, {
                x: props.prevCoords[0],
                y: props.prevCoords[1],
                duration: .5,
            })
        }
    }, [props.currPage])

    return (
        <div>
            <Draggable 
                bounds={{top: -620, bottom: 0, left: -500, right: 500}}
                onStop={onStop}
                onDrag={onDrag}
                defaultPosition={{x: coords[0], y: coords[1]}}
                >
                    <div className="person" ref={tempRef}/>
            </Draggable>
        </div>
    )
})

export default Person;