import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Statistics from "./Components/Statistics";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseList from "./Components/ExpenseList";
import FilterBar from "./Components/FilterBar";

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalSpent, setTotalSpent] = useState(0);
  const [highestExpense, setHighestExpense] = useState(0);
  const [filtered, setFiltered] = useState("All");
  const [sorted, setSorted] = useState("Newest");
  // filter category
  const filteredCategory =
    filtered === "All"
      ? expenses
      : expenses.filter((expense) => expense.category === filtered);
  // sorted
  const sortedExpense = [...filteredCategory];
  if (sorted === "Newest") sortedExpense.sort((a, b) => b.id - a.id);
  if (sorted === "high") sortedExpense.sort((a, b) => b.amount - a.amount);

  if (sorted === "low") sortedExpense.sort((a, b) => a.amount - b.amount);

  if (sorted === "az")
    sortedExpense.sort((a, b) => a.title.localeCompare(b.title));
  if (sorted === "za")
    sortedExpense.sort((a, b) => b.title.localeCompare(a.title));

  // category used
  const categoryUsed = new Set(expenses.map((expense) => expense.category))
    .size;
  // add expense
  function addExpense(newExpense) {
    setExpenses([...expenses, newExpense]);
  }
  // clear one expense
  function deleteExpense(id) {
    const filteredExpenses = expenses.filter((expense) => expense.id !== id);

    setExpenses(filteredExpenses);
  }
  // clear all
  function clearAll() {
    setExpenses([]);
    setHighestExpense(0);
    setTotalExpense(0);
    setTotalSpent(0);
  }

  return (
    <>
      <div className="space-y-6">
        <Header />
        <Statistics
          totalExpense={totalExpense}
          totalSpent={totalSpent}
          highestExpense={highestExpense}
          categoryUsed={categoryUsed}
        />

        <ExpenseForm
          addExpense={addExpense}
          setTotalExpense={setTotalExpense}
          setTotalSpent={setTotalSpent}
          setHighestExpense={setHighestExpense}
        />

        <FilterBar
          filtered={filtered}
          setFiltered={setFiltered}
          sorted={sorted}
          setSorted={setSorted}
          clearAll={clearAll}
        />

        <ExpenseList expenses={sortedExpense} deleteExpense={deleteExpense} />
      </div>
    </>
  );
}
