import * as React from 'react';
import { FunctionComponent } from 'react';
import ReactECharts from 'echarts-for-react';
import { BarSeriesOption, EChartsOption } from 'echarts';
import { getCompactFormattedCurrency } from '../number-formatter';
import { OutsideSpendingCommittee } from '../../models/OutsideSpendingCommittee';

// Uses Package: https://www.npmjs.com/package/echarts-for-react

export interface OutsideSpendingBarChartProps {
  opposedCommittees?: OutsideSpendingCommittee[]; 
  supportCommittees?: OutsideSpendingCommittee[];
}

let mergeOption: EChartsOption = {};

// https://maketintsandshades.com/
const opposeColor = '#6964AD';
const opposeShades = [
  '6964ad', '5f5a9c', '54508a', '4a4679', '3f3c68', '353257', '2a2845', '1f1e34', '151423', '0a0a11', '000000'
];

const supportColor = '#3392FF';
const supportShades = [
  '3392ff', '2e83e6', '2975cc', '2466b3', '1f5899', '1a4980', '143a66', '0f2c4c', '0a1d33', '050f19', '000000'
]

export const OutsideSpendingBarChart: FunctionComponent<OutsideSpendingBarChartProps> = (props: OutsideSpendingBarChartProps) => {

  const { opposedCommittees, supportCommittees } = props;

  setChartMergeOption(opposedCommittees, supportCommittees);

  const option: EChartsOption = {
    tooltip: {
      show: true,
      trigger: 'item',
      formatter: (params: any) =>  
        `${params.seriesName}: $${Math.abs(params.value).toLocaleString()}`,
      extraCssText: "width: 150px; white-space: pre-wrap;",
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        formatter: (sum: number) => 
          getCompactFormattedCurrency(Math.abs(sum)),
      },
      show: false,
    },
    yAxis: {
      type: 'category',
      data: [''],
      axisTick: {
        show: false,
      },
    },
    grid: {
      top: '30%',
      bottom: '10%',
    },
    ...mergeOption,
  };

  return (
    <div>
      <ReactECharts 
        option={option}
        style={{height: '60px'}}
      />
    </div>
  );
}

function getSeriesOptions(committees: any, defaultColor: string, direction: 'left' | 'right', colorShades: string[]): BarSeriesOption[]  {

  const directionMultiplier = (direction === 'left') ? -1 : 1; 

  const seriesTemplate = {
    type: 'bar',
    stack: 'outside-money',
    emphasis: {
      focus: 'series',
    },
    blur: {
      itemStyle: { opacity: .5, },
    },
  } as const;
  const committeesCopy = [...committees];
  const sortedCommittees = committeesCopy.sort((a, b) => b.sum - a.sum);

  return sortedCommittees.map((data, index) => ({
    ...seriesTemplate,
    id: data.id,
    name: data.name,
    itemStyle: { color: colorShades[index] ? `#${colorShades[index]}` : defaultColor, },
    data: [ directionMultiplier * data.sum],
  }));
}

function getChartBalancer(sum1: number, sum2: number): BarSeriesOption {
  const defaultBarAmount = 1000;
  const maxBarAmount = Math.max(sum1, sum2);
  const barAmount = maxBarAmount > 0 ? maxBarAmount : defaultBarAmount;

  return {
    type: 'bar',
    stack: 'hidden',
    name: 'chart-balancer',
    barGap: '-100%',
    z: -10,
    itemStyle: { opacity: 0, color: 'grey'},
    silent: true,
    data: [-barAmount, barAmount],
  };
}

function setChartMergeOption(opposedCommittees: any, supportCommittees: any): void {

  const opposedSeries: BarSeriesOption[] =
    getSeriesOptions(opposedCommittees, opposeColor, 'left', opposeShades);
  const supportSeries: BarSeriesOption[] = 
    getSeriesOptions(supportCommittees, supportColor, 'right', supportShades);

  const seriesSumReducer = (accumulator: any, currentValue: any) => accumulator + currentValue.sum;
  const opposedSum = opposedCommittees.reduce(seriesSumReducer, 0);
  const supportSum = supportCommittees.reduce(seriesSumReducer, 0);

  if (opposedSeries.length > 0) {
    opposedSeries[opposedSeries.length-1]['label'] = {
      show: true,
      fontWeight: 'bold',
      position: 'left',
      formatter: getCompactFormattedCurrency(opposedSum),
    };
  }

  if (supportSeries.length > 0) {
    supportSeries[supportSeries.length-1]['label'] = {
      show: true,
      fontWeight: 'bold',
      position: 'right',
      formatter: getCompactFormattedCurrency(supportSum),
    };
  }

  const balancerSeries = getChartBalancer(opposedSum, supportSum);

  mergeOption = {
    series: [...opposedSeries, ...supportSeries, balancerSeries],
  };
}
