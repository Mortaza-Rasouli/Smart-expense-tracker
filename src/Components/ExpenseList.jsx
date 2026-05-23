import { GrInbox } from "react-icons/gr";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses, deleteExpense, }) {
  if (expenses.length === 0) {
    return (
      <>
        <div className="w-230 h-50 bg-gray-100 rounded-xl flex flex-col justify-center items-center mb-16">
          <div className="flex flex-col justify-center items-center">
            <GrInbox className="text-2xl mb-2 text-gray-700"/>

            <p className="font-bold">No expenses yet</p>

            <p className="text-[14px] text-gray-700">
              Add your first expense to get started.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="space-y-3 mb-16">
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
