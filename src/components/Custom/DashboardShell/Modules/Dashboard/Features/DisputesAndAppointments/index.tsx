// Imports:
import BarAnalyticsCard from '@/components/UI/Statistics/BarAnalytics';
import PieAnalyticsCard from '@/components/UI/Statistics/PieAnalytics';
import Wrapper from '@/components/UI/Wrapper';
import stormyContent from '@/constants/Content';
import { AppointmentStatusKeys } from '@/constants/Keys';
import { useAllAppointments } from '@/hooks/appointment';
import { useAllDisputes } from '@/hooks/dispute';
import { Typography } from '@material-tailwind/react';

export default function DisputesAndAppointments() {
  const { data: pieData } = useAllDisputes();
  const currentPieData = pieData?.disputes ?? [];

  // Pie Analytics for Disputes:
  const pieCounts = {
    denied: 0,
    disputed: 0,
    pending: 0,
  };

  currentPieData.forEach((dispute) => {
    const statusKey = String(
      dispute.appointmentStatus
    ) as keyof typeof AppointmentStatusKeys;
    if (statusKey in AppointmentStatusKeys) {
      pieCounts[statusKey as keyof typeof pieCounts] += 1;
    }
  });

  const totalDisputes =
    pieCounts.disputed + pieCounts.pending + pieCounts.denied;
  const percentageCompleted = totalDisputes
    ? Math.round((pieCounts.disputed / totalDisputes) * 100)
    : 0;

  // Bar Analytics for Appointments:
  const { data: barData } = useAllAppointments();
  const currentBarData = barData?.appointments ?? [];
  const barCounts = {
    disputed: 0,
    scheduled: 0,
    completed: 0,
  };

  currentBarData.forEach((appointment) => {
    const statusKey = String(
      appointment.appointmentStatus
    ) as keyof typeof AppointmentStatusKeys;

    if (statusKey in AppointmentStatusKeys) {
      barCounts[statusKey as keyof typeof barCounts] += 1;
    }
  });

  const maxDataValue = Math.max(
    barCounts.disputed,
    barCounts.scheduled,
    barCounts.completed
  );

  const maxScaleValue = Math.ceil(maxDataValue / 20) * 20;
  const finalMaxValue = Math.max(20, maxScaleValue);

  const totalAppointments =
    barCounts.disputed + barCounts.scheduled + barCounts.completed;
  const barPercentageCompleted = totalAppointments
    ? Math.round((barCounts.completed / totalAppointments) * 100)
    : 0;

  return (
    <Wrapper className="max-w-full w-full space-y-7">
      <Typography
        variant="lead"
        className="text-neutral-800 font-semibold text-[28px]"
      >
        {stormyContent.admin.dashboard.statistics.heading}
      </Typography>

      <div className="overflow-hidden flex gap-5">
        <PieAnalyticsCard
          key={stormyContent.admin.dashboard.statistics.disputeAnalytics.key}
          heading={
            stormyContent.admin.dashboard.statistics.disputeAnalytics.heading
          }
          subHeading={
            stormyContent.admin.dashboard.statistics.disputeAnalytics.subHeading
          }
          percentageCompleted={percentageCompleted}
          labels={
            stormyContent.admin.dashboard.statistics.disputeAnalytics.labels
          }
          data={[pieCounts.disputed, pieCounts.pending, pieCounts.denied]}
          colors={
            stormyContent.admin.dashboard.statistics.disputeAnalytics.colors
          }
          legendItems={[
            {
              label:
                stormyContent.admin.dashboard.statistics.disputeAnalytics
                  .labels[0],
              color:
                stormyContent.admin.dashboard.statistics.disputeAnalytics
                  .colors[0],
              value: pieCounts.disputed,
            },
            {
              label:
                stormyContent.admin.dashboard.statistics.disputeAnalytics
                  .labels[1],
              color:
                stormyContent.admin.dashboard.statistics.disputeAnalytics
                  .colors[1],
              value: pieCounts.pending,
            },
            {
              label:
                stormyContent.admin.dashboard.statistics.disputeAnalytics
                  .labels[2],
              color:
                stormyContent.admin.dashboard.statistics.disputeAnalytics
                  .colors[2],
              value: pieCounts.denied,
            },
          ]}
        />
        <BarAnalyticsCard
          key={
            stormyContent.admin.dashboard.statistics.appointmentAnalytics.key
          }
          heading={
            stormyContent.admin.dashboard.statistics.appointmentAnalytics
              .heading
          }
          subHeading={
            stormyContent.admin.dashboard.statistics.appointmentAnalytics
              .subHeading
          }
          finalMaxValue={finalMaxValue}
          percentageCompleted={barPercentageCompleted}
          labels={
            stormyContent.admin.dashboard.statistics.appointmentAnalytics.labels
          }
          data={[barCounts.disputed, barCounts.scheduled, barCounts.completed]}
          colors={
            stormyContent.admin.dashboard.statistics.appointmentAnalytics.colors
          }
        />
      </div>
    </Wrapper>
  );
}
