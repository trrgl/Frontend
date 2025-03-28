import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="w-full h-screen bg-[#1d1e20] p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div onClick={() => router.push("2-1")} className="cursor-pointer relative border-4 border-black hover:border-slate-800 w-full h-full bg-slate-300 rounded-xl hover:bg-slate-500 transition flex flex-col items-center p-8">
          <h1 className="text-black font-extrabold text-2xl absolute">Angiin Ajil 1</h1>
          <Image src="/AA1.png" width={400} height={50} className="absolute bottom-12"/>
        </div>
        <div onClick={() => router.push("2-2")} className="cursor-pointer relative border-4 border-black hover:border-slate-800 w-full h-full bg-slate-300 rounded-xl hover:bg-slate-500 transition flex flex-col items-center p-8">
          <h1 className="text-black font-extrabold text-2xl absolute">Angiin Ajil 2</h1>
          <Image src="/AA2.png" width={400} height={50} className="absolute bottom-12"/>
        </div>
        <div onClick={() => router.push("2-5")} className="cursor-pointer relative border-4 border-black hover:border-slate-800 w-full h-full bg-slate-300 rounded-xl hover:bg-slate-500 transition flex flex-col items-center p-8">
          <h1 className="text-black font-extrabold text-2xl absolute">Angiin Ajil 3</h1>
          <Image src="/AA3.png" width={400} height={50} className="absolute bottom-12"/> 
        </div>
        <div onClick={() => router.push("mongolia")} className="cursor-pointer relative border-4 border-black hover:border-slate-800 w-full h-full bg-slate-300 rounded-xl hover:bg-slate-500 transition flex flex-col items-center p-8">
          <h1 className="text-black font-extrabold text-2xl absolute">Project</h1>
          <Image src="/mongolia.png" width={400} height={50} className="absolute bottom-12"/> 
        </div>
        <a href="./" className="relative border-4 border-black hover:border-slate-800 w-full h-full bg-slate-300 rounded-xl hover:bg-slate-500 transition flex flex-col items-center p-8"></a>
        <a href="./" className="relative border-4 border-black hover:border-slate-800 w-full h-full bg-slate-300 rounded-xl hover:bg-slate-500 transition flex flex-col items-center p-8"></a>
    </div>
  );
}