import { TableBox, BoxPadding, Text } from './ReportGraphic.styled';
import { useEffect, useState } from 'react';
import shortid from 'shortid';
import React from 'react';
import {
  BarChart,
  Bar,
  LabelList,
  ResponsiveContainer,
  Cell,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts';
import { useMediaRules } from 'MediaRules/MediaRules';

const renderCustomizedBottomLabel = ({ x, y, width, value }) => {
  return (
    <Text x={x * 1.05 + width} y={y} fill="#666" textAnchor="middle" dy={-6}>
      {value !== 0 ? `${value} UAH` : ''}
    </Text>
  );
};

const renderCustomBarLabel = ({ x, y, width, value }) => {
  return (
    <Text
      x={x + width / 2}
      y={y}
      fill="#666"
      textAnchor="middle"
      dy={-6}
    >{`${value} UAH`}</Text>
  );
};

export default function ReportGraphic({ state }) {
  const [dataArray, setDataArray] = useState([]);
  const [reverseArray, setReverseArray] = useState([]);

  useEffect(() => {
    const sortedArray = state.sort(function (a, b) {
      if (a.uv < b.uv) {
        return 1;
      }
      if (a.uv > b.uv) {
        return -1;
      }
      return 0;
    });
    if (sortedArray.length <= 1) {
      setDataArray([...sortedArray]);
      setReverseArray([...sortedArray, { name: '', uv: 0 }]);
    } else {
      setDataArray([...sortedArray]);
      setReverseArray([...sortedArray]);
    }
  }, [state]);
  
  const { isMobile, isTablet } = useMediaRules();

  return (
    <BoxPadding>
      <TableBox>
        <ResponsiveContainer
          width="100%"
          height={isMobile ? (reverseArray.length <= 2 ? 100 : 380) : 380}
        >
          {isMobile ? (
            <ComposedChart
              key={shortid.generate()}
              layout="vertical"
              width={280}
              height={380}
              data={reverseArray}
              margin={{
                top: 40,
                right: 100,
                bottom: 20,
                left: 100,
              }}
            >
              <XAxis type="number" hide="true" />
              <YAxis type="none" hide="true" />
              <Bar
                dataKey="uv"
                barSize={15}
                fill="transparent"
                label={renderCustomizedBottomLabel}
                radius={[0, 10, 10, 0]}
              >
                <LabelList dataKey="name" position="left" />
                {dataArray.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </ComposedChart>
          ) : (
              <BarChart
                key={shortid.generate()}
              width={604}
              height={380}
              barCategoryGap="50%"
              barGap="50%"
              data={dataArray}
              margin={{ top: 20, right: 20, bottom: 60, left: 20 }}
            >
              <CartesianGrid
                stroke="#F5F6FB"
                height={2}
                vertical={false}
                horizontalPoints={[40, 75, 110, 145, 180, 215, 250, 285, 320]}
                width="100%"
              />
              <Bar
                radius={[10, 10, 0, 0]}
                barSize={38}
                dataKey="uv"
                fill="#FF751D"
                label={renderCustomBarLabel}
              >
                <LabelList
                  dataKey="name"
                  position="bottom"
                  angle={isTablet ? '-15' : '0'}
                />
                {dataArray.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          )}
        </ResponsiveContainer>
      </TableBox>
    </BoxPadding>
  );
}

const colors = [
  '#FF751D',
  '#FFDAC0',
  '#FFDAC0',
  '#FF751D',
  '#FFDAC0',
  '#FFDAC0',
  '#FF751D',
  '#FFDAC0',
  '#FFDAC0',
  '#FF751D',
  '#FFDAC0',
  '#FFDAC0',
  '#FF751D',
  '#FFDAC0',
  '#FFDAC0',
  '#FF751D',
  '#FFDAC0',
  '#FFDAC0',
];
