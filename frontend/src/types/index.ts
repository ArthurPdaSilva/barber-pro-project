export type ScheduleClient = {
  id: string;
  name: string;
  type: string;
  price: number;
};

export type HaircutType = {
  id: number;
  name: string;
  price: number;
};

export type User = {
  id: number;
  barberName: string;
  address: string;
};

export type OperationResult = {
  success: boolean;
  message: string;
};
