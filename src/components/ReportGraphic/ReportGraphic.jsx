import { TableBox, BoxPadding } from "./ReportGraphic.styled"
// import RenderShape from "components/RenderShape/RenderShape";
import { useEffect, useState} from "react";

import React from "react";
import { BarChart, Bar, LabelList, } from "recharts";

// const data = [
//   {
//     name: "Page A",
//     uv: 1000,
//   },
//   {
//     name: "Page B",
//     uv: 2500,
//     pv: 1398,
//     amt: 2210
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500
//   },
//   {
//     name: "Page G",
//     uv: 2290,
//     pv: 4300,
//     amt: 2100
//   }
// ];

const renderCustomBarLabel = ({x, y, width, value }) => {
  return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`${value} UAH`}</text>;
};

// const src = `M100,100 h200 a20,20 0 0 1 20,20 v200 a20,20 0 0 1 -20,20 h-200 a20,20 0 0 1 -20,-20 v-200 a20,20 0 0 1 20,-20 z`


const getPath = (x, y, width, height) => {
 return `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
          Z`;}

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


export default function ReportGraphic({ state }) {
  const [dataArray, setDataArray] = useState([]);
  console.log(dataArray)
  useEffect(() => {
    setDataArray([...state])
        return () => {
      setDataArray([]);
    };
  }, [state])

  return (
      <BoxPadding>
          <TableBox>
                <BarChart width={600} height={320} data={dataArray} margin={{ top: 20, right: 0, bottom: 20, left: 0 }}>
      <Bar dataKey="uv" fill="#FF751D" label={renderCustomBarLabel} shape={<TriangleBar />}  >
        <LabelList dataKey="name" position="bottom"  />
      </Bar>
    </BarChart>      
        </TableBox>
    </BoxPadding>
  );
}


// export default function ReportGraphic({ onChange }) {
//     return (
//         <><BoxPadding>
//         <TableBox><p>{onChange === "expenses"? `expenses graphic`: `income graphic`}</p></TableBox></BoxPadding></>
//     )
// }