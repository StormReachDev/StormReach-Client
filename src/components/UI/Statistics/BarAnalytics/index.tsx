// Imports:
import { BarAnalyticsProps } from '@/types/UI/Statistics';
import { Card, Typography } from '@material-tailwind/react';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Chart.js registration:
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarAnalyticsCard({
  labels = [],
  data = [],
  colors = ['#FF3B30', '#007AFF', '#34C759'],
  percentageCompleted,
  finalMaxValue,
  heading,
  subHeading,
}: BarAnalyticsProps) {
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: colors.map((color) => color),
        borderRadius: 4,
        barThickness: 40,
      },
    ],
  };

  const chartOptions = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: 2,
    plugins: {
      legend: {
        display: false,
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
    },
    scales: {
      x: {
        beginAtZero: true,
        max: finalMaxValue,
        ticks: {
          stepSize: 20,
          color: '#F2F2F2',
          font: {
            size: 14,
            weight: 500,
          },
        },
        grid: {
          color: '#333',
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          color: '#333',
          drawBorder: false,
        },
      },
    },
    layout: {
      padding: {
        right: 0,
      },
    },
  };

  return (
    <Card className="bg-input border border-stroke rounded-xl py-4 px-5 max-w-full flex-1 overflow-hidden space-y-2">
      <div className="flex items-center">
        <Typography
          variant="lead"
          className="text-base font-semibold text-neutral-800"
        >
          {heading}
        </Typography>

        {/* <CompositeDropdown
          options={monthlyAppointmentData}
          selected={selectedPeriod}
          onChange={setSelectedPeriod}
          className="ml-auto"
        /> */}
      </div>

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

      <div className="flex-1">
        <Bar data={chartData} options={chartOptions as object} />
      </div>
    </Card>
  );
}
