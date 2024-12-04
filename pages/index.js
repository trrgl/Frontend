import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen bg-[#1d1e20] p-12 grid grid-cols-3 gap-8">
        <a href="./portfolio" className="relative border-4 border-black hover:border-slate-800 w-full h-full bg-slate-300 rounded-xl hover:bg-slate-500 transition flex flex-col items-center p-8">
          <h1 className="text-black font-extrabold text-2xl absolute">Portfolio</h1>
          <Image src="/portfolio.png" width={400} height={50} className="absolute bottom-12"/>
        </a>
        <a href="./weather" className="relative border-4 border-black hover:border-slate-800 w-full h-full bg-slate-300 rounded-xl hover:bg-slate-500 transition flex flex-col items-center p-8">
          <h1 className="text-black font-extrabold text-2xl absolute">Weather</h1>
          <Image src="/weather.png" width={400} height={50} className="absolute bottom-12"/>
        </a>
        <a href="./news" className="relative border-4 border-black hover:border-slate-800 w-full h-full bg-slate-300 rounded-xl hover:bg-slate-500 transition flex flex-col items-center p-8">
          <h1 className="text-black font-extrabold text-2xl absolute">News</h1>
          <Image src="/news.png" width={400} height={50} className="absolute bottom-12"/> 
        </a>
        <a href="./search" className="relative border-4 border-black hover:border-slate-800 w-full h-full bg-slate-300 rounded-xl hover:bg-slate-500 transition flex flex-col items-center p-8">
          <h1 className="text-black font-extrabold text-2xl absolute">Search</h1>
          <Image src="/search.png" width={400} height={50} className="absolute bottom-12"/> 
        </a>
        <a href="./" className="relative border-4 border-black hover:border-slate-800 w-full h-full bg-slate-300 rounded-xl hover:bg-slate-500 transition flex flex-col items-center p-8"></a>
        <a href="./" className="relative border-4 border-black hover:border-slate-800 w-full h-full bg-slate-300 rounded-xl hover:bg-slate-500 transition flex flex-col items-center p-8"></a>
    </div>
  );
}