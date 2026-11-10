import { GrInbox } from "react-icons/gr";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses, deleteExpense }) {
  if (expenses.length === 0) {
    return (
      <div className="mb-16 flex min-h-50 w-full flex-col items-center justify-center rounded-xl bg-gray-100 px-4 py-8 text-center">
        <GrInbox className="mb-2 text-2xl text-gray-700" />

        <p className="font-bold">No expenses yet</p>

        <p className="text-[14px] text-gray-700">
          Add your first expense to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="mb-16 space-y-3">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          deleteExpense={deleteExpense}
        />
      ))}
    </div>
  );
}
