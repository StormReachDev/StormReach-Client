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
  appointmentStatus: 'Scheduled' | 'Completed' | 'Disputed';
  isDisputed: boolean;
  customerUser: {
    name: string;
  };
  bookedByInfo: {
    name: string;
  };
};

export type AppointmentsResponse = {
  success: boolean;
  totalCount: number;
  appointments: Appointment[];
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
