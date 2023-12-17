import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 36, label: '1.0' },
  { id: 1, value: 17, label: '2.0' },
  { id: 2, value: 19, label: '2.5' },
  { id: 3, value: 21, label: '4.0' },
  { id: 4, value: 5, label: '5.0' },
];

export default function PieActiveArc() {
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
    />
  );
}
