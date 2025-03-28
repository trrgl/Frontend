import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="w-full h-screen bg-[#1d1e20] p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div onClick={() => router.push("term1")} className="cursor-pointer relative border-4 border-black hover:border-slate-800 w-full h-full bg-slate-300 rounded-xl hover:bg-slate-500 transition flex justify-center items-center p-8">
          <h1 className="text-black font-extrabold text-2xl absolute">Term1</h1>
        </div>
        <div onClick={() => router.push("term2")} className="cursor-pointer relative border-4 border-black hover:border-slate-800 w-full h-full bg-slate-300 rounded-xl hover:bg-slate-500 transition flex justify-center items-center p-8">
          <h1 className="text-black font-extrabold text-2xl absolute">Term2</h1>
        </div>
        <div onClick={() => router.push("term3")} className="cursor-pointer relative border-4 border-black hover:border-slate-800 w-full h-full bg-slate-300 rounded-xl hover:bg-slate-500 transition flex justify-center items-center p-8">
          <h1 className="text-black font-extrabold text-2xl absolute">Term3</h1>
        </div>
    </div>
  );
}