import { TbReceiptDollar } from "react-icons/tb";
import { CgDollar } from "react-icons/cg";
import { IoTrendingUp } from "react-icons/io5";
import { IoLayersOutline } from "react-icons/io5";

export default function Statistics({
  totalExpense,
  totalSpent,
  highestExpense,
  categoryUsed,
}) {
  return (
    <>
      <div className="flex space-x-4.5">
        {/* Total Expense */}
        <div className="h-30 w-54 bg-gray-100 flex flex-col justify-center space-y-1.5 border border-gray-300 rounded-xl transition-all duration-400 hover:-translate-y-1.5 hover:shadow hover:shadow-gray-400">
          <div className="h-9 w-9 rounded-full flex items-center justify-center ml-5 bg-indigo-100 text-indigo-600">
            <TbReceiptDollar className="text-[18px]" />
          </div>

          <h1 className="ml-6 font-bold text-2xl">{totalExpense}</h1>

          <p className="ml-6 text-[12px] text-gray-600 font-normal">
            TOTAL EXPENSE
          </p>
        </div>

        {/* Total Spent */}
        <div className="h-30 w-54 bg-gray-100 flex flex-col justify-center space-y-1.5 border border-gray-300 rounded-xl transition-all duration-400 hover:-translate-y-1.5 hover:shadow hover:shadow-gray-400">
          <div className="h-9 w-9 rounded-full flex items-center justify-center ml-5 bg-indigo-100 text-indigo-600">
            <CgDollar className="text-[18px]" />
          </div>

          <h1 className="ml-6 font-bold text-2xl">${totalSpent}.00</h1>

          <p className="ml-6 text-[12px] text-gray-600 font-normal">
            TOTAL SPENT
          </p>
        </div>

        {/* Highest Expense */}
        <div className="h-30 w-54 bg-gray-100 flex flex-col justify-center space-y-1.5 border border-gray-300 rounded-xl transition-all duration-400 hover:-translate-y-1.5 hover:shadow hover:shadow-gray-400">
          <div className="h-9 w-9 rounded-full flex items-center justify-center ml-5 bg-indigo-100 text-indigo-600">
            <IoTrendingUp className="text-[18px]" />
          </div>

          <h1 className="ml-6 font-bold text-2xl">
            {highestExpense === 0 ? "__" : `$${highestExpense}.00`}
          </h1>

          <p className="ml-6 text-[12px] text-gray-600 font-normal">
            HIGHEST EXPENSE
          </p>
        </div>

        {/* Categories */}
        <div className="h-30 w-54 bg-gray-100 flex flex-col justify-center space-y-1.5 border border-gray-300 rounded-xl transition-all duration-400 hover:-translate-y-1.5 hover:shadow hover:shadow-gray-400">
          <div className="h-9 w-9 rounded-full flex items-center justify-center ml-5 bg-indigo-100 text-indigo-600">
            <IoLayersOutline className="text-[18px]" />
          </div>

          <h1 className="ml-6 font-bold text-2xl">{categoryUsed}</h1>

          <p className="ml-6 text-[12px] text-gray-600 font-normal">
            CATEGORIES USED
          </p>
        </div>
      </div>
    </>
  );
}
