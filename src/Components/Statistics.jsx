import { TbReceiptDollar } from "react-icons/tb";
import { CgDollar } from "react-icons/cg";
import { IoTrendingUp, IoLayersOutline } from "react-icons/io5";

function StatCard({ icon, value, label }) {
  return (
    <div className="flex min-h-30 flex-col justify-center gap-1.5 rounded-xl border border-gray-300 bg-gray-100 px-4 py-4 transition-all duration-400 hover:-translate-y-1.5 hover:shadow hover:shadow-gray-400 sm:px-6">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
        {icon}
      </div>

      <h2 className="break-all text-xl font-bold sm:text-2xl">{value}</h2>

      <p className="text-[11px] font-normal text-gray-600 sm:text-[12px]">
        {label}
      </p>
    </div>
  );
}

export default function Statistics({
  totalExpense,
  totalSpent,
  highestExpense,
  categoryUsed,
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
      <StatCard
        icon={<TbReceiptDollar className="text-[18px]" />}
        value={totalExpense}
        label="TOTAL EXPENSE"
      />
      <StatCard
        icon={<CgDollar className="text-[18px]" />}
        value={`$${totalSpent}.00`}
        label="TOTAL SPENT"
      />
      <StatCard
        icon={<IoTrendingUp className="text-[18px]" />}
        value={highestExpense === 0 ? "__" : `$${highestExpense}.00`}
        label="HIGHEST EXPENSE"
      />
      <StatCard
        icon={<IoLayersOutline className="text-[18px]" />}
        value={categoryUsed}
        label="CATEGORIES USED"
      />
    </div>
  );
}
