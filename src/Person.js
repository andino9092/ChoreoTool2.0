import { forwardRef} from "react";
import Draggable from "react-draggable";

const Person = forwardRef((props, ref) => {

    const onStop = (e, ui) => {
        props.update(props.id, ui.x, ui.y);
    }

    return (
        <div>
            <Draggable 
                bounds={{top: -620, bottom: 0, left: -500, right: 500}}
                onStop={onStop}
                defaultPosition={{x: props.x, y: props.y}}
                >
                    <div className="person" ref={ref}/>
            </Draggable>
        </div>
    )
})

export default Person;