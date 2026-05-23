import { LuWallet } from "react-icons/lu";

export default function Header() {
  const data = {
    title: "Smart Expense Tracker",
    desc: "Track where every dollar goes.",
  };

  return (
    <>
      <div>
        <div className="flex items-center space-x-3 mb-8 mt-10">
          <div className="h-10 w-10 flex justify-center items-center rounded-[14px] bg-indigo-500">
            <LuWallet className="text-white text-[20px]" />
          </div>

          <div>
            <h1 className="font-bold text-2xl tracking-tight">{data.title}</h1>

            <p className="text-[14px] text-gray-700 tracking-tight">
              {data.desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
