import create from "zustand";
import { persist } from "zustand/middleware";

interface Budget {
  income: number;
  expenses: number;
  changeIncome: (income: number) => void;
  changeExpenses: (expenses: number) => void;
}

const useBudget = create<Budget>()(
  persist(
    (set, get) => ({
      income: 0,
      expenses: 0,
      changeIncome: (income: number) => set({ income: income }),
      changeExpenses: (expenses: number) => set({ expenses: expenses }),
    }),
    {
      name: "budget-storage-zustand",
    },
  ),
);

export default useBudget;
