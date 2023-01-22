import { Wrap } from "./RenderShape.styled"

export default function RenderShape(props) {
    const { fill, x, y, width, height } = props;
    return (
        <Wrap x={x} y={y} height={height} width={width} color={fill}>
        </Wrap>
    )
}