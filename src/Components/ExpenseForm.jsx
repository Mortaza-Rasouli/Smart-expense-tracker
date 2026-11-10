import { useState } from "react";
import Button from "./Button";

// text-base on mobile (16px) stops iOS from zooming into the field on focus
const fieldClass =
  "h-11 w-full rounded-[10px] border border-gray-300 bg-gray-100 px-3 text-base outline-none transition-all duration-300 hover:border-2 hover:border-indigo-300 hover:shadow-sm hover:shadow-indigo-300 focus:border-indigo-400 sm:h-10 sm:text-[14px]";

export default function ExpenseForm({
  addExpense,
  setTotalExpense,
  setTotalSpent,
  setHighestExpense,
}) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() === "" || amount === "") {
      return;
    }
    if (Number(amount <= 0)) {
      return;
    }
    const newExpense = {
      id: Date.now(),
      title: title,
      amount: amount,
      category: category,
    };
    addExpense(newExpense);
    setTitle("");
    setAmount("");
    setCategory("Food");
    setTotalExpense((prev) => prev + 1);
    setTotalSpent((prev) => Number(prev) + Number(amount));
    setHighestExpense((prev) =>
      Number(amount) > prev ? Number(amount) : prev,
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-4 rounded-xl border border-gray-300 bg-gray-100 p-4 sm:p-5"
    >
      <h2 className="font-bold">Add expense</h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_11rem_11rem_auto]">
        <input
          type="text"
          aria-label="Expense title"
          placeholder="e.g. Coffee with friends"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`${fieldClass} sm:col-span-2 lg:col-span-1`}
        />

        <input
          type="number"
          aria-label="Amount"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className={fieldClass}
        />

        <select
          aria-label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={fieldClass}
        >
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>

        <Button
          type="submit"
          className="h-11 w-full rounded-xl bg-indigo-500 font-semibold text-white transition-all duration-400 hover:scale-103 hover:bg-indigo-600 sm:col-span-2 sm:h-10 lg:col-span-1 lg:w-20"
        >
          + Add
        </Button>
      </div>
    </form>
  );
}
