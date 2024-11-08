import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/4 h-full bg-[#1c3f83] flex flex-col items-center justify-evenly">
        <div className="bg-white rounded-full w-60 h-60"></div>
        <h1 className="text-[#158cca] font-bold text-3xl">Tergel Ganbold</h1>
        <h1 className="text-white italic text-2xl font-thin">Student</h1>
        <div className="bg-white w-5/6 h-0.5 rounded-3xl"></div>
        <div className="w-3/4">
          <h1 className="text-white text-3xl font-bold">CONTACT</h1>
        </div>
        <div className="w-3/4 flex items-center justify-between">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <Image src="/phone.png" width={24} height={24} />
          </div>
          <h1 className="text-white text-3xl font-bold">+976 9559 0137</h1>
        </div>
        <div className="w-3/4 flex items-center justify-between">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <Image src="/mail.png" width={24} height={24} />
          </div>
          <h1 className="text-white text-xl font-bold">tergel2345@gmail.com</h1>
        </div>
        <div className="w-3/4 flex items-center justify-between">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <Image src="/insta.png" width={24} height={24} />
          </div>
          <h1 className="text-white text-3xl font-bold">trrgl_0212</h1>
        </div>
      </div>
      <div className="w-3/4 h-full bg-white flex flex-col justify-evenly p-8">
        <div>
          <h1 className="font-bold text-4xl text-[#1c3f83]">ABOUT ME</h1>
          <h1 className="text-2xl text-[#158cca]">I'm currently a 16 year-old student @ Nest Education IT School, trying to make my hobby coding a career in the near future.</h1>
        </div>
        <div className="w-full h-0.5 rounded-xl bg-[#1c3f83]"></div>
        <div>
          <h1 className="font-bold text-4xl text-[#1c3f83]">SCHOOLS</h1>
          <h1 className="font-bold text-3xl ml-4 text-[#1c3f83]">- Olonlog 2014-2021</h1>
          <h1 className="font-bold text-3xl ml-4 text-[#1c3f83]">- Nest Education IT School 2024-present</h1>
        </div>
        <div className="w-full h-0.5 rounded-xl bg-[#1c3f83]"></div>
        <div>
          <h1 className="font-bold text-4xl text-[#1c3f83]">ACHIEVEMENTS</h1>
          <h1 className="text-2xl text-[#158cca] ml-4">- Gold medal in the city's programming olympiad.</h1>
          <h1 className="text-2xl text-[#158cca] ml-4">- Haruul Zangi U-18 2024 champion.</h1>
          <h1 className="text-2xl text-[#158cca] ml-4">- Several Mathmatics olympiad awards.</h1>
        </div>
        <div className="w-full h-0.5 rounded-xl bg-[#1c3f83]"></div>
        <div>
          <h1 className="font-bold text-4xl text-[#1c3f83]">SKILLS</h1>
          <h1 className="text-2xl text-[#158cca] ml-4">- Immortal in Valorant</h1>
          <h1 className="text-2xl text-[#158cca] ml-4">- 3-4 years of HTML/CSS experience</h1>
          <h1 className="text-2xl text-[#158cca] ml-4">- 3-4 years of C++ experience</h1>
          <h1 className="text-2xl text-[#158cca] ml-4">- 2-3 years of JavaScript experience</h1>
          <h1 className="text-2xl text-[#158cca] ml-4">- ~1 year of CTF experience</h1>
        </div>
      </div>
    </div>
  );
}
