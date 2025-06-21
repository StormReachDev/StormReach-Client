export type CustomersTableProps = {
  id: string;
  name: string;
  email: string;
  plan: string;
  credits: number;
  accountStatus: 'Active' | 'Paused' | 'Flagged';
  assignedAgents: string[];
};

export type CustomersTableComponentProps = {
  data: CustomersTableProps[];
};
