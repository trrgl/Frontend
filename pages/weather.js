import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
  return (
    <div className="w-full h-screen bg-slate-950 grid grid-cols-12 gap-6 p-6">
        <div className="w-full h-full rounded-xl bg-slate-900 col-span-1 flex flex-col items-center p-4">
            <div onClick={() => router.back()} className="cursor-pointer w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                <Image src="/wind.png" width={35} height={35}/>
            </div>
            <div className="flex flex-col items-center mt-10">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 96 96" enable-background="new 0 0 96 96" className="fill-slate-300">
                    <g id="Base" display="none">
                    </g>
                    <g id="Dibujo">
                        <g>
                            <path d="M72.556,42.187C73.501,40.271,74,38.166,74,36c0-7.72-6.28-14-14-14c-4.601,0-8.895,2.281-11.496,6.021
                                C48.336,28.016,48.17,28,48.001,28c-7.664,0-14.219,5.012-16.312,12.184C31.113,40.079,30.508,40,30.001,40
                                c-6.066,0-11,4.935-11,11s4.934,11,11,11H37v16c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2V62h14v16c0,1.104,0.895,2,2,2
                                c1.104,0,2-0.896,2-2V62h7.001c6.065,0,11-4.935,11-11C77.001,47.392,75.247,44.194,72.556,42.187z M60,26c5.514,0,10,4.486,10,10
                                c0,1.548-0.36,3.05-1.036,4.417C68.019,40.152,67.028,40,66.001,40c-0.508,0-1.112,0.079-1.69,0.184
                                c-1.608-5.511-5.854-9.735-11.21-11.401C54.939,27.03,57.397,26,60,26z M66.001,58h-36c-3.859,0-7-3.141-7-7s3.141-7,7-7
                                c0.277,0,0.723,0.068,1.193,0.162V46c0,1.104,0.896,2,2,2s2-0.896,2-2v-3.219C36.267,36.528,41.63,32,48.001,32
                                c6.372,0,11.736,4.53,12.807,10.786V46c0,1.104,0.896,2,2,2s2-0.896,2-2v-1.837C65.279,44.069,65.727,44,66.001,44
                                c3.859,0,7,3.141,7,7S69.86,58,66.001,58z"/>
                            <path d="M60,18c1.104,0,2-0.896,2-2v-4c0-1.104-0.896-2-2-2c-1.105,0-2,0.896-2,2v4C58,17.104,58.895,18,60,18z"/>
                            <path d="M84,34h-4c-1.105,0-2,0.896-2,2s0.895,2,2,2h4c1.104,0,2-0.896,2-2S85.104,34,84,34z"/>
                            <path d="M74.143,23.857c0.512,0,1.023-0.195,1.414-0.586l2.828-2.828c0.781-0.781,0.781-2.047,0-2.828
                                c-0.781-0.781-2.047-0.781-2.828,0l-2.828,2.828c-0.781,0.781-0.781,2.047,0,2.828C73.119,23.662,73.631,23.857,74.143,23.857z"/>
                            <path d="M44.443,23.271c0.391,0.391,0.902,0.586,1.414,0.586s1.023-0.195,1.414-0.586c0.781-0.781,0.781-2.047,0-2.828
                                l-2.828-2.828c-0.781-0.781-2.047-0.781-2.828,0c-0.781,0.781-0.781,2.047,0,2.828L44.443,23.271z"/>
                            <path d="M48,64c-1.105,0-2,0.896-2,2v18c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2V66C50,64.896,49.104,64,48,64z"/>
                        </g>
                    </g>
                </svg>
                <h1 className="text-slate-300 font-bold text-sm mt-2">Weather</h1>
            </div>
            <div className="flex flex-col items-center mt-8 group cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" width="18px" viewBox="0 0 487.3 487.3" className="fill-slate-500 group-hover:fill-slate-300">
                    <g>
                        <g>
                            <path d="M487.2,69.7c0,12.9-10.5,23.4-23.4,23.4h-322c-12.9,0-23.4-10.5-23.4-23.4s10.5-23.4,23.4-23.4h322.1    C476.8,46.4,487.2,56.8,487.2,69.7z M463.9,162.3H141.8c-12.9,0-23.4,10.5-23.4,23.4s10.5,23.4,23.4,23.4h322.1    c12.9,0,23.4-10.5,23.4-23.4C487.2,172.8,476.8,162.3,463.9,162.3z M463.9,278.3H141.8c-12.9,0-23.4,10.5-23.4,23.4    s10.5,23.4,23.4,23.4h322.1c12.9,0,23.4-10.5,23.4-23.4C487.2,288.8,476.8,278.3,463.9,278.3z M463.9,394.3H141.8    c-12.9,0-23.4,10.5-23.4,23.4s10.5,23.4,23.4,23.4h322.1c12.9,0,23.4-10.5,23.4-23.4C487.2,404.8,476.8,394.3,463.9,394.3z     M38.9,30.8C17.4,30.8,0,48.2,0,69.7s17.4,39,38.9,39s38.9-17.5,38.9-39S60.4,30.8,38.9,30.8z M38.9,146.8    C17.4,146.8,0,164.2,0,185.7s17.4,38.9,38.9,38.9s38.9-17.4,38.9-38.9S60.4,146.8,38.9,146.8z M38.9,262.8    C17.4,262.8,0,280.2,0,301.7s17.4,38.9,38.9,38.9s38.9-17.4,38.9-38.9S60.4,262.8,38.9,262.8z M38.9,378.7    C17.4,378.7,0,396.1,0,417.6s17.4,38.9,38.9,38.9s38.9-17.4,38.9-38.9C77.8,396.2,60.4,378.7,38.9,378.7z"/>
                        </g>
                    </g>
                </svg>
                <h1 className="text-slate-500 font-bold text-sm mt-2 group-hover:text-slate-300">Cities</h1>
            </div>
            <div className="flex flex-col items-center mt-8 group cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" className="group-hover:fill-slate-300 fill-slate-500 stroke-slate-800" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
                <h1 className="text-slate-500 font-bold text-sm mt-2 group-hover:text-slate-300">Map</h1>
            </div>
            <div className="flex flex-col items-center mt-8 group cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" className="group-hover:stroke-slate-300 fill-slate-500 stroke-slate-500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>
                <h1 className="text-slate-500 font-bold text-sm mt-2 group-hover:text-slate-300">Settings</h1>
            </div>
        </div>
        <div className="w-full h-full col-span-7 grid grid-rows-3 gap-6">
            <div className="w-full h-full relative">
                <Image src="/sun.png" width={200} height={200} className="absolute right-12 top-6"/>
                <div className="absolute left-0 top-0 p-8">
                    <h1 className="text-slate-300 font-extrabold text-3xl">Ulaanbaatar</h1>
                    <h1 className="mt-2 text-slate-700">Chance of rain: 0%</h1>
                    <h1 className="mt-16 text-slate-300 font-extrabold text-5xl">5°</h1>
                </div>
            </div>
            <div className="w-full rounded-xl h-full bg-slate-900 py-6 px-10 relative">
                <h1 className="absolute top-4 left-6 text-slate-500 text-sm font-extrabold">TODAYS FORECAST</h1>
                <div className="w-full h-5/6 mt-8 grid grid-cols-6">
                    <div className="w-full h-full flex flex-col items-center justify-between border-r border-slate-800">
                        <h1 className="text-sm text-slate-500 font-extrabold">6:00 AM</h1>
                        <Image src="/cloudy.webp" width={80} height={80}/>
                        <h1 className="text-xl text-slate-300 font-extrabold">-7°</h1>
                    </div>
                    <div className="w-full h-full flex flex-col items-center justify-between border-r border-slate-800">
                        <h1 className="text-sm text-slate-500 font-extrabold">9:00 AM</h1>
                        <Image src="/cloudysun.webp" width={80} height={80}/>
                        <h1 className="text-xl text-slate-300 font-extrabold">-1°</h1>
                    </div>
                    <div className="w-full h-full flex flex-col items-center justify-between border-r border-slate-800">
                        <h1 className="text-sm text-slate-500 font-extrabold">12:00 PM</h1>
                        <Image src="/sun.png" width={80} height={80}/>
                        <h1 className="text-xl text-slate-300 font-extrabold">3°</h1>
                    </div>
                    <div className="w-full h-full flex flex-col items-center justify-between border-r border-slate-800">
                        <h1 className="text-sm text-slate-500 font-extrabold">3:00 PM</h1>
                        <Image src="/sun.png" width={80} height={80}/>
                        <h1 className="text-xl text-slate-300 font-extrabold">5°</h1>
                    </div>
                    <div className="w-full h-full flex flex-col items-center justify-between border-r border-slate-800">
                        <h1 className="text-sm text-slate-500 font-extrabold">6:00 PM</h1>
                        <Image src="/moon.webp" width={80} height={80}/>
                        <h1 className="text-xl text-slate-300 font-extrabold">-2°</h1>
                    </div>
                    <div className="w-full h-full flex flex-col items-center justify-between">
                        <h1 className="text-sm text-slate-500 font-extrabold">9:00 PM</h1>
                        <Image src="/moon.webp" width={80} height={80}/>
                        <h1 className="text-xl text-slate-300 font-extrabold">-6°</h1>
                    </div>
                </div>
            </div>
            <div className="w-full rounded-xl h-full bg-slate-900 p-6 relative">
                <h1 className="absolute top-4 left-6 text-slate-500 text-sm font-extrabold">AIR CONDITIONS</h1>
                <div className="w-20 h-6 rounded-xl bg-blue-600 right-6 top-4 absolute font-bold text-slate-300 text-xs hover:bg-blue-800 cursor-pointer flex items-center justify-center">See more</div>
                <div className="w-full h-5/6 mt-8 grid grid-cols-2 grid-rows-2">
                    <div className="w-full h-full flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="stroke-slate-500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thermometer"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>
                        <div className="ml-2">
                            <h1 className="font-bold text-lg text-slate-500">Real Feel</h1>
                            <h1 className="text-3xl text-slate-300 font-extrabold">4°</h1>
                        </div>
                    </div>
                    <div className="w-full h-full flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="stroke-slate-500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-wind"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>
                        <div className="ml-2">
                            <h1 className="font-bold text-lg text-slate-500">Wind</h1>
                            <h1 className="text-3xl text-slate-300 font-extrabold">0.2 km/h</h1>
                        </div>
                    </div>
                    <div className="w-full h-full flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="stroke-slate-500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-droplet"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
                        <div className="ml-2">
                            <h1 className="font-bold text-lg text-slate-500">Chance of Rain</h1>
                            <h1 className="text-3xl text-slate-300 font-extrabold">0%</h1>
                        </div>
                    </div>
                    <div className="w-full h-full flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="stroke-slate-500" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                        <div className="ml-2">
                            <h1 className="font-bold text-lg text-slate-500">UV Index</h1>
                            <h1 className="text-3xl text-slate-300 font-extrabold">2</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full h-full rounded-xl bg-slate-900 col-span-4 p-8 relative">
            <h1 className="absolute top-4 left-6 text-slate-500 text-sm font-extrabold">7-DAY FORECAST</h1>
            <div className="w-full h-[95%] mt-8 grid grid-rows-7">
                <div className="w-full h-full border-b border-slate-800 flex items-center justify-between">
                    <h1 className="text-slate-500 text-sm font-bold w-12">Today</h1>
                    <div className="flex items-center justify-between w-28">
                        <Image src="/sun.png" width={50} height={50}/>
                        <h1 className="text-slate-400 font-bold text-sm">Sunny</h1>
                    </div>
                    <h1 className="text-slate-400 text-md font-bold w-12 text-end">5<span className="text-slate-500">/-8</span></h1>
                </div>
                <div className="w-full h-full border-b border-slate-800 flex items-center justify-between">
                    <h1 className="text-slate-500 text-sm font-bold w-12">Thu</h1>
                    <div className="flex items-center justify-between w-28">
                        <Image src="/cloudysun.webp" width={60} height={60}/>
                        <h1 className="text-slate-400 font-bold text-sm ml-2">Cloudy</h1>
                    </div>
                    <h1 className="text-slate-400 text-md font-bold w-12 text-end">-1<span className="text-slate-500">/-14</span></h1>
                </div>
                <div className="w-full h-full border-b border-slate-800 flex items-center justify-between">
                    <h1 className="text-slate-500 text-sm font-bold w-12">Fri</h1>
                    <div className="flex items-center justify-between w-28">
                        <Image src="/snowflake.webp" width={50} height={50}/>
                        <h1 className="text-slate-400 font-bold text-sm">Snowy</h1>
                    </div>
                    <h1 className="text-slate-400 text-md font-bold w-12 text-end">-5<span className="text-slate-500">/-17</span></h1>
                </div>
                <div className="w-full h-full border-b border-slate-800 flex items-center justify-between">
                    <h1 className="text-slate-500 text-sm font-bold w-12">Sat</h1>
                    <div className="flex items-center justify-between w-28">
                        <Image src="/sun.png" width={50} height={50}/>
                        <h1 className="text-slate-400 font-bold text-sm">Sunny</h1>
                    </div>
                    <h1 className="text-slate-400 text-md font-bold w-12 text-end">-2<span className="text-slate-500">/-16</span></h1>
                </div>
                <div className="w-full h-full border-b border-slate-800 flex items-center justify-between">
                    <h1 className="text-slate-500 text-sm font-bold w-12">Sun</h1>
                    <div className="flex items-center justify-between w-28">
                        <Image src="/sun.png" width={50} height={50}/>
                        <h1 className="text-slate-400 font-bold text-sm">Sunny</h1>
                    </div>
                    <h1 className="text-slate-400 text-md font-bold w-12 text-end">0<span className="text-slate-500">/-13</span></h1>
                </div>
                <div className="w-full h-full border-b border-slate-800 flex items-center justify-between">
                    <h1 className="text-slate-500 text-sm font-bold w-12">Mon</h1>
                    <div className="flex items-center justify-between w-28">
                        <Image src="/sun.png" width={50} height={50}/>
                        <h1 className="text-slate-400 font-bold text-sm">Sunny</h1>
                    </div>
                    <h1 className="text-slate-400 text-md font-bold w-12 text-end">0<span className="text-slate-500">/-13</span></h1>
                </div>
                <div className="w-full h-full flex items-center justify-between">
                    <h1 className="text-slate-500 text-sm font-bold w-12">Tue</h1>
                    <div className="flex items-center justify-between w-28">
                        <Image src="/sun.png" width={50} height={50}/>
                        <h1 className="text-slate-400 font-bold text-sm">Sunny</h1>
                    </div>
                    <h1 className="text-slate-400 text-md font-bold w-12 text-end">2<span className="text-slate-500">/-9</span></h1>
                </div>
            </div>
        </div>
    </div>
  );
}