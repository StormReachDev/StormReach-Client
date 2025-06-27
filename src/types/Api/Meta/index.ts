export type PlanKey = 'strike10' | 'surge30' | 'blackout60' | 'payAsYouGo';

export type CustomerMetricKeys =
  | 'activeCustomers'
  | 'newCustomers'
  | 'lowCreditCustomers'
  | 'pausedCustomers';

export type TransactionMetriKeys =
  | 'totalCreditsIssued'
  | 'totalAppointmentCredits'
  | 'totalDisputeCredits'
  | 'autoReloadsTriggered';

type AccountStatus = {
  label: string;
  value: 'active' | 'paused' | 'flagged';
};

type Plan = {
  name: string;
  price: number;
  currency: string;
  appointmentCredits: number;
  priceId: string;
};

type TransactionType = {
  label: string;
  value: string;
};

type TransactionStatus = TransactionType;

export type AccountStatusResponse = {
  success: boolean;
  accountStatuses: AccountStatus[];
};

export type PlanTypeResponse = {
  success: boolean;
  plans: Record<PlanKey, Plan>;
};

export type UserRoleSummaryResponse = {
  success: boolean;
  roleCounts: {
    [role: string]: number;
  };
};

export type TransactionTypeResponse = {
  success: boolean;
  transactionTypes: TransactionType[];
};

export type TransactionStatusResponse = {
  success: boolean;
  transactionStatuses: TransactionStatus[];
};

type MetricValue = {
  value: number;
  changePercent: number;
};

export type CustomerMetricsResponse = {
  success: boolean;
  metrics: Record<CustomerMetricKeys, MetricValue>;
};

export type TransactionMetricsResponse = {
  success: boolean;
  metrics: Record<TransactionMetriKeys, MetricValue>;
};
