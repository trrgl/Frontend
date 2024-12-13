import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="w-full h-[200vh] bg-[#1d1e20]">
      <div className="w-full h-16 fixed flex justify-between items-center px-40">
        <div onClick={() => router.back()}>
          <Image className="cursor-pointer" src="/home.png" width={30} height={30}/>
        </div>
        <div className="flex w-60 justify-between">
          <a href="#about">
            <h1 className="text-white hover:underline">about</h1>
          </a>
          <a href="#skills">
            <h1 className="text-white hover:underline">skills</h1>
          </a>
          <a href="#achievements">
            <h1 className="text-white hover:underline">achievements</h1>
          </a>
        </div>
      </div>
      <div className="w-full h-screen flex items-center justify-center flex-col">
        <Image src="/blob.gif" width={500} height={500} className="absolute top-48 opacity-50"/>
        <Image src="/jolteon.gif" width={150} height={150} className="z-10"/>
        <h1 className="text-white font-bold text-4xl mt-8 z-10">Tergel Ganbold</h1>
        <h1 className="text-white text-xl mt-2 z-10">Student</h1>
        <a href="https://github.com/trrgl" className="mt-4 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="30px" height="30px" viewBox="0 0 24 24">

            <g data-name="Layer 2">

            <rect width="24" height="24" opacity="0"/>

            <path d="M16.24 22a1 1 0 0 1-1-1v-2.6a2.15 2.15 0 0 0-.54-1.66 1 1 0 0 1 .61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 0 0-.67-2.22 2.75 2.75 0 0 1-.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0-2.09 1.09 1 1 0 0 1-.84.15 10.15 10.15 0 0 0-5.52 0 1 1 0 0 1-.84-.15 7.4 7.4 0 0 0-2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1-.43 2.08 4.07 4.07 0 0 0-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1-.21 1 2.06 2.06 0 0 0-.55 1.56V21a1 1 0 0 1-2 0v-.57a6 6 0 0 1-5.27-2.09 3.9 3.9 0 0 0-1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67V21a1 1 0 0 1-.94 1z"/>

            </g>

          </svg>
        </a>
      </div>
      <section id="about">
        <div className="w-full px-96">
          <div className="w-full h-16"></div>
          <h1 className="text-4xl text-white font-bold">about</h1>
          <h1 className="text-xl mt-2">I'm currently a junior year student at Nest Education IT School. I'm also technology enthusiast, having interest in CTF competitions and Web development.</h1>
        </div>
      </section>
      <section id="skills">
        <div className="w-full px-96">
          <div className="w-full h-16"></div>
          <h1 className="text-4xl text-white font-bold">skills</h1>
          <h1 className="text-xl mt-2">- 3-4 years of HTML/CSS Experience. <br></br>- 2-3 years of C++ Experience. <br></br> - ~1 year of CTF Experience. <br></br>- Basic knowledge of JavaScript, SQL, TailwindCSS, Java and Python.</h1>
        </div>
      </section>
      <section id="achievements">
        <div className="w-full px-96">
          <div className="w-full h-16"></div>
          <h1 className="text-4xl text-white font-bold">achievements</h1>
          <h1 className="text-xl mt-2">- HaruulZangi U-18 2024 Champion. <br></br>- Gold medal in the city's informatics olympiad. <br></br>- Several other Math, Physics olympiad awards.</h1>
        </div>
      </section>
    </div>
  );
}
