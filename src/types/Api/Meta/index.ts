type AccountStatus = {
  label: string;
  value: 'active' | 'paused' | 'flagged';
};

export type AccountStatusResponse = {
  success: boolean;
  accountStatuses: AccountStatus[];
};

type PlanKey = 'strike10' | 'surge30' | 'blackout60' | 'payAsYouGo';

type Plan = {
  name: string;
  price: number;
  currency: string;
  appointmentCredits: number;
  priceId: string;
};

export type PlansResponse = {
  success: boolean;
  plans: Record<PlanKey, Plan>;
};

export type UserRoleSummaryResponse = {
  success: boolean;
  roleCounts: {
    [role: string]: number;
  };
};
