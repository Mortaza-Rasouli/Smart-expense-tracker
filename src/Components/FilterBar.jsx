import { RiDeleteBin5Line } from "react-icons/ri";
import Button from "./Button";

export default function FilterBar({
  filtered,
  setFiltered,
  sorted,
  setSorted,
  clearAll,
}) {
  const data = [
    "All",
    "Food",
    "Transport",
    "Shopping",
    "Bills",
    "Entertainment",
    "Other",
  ];

  return (
    <div className="flex w-full flex-col gap-4 rounded-xl border border-gray-300 bg-gray-100 p-4 lg:flex-row lg:items-center lg:justify-center lg:gap-10">
      <div className="flex flex-wrap gap-2">
        {data.map((category) => (
          <Button
            key={category}
            onClick={() => setFiltered(category)}
            className={`rounded-xl px-3 py-2 text-[13px] font-medium outline-none transition-all duration-300 lg:py-1.5 ${
              category === filtered
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="flex gap-3">
        <select
          aria-label="Sort expenses"
          value={sorted}
          onChange={(e) => setSorted(e.target.value)}
          className="h-11 min-w-0 flex-1 rounded-xl border border-gray-300 bg-gray-100 px-2 text-base font-medium outline-none transition-all duration-300 hover:border-2 hover:border-indigo-300 hover:shadow-sm hover:shadow-indigo-300 sm:text-[13px] lg:h-10 lg:w-50 lg:flex-none"
        >
          <option value="Newest">Sort: Newest</option>
          <option value="high">Amount: High → Low</option>
          <option value="low">Amount: Low → High</option>
          <option value="az">Title: A → Z</option>
          <option value="za">Title: Z → A</option>
        </select>

        <Button
          onClick={() => {
            const confirmDeleteAll = window.confirm(
              "Are you sure want to clear all expense?",
            );
            if (confirmDeleteAll) clearAll();
          }}
          className="flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-gray-300 bg-gray-100 px-4 font-medium outline-none transition-all duration-400 hover:scale-105 hover:bg-gray-200 hover:text-red-600 lg:h-10 lg:w-25"
        >
          <RiDeleteBin5Line />
          <span>Clear all</span>
        </Button>
      </div>
    </div>
  );
}
