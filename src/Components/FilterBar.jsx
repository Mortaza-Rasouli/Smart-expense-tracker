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
    <>
      <div className="w-230 h-20 bg-gray-100 border flex justify-center items-center space-x-15 border-gray-300 rounded-xl">
        <div className="flex space-x-2">
          {data.map((category) => (
            <Button
              key={category}
              onClick={() => setFiltered(category)}
              className={`${
                category === filtered
                  ? "px-3 py-1.5 rounded-xl text-white font-medium text-[13px] transition-all duration-300 bg-indigo-500 flex justify-center items-center outline-none"
                  : "text-gray-800 font-medium text-[13px] px-3 py-1.5 rounded-xl bg-gray-200 outline-none"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="flex space-x-3">
          <select
            value={sorted}
            onChange={(e) => setSorted(e.target.value)}
            className="h-10 w-50 font-medium text-[13px] px-1 rounded-xl bg-gray-100 outline-none border border-gray-300 transition-all duration-300 hover:shadow-sm hover:shadow-indigo-300 hover:border-2 hover:border-indigo-300"
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
            className="flex justify-center h-10 w-25 bg-gray-100 border border-gray-300 outline-none rounded-xl font-medium hover:bg-gray-200 hover:scale-105 transition-all duration-400 hover:text-red-600 items-center space-x-2"
          >
            <RiDeleteBin5Line />
            <p>Clear all</p>
          </Button>
        </div>
      </div>
    </>
  );
}
