import Button from "./Button";

export default function ExpenseItem({ expense, deleteExpense }) {
  const categoryColor = {
    Food: "bg-orange-100 text-orange-700",
    Transport: "bg-blue-100 text-blue-700",
    Shopping: "bg-pink-100 text-pink-700",
    Bills: "bg-yellow-100 text-yellow-700",
    Entertainment: "bg-purple-100 text-purple-700",
    Other: "bg-gray-200 text-gray-700",
  };

  return (
    <div className="group flex min-h-16 w-full items-center justify-between gap-3 rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 sm:px-5">
      {/* Mobile: title on top, category chip below. sm and up: one row. */}
      <div className="flex min-w-0 flex-col-reverse items-start gap-1 sm:flex-row sm:items-center sm:gap-3">
        <p
          className={`shrink-0 rounded-full px-2 py-1 text-[13px] font-semibold ${categoryColor[expense.category]}`}
        >
          {expense.category}
        </p>
        <h3 className="min-w-0 wrap-anywhere font-semibold">{expense.title}</h3>
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:gap-4">
        <p className="text-xl font-bold text-black sm:text-2xl">
          ${expense.amount}
        </p>

        {/* Hidden until hover only on devices with a mouse; always visible on touch */}
        <Button
          onClick={() => deleteExpense(expense.id)}
          className="flex h-9 w-9 items-center justify-center text-3xl font-bold transition-all duration-300 hover:text-red-600 focus-visible:opacity-100 pointer-fine:opacity-0 pointer-fine:group-hover:opacity-100"
        >
          <span aria-hidden="true">×</span>
          <span className="sr-only">Delete expense</span>
        </Button>
      </div>
    </div>
  );
}
