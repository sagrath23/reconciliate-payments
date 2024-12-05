import { type Expense, type Payment, type MismatchedPayment } from "./types/index.ts";

export const reconciliatePayments = (
  expenses: Array<Expense>,
  payments: Array<Payment>
): Array<MismatchedPayment> => {
  const workbook = {};
  const mismatchedPayments: Array<MismatchedPayment> = []; 

  expenses.forEach(({ truckId, date, amount }) => workbook[`${truckId}-${date}`] ? workbook[`${truckId}-${date}`] += amount : workbook[`${truckId}-${date}`] = amount);

  payments.forEach(({ truckId, date, paidAmount }) => {
    if(workbook[`${truckId}-${date}`]) {
      if(!(workbook[`${truckId}-${date}`] === paidAmount)) {
        mismatchedPayments.push({
          truckId,
          date,
          expectedAmount: workbook[`${truckId}-${date}`],
          actualPaidAmount: paidAmount
        });
      }
    }
  });

  return mismatchedPayments;
};

const expenses = [
  { truckId: "TRUCK1", date: "2024-12-01", amount: 100 },
  { truckId: "TRUCK1", date: "2024-12-01", amount: 50 },
  { truckId: "TRUCK2", date: "2024-12-01", amount: 80 },
];

const payments = [
  { truckId: "TRUCK1", date: "2024-12-01", paidAmount: 140 },
  { truckId: "TRUCK2", date: "2024-12-01", paidAmount: 80 },
];

console.log(reconciliatePayments(expenses, payments));
