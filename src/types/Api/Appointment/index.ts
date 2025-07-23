export type Appointment = {
  _id: string;
  homeOwnerName: string;
  homePhoneNumber: string;
  homeOwnerAddress: string;
  timeZone: string;
  appointmentDate: string;
  appointmentTime: string;
  activeLeaks: 'yes' | 'no';
  roofAge: string;
  insuranceProvider: string;
  appointmentStatus:
    | 'Scheduled'
    | 'Completed'
    | 'Disputed'
    | 'Pending'
    | 'Denied';
  isDisputed: boolean;
  customerUser: {
    name: string;
  };
  bookedByInfo: {
    name: string;
  };
  disputeSubmissionDate?: string;
  disputeReason?: string;
};

export type AppointmentsResponse = {
  success: boolean;
  totalCount: number;
  appointments: Appointment[];
};

export type DisputesResponse = {
  success: boolean;
  totalCount: number;
  disputes: Appointment[];
};

export type CreateAppointmentRequest = Omit<
  Appointment,
  '_id' | 'customerUser' | 'bookedByInfo' | 'isDisputed' | 'appointmentStatus'
> & {
  customer: string;
};

export type AppointmentResponse = {
  success: boolean;
  appointment: Appointment & {
    customer: string;
  };
};

export type DisputeReasonsResponse = {
  success: boolean;
  disputeReasons: string[];
};
