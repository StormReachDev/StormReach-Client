// Imports:
import { PieAnalyticsProps } from '@/types/UI/Statistics';
import { Card, Typography } from '@material-tailwind/react';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';

// Chart.js registration:
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function PieAnalyticsCard({
  labels = [],
  data = [],
  percentageCompleted,
  legendItems = [],
  heading,
  subHeading,
  colors = ['#34C759', '#007AFF', '#FF3B30'],
}: PieAnalyticsProps) {
  const chartRef = useRef<ChartJS<'doughnut'>>(null);

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: colors.map((color) => color),
        borderWidth: 0,
        cutout: '0%',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: 2,
    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        displayColors: false,
        backgroundColor: '#333',
        border: false,
        bodyFont: {
          size: 12,
          weight: 500,
        },
        callbacks: {
          title: () => '',
          label: (context: { label: String }) => {
            return context?.label;
          },
        },
      },
      datalabels: {
        color: '#FFF',
        font: {
          weight: 600,
          size: 12,
          align: 'center',
        },
        formatter: (value: number) => `${value}`,
      },
    },
  };

  return (
    <Card className="bg-input border border-stroke rounded-xl py-4 px-5 max-w-full w-[343px] overflow-hidden space-y-2">
      <Typography
        variant="lead"
        className="text-base font-semibold text-neutral-800"
      >
        {heading}
      </Typography>

      <div className="overflow-hidden">
        <Typography
          className="text-[32px] font-medium text-action-two"
          variant="lead"
        >
          {percentageCompleted}%
        </Typography>
        <Typography
          className="text-neutral-800 text-base font-medium"
          variant="small"
        >
          {subHeading}
        </Typography>
      </div>

      <div className="flex flex-col items-center gap-6 overflow-hidden">
        <div className="flex-1 w-full">
          <Doughnut
            ref={chartRef}
            data={chartData}
            options={chartOptions as object}
            width={130}
          />
        </div>

        <div className="flex gap-8">
          {legendItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div
                className="size-[15px] rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <Typography
                variant="small"
                className="text-base font-medium text-neutral-800"
              >
                {item.label}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
