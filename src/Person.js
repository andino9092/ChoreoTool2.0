import { createRef, forwardRef, useEffect, useState} from "react";
import Draggable from "react-draggable";
import gsap from "gsap";

const Person = forwardRef((props, ref) => {

    /**
     * When dragging, it transitions from the original position which shouldn't be happening.
     * If I use coords state to move from, there is no animation since it will always be equal to coords
     * 
     * If I use isDraggin state to determine when to do the animation it won't work since props.coords
     * is being update. That's why it keeps on starting from where it previously was.
     * 
     * 
     */

    const [status, setStatus] = useState(false);

    
    const tempRef = createRef();

    const onStop = (e, ui) => {
        props.update(props.id, ui.x, ui.y);
    }

    const handleClick = () => {
        console.log(props.id)
        setStatus(true);
        props.focusPerson(props.id);
    }
    
    useEffect(() => {
        // console.log(props.id);
        if (props.prevCoords){
            gsap.from(tempRef.current, {
                x: props.prevCoords[0],
                y: props.prevCoords[1],
                duration: .5,
            })
        }
    })

    return (
        <div>
            <Draggable 
                bounds={{top: -620, bottom: 0, left: -500, right: 500}}
                onStop={onStop}
                defaultPosition={{x: props.coords[0], y: props.coords[1]}}
                // onClick={handleClick}
                >
                    <div className={`person${status? "focus":""}`}  
                    onClick={handleClick}
                    ref={tempRef}
                    />
            </Draggable>
        </div>
    )
})

export default Person;