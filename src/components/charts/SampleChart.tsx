import * as React from 'react';
import { FunctionComponent } from 'react';
import ReactECharts from 'echarts-for-react';

// Uses Package: https://www.npmjs.com/package/echarts-for-react

export interface SampleChartProps {
  amount1?: number; 
}

export const SampleChart: FunctionComponent<SampleChartProps> = (props: SampleChartProps) => {

  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return (
    <div>
      <ReactECharts option={options} />
    </div>
  );
}