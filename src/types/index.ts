export interface Base {
  truckId: string;
  date: string;
}

// Expense structure:  { truckId: "TRUCK1", date: "2024-12-01", amount: 100 }
export interface Expense extends Base {
  amount: number;
}

// Payment structure: { truckId: "TRUCK1", date: "2024-12-01", paidAmount: 140 }
export interface Payment extends Base {
  paidAmount: number;
}

export interface MismatchedPayment extends Base {
  expectedAmount: number;
  actualPaidAmount: number;
}
