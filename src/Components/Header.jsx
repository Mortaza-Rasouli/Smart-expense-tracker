import { LuWallet } from "react-icons/lu";

export default function Header() {
  const data = {
    title: "Smart Expense Tracker",
    desc: "Track where every dollar goes.",
  };

  return (
    <div className="mb-4 mt-6 flex items-center gap-3 sm:mb-8 sm:mt-10">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-indigo-500">
        <LuWallet className="text-[20px] text-white" />
      </div>

      <div>
        <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
          {data.title}
        </h1>

        <p className="text-[14px] tracking-tight text-gray-700">{data.desc}</p>
      </div>
    </div>
  );
}
