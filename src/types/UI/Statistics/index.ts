export type PieAnalyticsProps = {
  labels?: string[];
  data?: number[];
  colors: string[];
  percentageCompleted?: number;
  legendItems?: {
    label: string;
    color: string;
    value: number;
  }[];
  heading?: string;
  subHeading?: string;
};

export type BarAnalyticsProps = {
  labels?: string[];
  data?: number[];
  colors: string[];
  percentageCompleted: number;
  finalMaxValue: number;
  heading: string;
  subHeading: string;
};
