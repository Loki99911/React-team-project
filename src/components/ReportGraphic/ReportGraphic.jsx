import { TableBox, BoxPadding, Text } from "./ReportGraphic.styled"
// import RenderShape from "components/RenderShape/RenderShape";
import { useEffect, useState} from "react";

import React from "react";
import { BarChart, Bar, LabelList, ResponsiveContainer, Cell, ComposedChart, CartesianGrid,XAxis, YAxis } from "recharts";


import { useMediaRules } from "MediaRules/MediaRules";

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

const renderCustomizedBottomLabel = ({x, y, width, value }) => {
  return <Text x={x*1.05 + width } y={y} fill="#666" textAnchor="middle" dy={-6}>{`${value} UAH`}</Text>;
};

const renderCustomBarLabel = ({x, y, width, value }) => {
  return <Text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`${value} UAH`}</Text>;
};

export default function ReportGraphic({ state }) {
  const [dataArray, setDataArray] = useState([]);
 

  useEffect(() => {
    const sortedArray = state.sort(function (a, b) {
  if (a.uv < b.uv) {
    return 1;
  }
  if (a.uv > b.uv) {
    return -1;
  }
  return 0;
}) 
    setDataArray([...sortedArray])
        return () => {
      setDataArray([]);
    };
  }, [state]) 
  const {isMobile} = useMediaRules()
//content={renderCustomizedBottomLabel}
  return (
      <BoxPadding>
          <TableBox>
            <ResponsiveContainer width="100%" height="100%">
{     isMobile ?        <ComposedChart
          layout="vertical"
          width={280}
          height={520}
          data={dataArray}
          margin={{
            top: 40,
            right: 100,
            bottom: 20,
            left: 100,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" hide="true"/>
          <YAxis  type="none" hide="true" />
            <Bar dataKey="uv" barSize={15} fill="#413ea0" label={renderCustomizedBottomLabel}> 
              <LabelList dataKey="name" position="left" />
              {dataArray.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))} 
              </Bar>
        </ComposedChart> : <BarChart width={604} height={380} barCategoryGap="50%" barGap="50%" data={dataArray} margin={{ top: 20, right: 20, bottom: 60, left: 20 }}>
                      <CartesianGrid stroke="#F5F6FB" height={2} vertical={false} horizontalPoints={[40, 75, 110, 145, 180, 215, 250, 285, 320]} width="100%"/>
      <Bar barSize={38} dataKey="uv" fill="#FF751D" label={renderCustomBarLabel} >
              <LabelList dataKey="name" position="bottom" angle="-15" />
      {dataArray.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))} 
      </Bar>
    </BarChart> }
    </ResponsiveContainer>
        </TableBox>
    </BoxPadding>
  );
}

const colors = ['#FF751D', '#FFDAC0', '#FFDAC0','#FF751D', '#FFDAC0', '#FFDAC0', '#FF751D', '#FFDAC0', '#FFDAC0','#FF751D', '#FFDAC0', '#FFDAC0', '#FF751D', '#FFDAC0', '#FFDAC0', '#FF751D', '#FFDAC0', '#FFDAC0',];


/* <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          width={280}
          height={520}
          data={dataArray}
          margin={{
            top: 20,
            right: 40,
            bottom: 20,
            left: 40,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis  type="none" />
            <Bar dataKey="uv" barSize={15} fill="#413ea0" label={renderCustomizedBottomLabel}> 
               <LabelList dataKey="name" position="top"  />
              </Bar>
        </ComposedChart>
      </ResponsiveContainer> */

// "top" | "left" | "right" | "bottom" | "inside" | "outside" | "insideLeft" | "insideRight" | "insideTop" | "insideBottom" | "insideTopLeft" | "insideBottomLeft" | "insideTopRight" | "insideBottomRight" | "insideStart" | "insideEnd" | "end" | "center"






    
    