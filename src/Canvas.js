import { Layer, Stage, Shape } from 'react-konva';



import './css/Canvas.css'

export default function Canvas(props){

    const width = 1000;
    const height = 600;
    const sideLength = width/ 5;
    const numBoxes = width / sideLength

    return(
        <div className="stage">
            <Stage width={width} height={height}>
                <Layer>
                    <Shape sceneFunc={(context, shape) => {
                        context.beginPath();
                        context.moveTo(0, 0);
                        context.lineTo(width, 0);
                        context.lineTo(width, height);
                        context.lineTo(0, height);
                        context.lineTo(0, 0);
                        context.closePath();
                        context.fillStrokeShape(shape);
                    }}
                    fill="#2e2c2c"
                    />
                    <Shape sceneFunc={(context, shape) => {
                        context.beginPath();
                        var i = 0;
                        for (i = 0; i <= numBoxes; i++){
                            context.moveTo(sideLength * i, 0);
                            context.lineTo(sideLength * i, height);
                            context.stroke();
                        }
                        for (i = 0; i <= numBoxes; i++){
                            context.moveTo(0, sideLength* i);
                            context.lineTo(sideLength * numBoxes, sideLength * i);
                            context.stroke();
                        }
                        context.closePath();
                        context.moveTo(0, 0);
                        
                        context.fillStrokeShape(shape)
                    }}
                    stroke="#686363"
                    />
                </Layer>
            </Stage>
        </div>

    )
}