import { FunctionComponent } from 'react';
import ReactECharts from 'echarts-for-react';
import { EChartsOption } from 'echarts';
import { getCompactFormattedCurrency } from '../number-formatter';

// Uses Package: https://www.npmjs.com/package/echarts-for-react

export interface RaisedSpendBarChartProps {
  raised?: number; 
  spent?: number;
}

export const RaisedSpendBarChart: FunctionComponent<RaisedSpendBarChartProps> = (props: RaisedSpendBarChartProps) => {

  const { raised, spent } = props;

  const option: EChartsOption = {
    xAxis: {
      type: 'value',
      show: false,
    },
    yAxis: {
      type: 'category',
      data: ['Spent', 'Raised'],
      axisTick: {
        show: false
      },
    },
    grid: {
      top: '5%',
      left: '15%',
      right: '80px',
      bottom: '5%',
      // containLabel: 'true',
    },
    series: [
      {
        type: 'bar',
        label: {
          show: true,
          position: 'right',
          formatter: (params) => 
          `{b|${getCompactFormattedCurrency(+params['value'], 1)}}`,
          // align: 'center',
          rich: {
            a: {
              fontSize: 14,
            },
            b: {
              fontSize: 20,
              fontWeight: 'bold',
              padding: [5, 0, 5, 0],
            },
          },
        },
        
        data: [
          {
            name: 'Spent',
            value: spent,
            itemStyle: { color: 'red', },
          },
          {
            name: 'Raised',
            value: raised,
            itemStyle: { color: '#289a58', },
          },
        ],
      },
    ]
  };

  return (
    <div>
      <ReactECharts 
        option={option}
        style={{height: '80px'}}
      />
    </div>
  );
}