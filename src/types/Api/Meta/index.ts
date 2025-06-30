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

export type UserRoleKeys = 'admin' | 'manager' | 'salesAgent' | 'telemarketer';

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

type GenericList = {
  label: string;
  value: string;
};

type TransactionStatus = GenericList;

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
  transactionTypes: GenericList[];
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

export type UserRoleResponse = {
  success: boolean;
  userRoles: GenericList[];
};
