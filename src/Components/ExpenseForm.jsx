import { useState } from "react";
import Button from "./Button";

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
    <>
      <form
        onSubmit={handleSubmit}
        className="w-230 h-30 flex flex-col space-y-4 bg-gray-100 border border-gray-300 rounded-xl"
      >
        <h1 className="ml-6 mt-5 font-bold">Add expense</h1>

        <div className="space-x-3 mx-5">
          <input
            type="text"
            placeholder="e.g. Coffee with friends"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-74 h-10 outline-none pl-3 text-[14px] transition-all duration-300 hover:shadow-sm hover:shadow-indigo-300 hover:border-indigo-300 hover:border-2 bg-gray-100 border border-gray-300 rounded-[10px]"
          />

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-58 h-10 outline-none px-3 text-[14px] transition-all duration-300 hover:shadow-sm hover:shadow-indigo-300 hover:border-indigo-300 hover:border-2 bg-gray-100 border border-gray-300 rounded-[10px]"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-58 h-10 outline-none px-3 text-[14px] transition-all duration-300 hover:shadow-sm hover:shadow-indigo-300 hover:border-indigo-300 hover:border-2 bg-gray-100 border border-gray-300 rounded-[10px]"
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
            className="h-10 w-20 bg-indigo-500 transition-all duration-400 hover:bg-indigo-600 rounded-xl hover:scale-103 text-white font-semibold"
          >
            + Add
          </Button>
        </div>
      </form>
    </>
  );
}
