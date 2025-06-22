// Imports:
import CompositeDropdown from '@/components/UI/CompositeDropDown';
import stormyContent from '@/constants/Content';
import { monthlyDisputeData } from '@/constants/static';
import { Card, Typography } from '@material-tailwind/react';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useRef, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

// Chart.js registration:
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function DisputesAnalyticsCard() {
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');
  const chartRef = useRef<ChartJS<'doughnut'>>(null);
  const currentData = monthlyDisputeData[selectedPeriod];
  const percentageCompleted = Math.round(
    (currentData.approved /
      (currentData.approved + currentData.handled + currentData.pending)) *
      100
  );

  const chartData = {
    labels: ['Handled Disputes', 'Approved Disputes', 'Pending Disputes'],
    datasets: [
      {
        data: [currentData.handled, currentData.approved, currentData.pending],
        backgroundColor: ['#34C759', '#007AFF', '#FF3B30'],
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
        enabled: false,
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

  const legendItems = [
    { label: 'Handled', color: '#34C759', value: currentData.handled },
    {
      label: 'Approved',
      color: '#007AFF',
      value: currentData.approved,
    },
    { label: 'Pending', color: '#FF3B30', value: currentData.pending },
  ];

  return (
    <Card className="bg-input border border-stroke rounded-xl py-4 px-5 max-w-full w-[343px] overflow-hidden space-y-2">
      <div className="flex items-center">
        <Typography
          variant="lead"
          className="text-base font-semibold text-neutral-800"
        >
          {
            stormyContent.admin.dashboard.disputesAndAppointments.disputeMetrics
              .heading
          }
        </Typography>

        <CompositeDropdown
          options={monthlyDisputeData}
          selected={selectedPeriod}
          onChange={setSelectedPeriod}
          className="ml-auto"
        />
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
          {
            stormyContent.admin.dashboard.disputesAndAppointments.disputeMetrics
              .subHeading
          }
        </Typography>
      </div>

      <div className="flex flex-col items-center gap-3 overflow-hidden">
        <div className="flex-1 max-w-[130px] w-full">
          <Doughnut
            ref={chartRef}
            data={chartData}
            options={chartOptions}
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
                className="w-[15px] h-[15px] rounded-full"
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
