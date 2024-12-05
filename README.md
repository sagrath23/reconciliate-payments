## Problem: Fleet Payment Reconciliation System

### Background

You work for a logistics company that uses a fleet of trucks. Each truck has a unique identifier and is assigned various delivery jobs daily. At the end of each day, drivers submit their expenses (fuel, tolls, etc.). However, the accounting team struggles to reconcile these expenses with the company’s payment system.

Your task is to build a payment reconciliation system using TypeScript.

### Task

Create a typed function that compares expenseRecords and paymentRecords. Return an array of mismatched records, where either:
- The total amount for a `truckId` on a specific date does not match the `paidAmount`, or
- There is no corresponding payment for an expense or vice versa.

### Example Input

```
const expenses = [
  { truckId: "TRUCK1", date: "2024-12-01", amount: 100 },
  { truckId: "TRUCK1", date: "2024-12-01", amount: 50 },
  { truckId: "TRUCK2", date: "2024-12-01", amount: 80 },
];

const payments = [
  { truckId: "TRUCK1", date: "2024-12-01", paidAmount: 140 },
  { truckId: "TRUCK2", date: "2024-12-01", paidAmount: 80 },
];
```

### Expected Output

```
[
  {
    truckId: "TRUCK1",
    date: "2024-12-01",
    expectedAmount: 150,
    actualPaidAmount: 140,
  },
]
```

### Additional Constraints

1. If a truck’s expenses are missing from the payment records, include it in the result with actualPaidAmount as 0.
1. If no mismatches are found, return an empty array.
