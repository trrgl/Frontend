import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="w-full h-screen bg-[#1d1e20] p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div onClick={() => router.push("portfolio")} className="cursor-pointer relative border-4 border-black hover:border-slate-800 w-full h-full bg-slate-300 rounded-xl hover:bg-slate-500 transition flex flex-col items-center p-8">
          <h1 className="text-black font-extrabold text-2xl absolute">Portfolio</h1>
          <Image src="/portfolio.png" width={400} height={50} className="absolute bottom-12"/>
        </div>
        <div onClick={() => router.push("weather")} className="cursor-pointer relative border-4 border-black hover:border-slate-800 w-full h-full bg-slate-300 rounded-xl hover:bg-slate-500 transition flex flex-col items-center p-8">
          <h1 className="text-black font-extrabold text-2xl absolute">Weather</h1>
          <Image src="/weather.png" width={400} height={50} className="absolute bottom-12"/>
        </div>
        <div onClick={() => router.push("news")} className="cursor-pointer relative border-4 border-black hover:border-slate-800 w-full h-full bg-slate-300 rounded-xl hover:bg-slate-500 transition flex flex-col items-center p-8">
          <h1 className="text-black font-extrabold text-2xl absolute">News</h1>
          <Image src="/news.png" width={400} height={50} className="absolute bottom-12"/> 
        </div>
        <div onClick={() => router.push("search")} className="cursor-pointer relative border-4 border-black hover:border-slate-800 w-full h-full bg-slate-300 rounded-xl hover:bg-slate-500 transition flex flex-col items-center p-8">
          <h1 className="text-black font-extrabold text-2xl absolute">Search</h1>
          <Image src="/search.png" width={400} height={50} className="absolute bottom-12"/> 
        </div>
        <a href="./" className="relative border-4 border-black hover:border-slate-800 w-full h-full bg-slate-300 rounded-xl hover:bg-slate-500 transition flex flex-col items-center p-8"></a>
        <a href="./" className="relative border-4 border-black hover:border-slate-800 w-full h-full bg-slate-300 rounded-xl hover:bg-slate-500 transition flex flex-col items-center p-8"></a>
    </div>
  );
}