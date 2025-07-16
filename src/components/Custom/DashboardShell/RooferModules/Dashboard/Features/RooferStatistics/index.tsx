// Imports:
import BarAnalyticsCard from '@/components/UI/Statistics/BarAnalytics';
import PieAnalyticsCard from '@/components/UI/Statistics/PieAnalytics';
import Wrapper from '@/components/UI/Wrapper';
import stormyContent from '@/constants/Content';
import { AppointmentCreditKeys } from '@/constants/Keys';
import { useMe } from '@/hooks/auth';
import { useCustomerAppointmentMetrics } from '@/hooks/meta';
import { CustomerAppointmentMetricKeys } from '@/types/Api/Meta';
import { Typography } from '@material-tailwind/react';

export default function RooferStatistics() {
  const { data } = useMe();
  const { data: appointmentMetrics } = useCustomerAppointmentMetrics(
    data?.customer?._id ?? ''
  );

  // Pie Analytics for Appointment Credits:
  const currentCredits = data?.customer?.appointmentCredits ?? 0;
  const usedCredits =
    AppointmentCreditKeys[
      data?.customer?.plan as keyof typeof AppointmentCreditKeys
    ] - currentCredits;
  const piePercentageCompleted = data?.customer?.plan
    ? Math.round(
        (usedCredits /
          AppointmentCreditKeys[
            data?.customer?.plan as keyof typeof AppointmentCreditKeys
          ]) *
          100
      )
    : 0;

  // Bar Analytics for Appointments:
  const currentData =
    appointmentMetrics?.metrics ||
    ({} as Record<CustomerAppointmentMetricKeys, { value: number }>);

  const maxDataValue = Math.max(
    currentData?.totalAppointmentsDisputed?.value,
    currentData?.totalAppointmentsScheduled?.value,
    currentData?.totalAppointmentsCompleted?.value
  );

  const maxScaleValue = Math.ceil(maxDataValue / 20) * 20;
  const finalMaxValue = Math.max(20, maxScaleValue);

  const totalAppointments =
    currentData?.totalAppointmentsDisputed?.value +
    currentData?.totalAppointmentsScheduled?.value +
    currentData?.totalAppointmentsCompleted?.value;

  const barPercentageCompleted = totalAppointments
    ? Math.round(
        (currentData?.totalAppointmentsCompleted?.value / totalAppointments) *
          100
      )
    : 0;

  return (
    <Wrapper className="max-w-full w-full space-y-7">
      <Typography
        variant="lead"
        className="text-neutral-800 font-semibold text-[28px]"
      >
        {stormyContent.cutomer.dashboard.statistics.heading}
      </Typography>

      <div className="overflow-hidden flex gap-5">
        <PieAnalyticsCard
          key={stormyContent.cutomer.dashboard.statistics.creditAnalytics.key}
          heading={
            stormyContent.cutomer.dashboard.statistics.creditAnalytics.heading
          }
          subHeading={
            stormyContent.cutomer.dashboard.statistics.creditAnalytics
              .subHeading
          }
          percentageCompleted={piePercentageCompleted}
          labels={
            stormyContent.cutomer.dashboard.statistics.creditAnalytics.labels
          }
          data={[usedCredits, currentCredits]}
          colors={
            stormyContent.cutomer.dashboard.statistics.creditAnalytics.colors
          }
          legendItems={[
            {
              label:
                stormyContent.cutomer.dashboard.statistics.creditAnalytics
                  .labels[0],
              color:
                stormyContent.cutomer.dashboard.statistics.creditAnalytics
                  .colors[0],
              value: usedCredits,
            },
            {
              label:
                stormyContent.cutomer.dashboard.statistics.creditAnalytics
                  .labels[1],
              color:
                stormyContent.cutomer.dashboard.statistics.creditAnalytics
                  .colors[1],
              value: currentCredits,
            },
          ]}
        />

        <BarAnalyticsCard
          key={
            stormyContent.cutomer.dashboard.statistics.appointmentAnalytics.key
          }
          finalMaxValue={finalMaxValue}
          percentageCompleted={barPercentageCompleted}
          heading={
            stormyContent.cutomer.dashboard.statistics.appointmentAnalytics
              .heading
          }
          subHeading={
            stormyContent.cutomer.dashboard.statistics.appointmentAnalytics
              .subHeading
          }
          labels={
            stormyContent.cutomer.dashboard.statistics.appointmentAnalytics
              .labels
          }
          data={[
            currentData?.totalAppointmentsDisputed?.value,
            currentData?.totalAppointmentsScheduled?.value,
            currentData?.totalAppointmentsCompleted?.value,
          ]}
          colors={
            stormyContent.cutomer.dashboard.statistics.appointmentAnalytics
              .colors
          }
        />
      </div>
    </Wrapper>
  );
}
