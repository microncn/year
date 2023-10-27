import clsx from "clsx";

export default function Home() {
  const date = new Date();
  const year = date.getFullYear();
  const nextYear = date.getFullYear() + 1;

  const f = new Date(year, 0, 1).getTime() / 8.64e7;
  const now = date.getTime() / 8.64e7;
  const n = new Date(nextYear, 0, 1).getTime() / 8.64e7;

  const totalday = n - f;
  const percentage = Math.round(((now - f) / totalday) * 100);

  return (
    <div className="flex justify-center items-center flex-col gap-4 h-[calc(100vh-92px)] max-w-[600px] mx-auto px-4">
      <h1 className="text-white text-3xl font-bold sm:text-4xl">
        {year} is {percentage}% complete
      </h1>
      <div className="w-full h-10 bg-green-800 p-1 rounded-lg">
        <div
          className="h-full bg-green-500 rounded-md"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
