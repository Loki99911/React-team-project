import { TableBox, BoxPadding } from "./ReportGraphic.styled"
// import RenderShape from "components/RenderShape/RenderShape";
import { useEffect, useState} from "react";

import React from "react";
import { BarChart, Bar, LabelList, } from "recharts";


const renderCustomBarLabel = ({x, y, width, value }) => {
  return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`${value} UAH`}</text>;
};

// const src = `M100,100 h200 a20,20 0 0 1 20,20 v200 a20,20 0 0 1 -20,20 h-200 a20,20 0 0 1 -20,-20 v-200 a20,20 0 0 1 20,-20 z`


// const getPath = (x, y, width, height) => {
//  return `M${x},${y + height}
//           C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
//           C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
//           Z`;}

// const TriangleBar = (props) => {
//   const { fill, x, y, width, height } = props;

//   return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
// };


export default function ReportGraphic({ state }) {
  const [dataArray, setDataArray] = useState([]);
 

  useEffect(() => {
    setDataArray([...state])
        return () => {
      setDataArray([]);
    };
  }, [state])

   console.log(dataArray)

  return (
      <BoxPadding>
          <TableBox>
                <BarChart width={758} height={380} data={dataArray} margin={{ top: 20, right:20, bottom: 60, left: 20 }}>
      <Bar barSize={38} dataKey="uv" fill="#FF751D" label={renderCustomBarLabel} >
        <LabelList dataKey="name" position="bottom" angle="-10" />
      </Bar>
    </BarChart>      
        </TableBox>
    </BoxPadding>
  );
}


    //   <BoxPadding>
    //       <TableBox>
    //             <BarChart width={600} height={320} data={dataArray} margin={{ top: 20, right: 10, bottom: 40, left: 10 }}>
    //   <Bar barSize={38} dataKey="uv" fill="#FF751D" label={renderCustomBarLabel} >
    //     <LabelList dataKey="name" position="bottom" angle="-10" />
    //   </Bar>
    // </BarChart>      
    //     </TableBox>
    // </BoxPadding>

// export default function ReportGraphic({ onChange }) {
//     return (
//         <><BoxPadding>
//         <TableBox><p>{onChange === "expenses"? `expenses graphic`: `income graphic`}</p></TableBox></BoxPadding></>
//     )
// }