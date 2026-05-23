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
    <>
      <div className="flex justify-between  items-center w-230 h-16 bg-gray-100 border border-gray-300 rounded-xl px-5 group">
        <div className="flex space-x-3">
          <div className="flex items-center ">
            <p
              className={`text-[13px] font-semibold px-2 py-1 rounded-full ${categoryColor[expense.category]}`}
            >
              {expense.category}
            </p>
          </div>
          <h1 className="font-semibold">{expense.title}</h1>
        </div>

        <div className="flex items-center space-x-4">
          <p className="font-bold text-2xl text-black">${expense.amount}</p>

          <button
            onClick={() => deleteExpense(expense.id)}
            className=" opacity-0 group-hover:opacity-100 transition-all duration-300 text-3xl mb-1 hover:text-red-600 font-bold flex items-center justify-center"
          >
            ×
          </button>
        </div>
      </div>
    </>
  );
}
