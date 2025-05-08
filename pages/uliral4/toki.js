import { useRouter } from "next/router";

export default function Toki() {
    const router = useRouter();
    return (
        <div className="w-full h-screen flex">
            <div className="w-1/5 h-screen bg-[#0c1f40] flex flex-col">
                <div className="w-full flex items-center justify-center space-x-2 my-2">
                    <img className="w-16" src="../nest.png"></img>
                    <h1 className="text-white sm:block hidden text-xl font-semibold">Nest</h1>
                </div>
                <div className="w-full h-40 flex relative">
                    <div className="w-full h-40 flex flex-col items-center justify-center z-10 space-y-2 py-4">
                        <div className="w-12 h-12 bg-white rounded-full"></div>
                        <h1 className="font-bold text-sm sm:text-md md:text-lg text-center">Tergel Ganbold</h1>
                        <h1 className="sm:text-md text-xs text-center">Class: 11A</h1>
                    </div>
                    <div className="w-full h-40 absolute bg-center bg-cover opacity-40 bg-[url('/sidebar_bg.jpg')]"></div>
                </div>
                <div onClick={() => (router.push("../uliral4/toki"))} className="w-full p-4 flex justify-center sm:justify-start items-center hover:bg-[#193669] space-x-2 cursor-pointer">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <h1 className="sm:block hidden text-md">Toki</h1>
                </div>
                <div onClick={() => (router.push("../uliral4/shop"))} className="w-full p-4 flex justify-center sm:justify-start items-center hover:bg-[#193669] space-x-2 cursor-pointer">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <h1 className="sm:block hidden text-md">Shop</h1>
                </div>
            </div>
            <div className="w-4/5 h-full bg-white overflow-auto">
                <div className="w-4/5 h-20 bg-white fixed z-10 flex items-center justify-between px-24">
                    <img onClick={() => router.push("toki#home")} src="../toki_logo.png" className="h-14 cursor-pointer"></img>
                    <div className="hidden lg:block">
                        <div className="flex space-x-8">
                            <h1 onClick={() => router.push("toki#service")} className="text-black hover:text-[#ffc907] cursor-pointer">Үйлчилгээ</h1>
                            <h1 onClick={() => router.push("toki#pay")} className="text-black hover:text-[#ffc907] cursor-pointer">Давуу тал</h1>
                            <h1 onClick={() => router.push("toki#shop")} className="text-black hover:text-[#ffc907] cursor-pointer">Мэдээ</h1>
                            <h1 onClick={() => router.push("toki#footer")} className="text-black hover:text-[#ffc907] cursor-pointer">Хамтран ажиллах</h1>
                        </div>
                    </div>
                    <svg className="block lg:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                </div>
                <div id="home" className="h-20"></div>
                <div className="w-full relative flex flex-col items-center bg-[#fff2d7]">
                    <h1 className="absolute top-4 md:top-12 xl:top-20 text-black text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center font-thin">ХЭРЭГЦЭЭТ ҮЙЛЧИЛГЭЭГ НЭГ ДОРООС...</h1>
                    <img src="../toki_bg.png" className="w-4/5 mb-36"></img>
                    <div className="flex space-x-4 absolute bottom-12">
                        <img src="../appstore.png" className="h-12"></img>
                        <img src="../playstore.png" className="h-12"></img>
                    </div>
                </div>
                <section id="service">
                    <div className="w-full px-24 pb-24 lg:pb-0 items-center bg-[#fafafa] flex-col lg:flex-row flex justify-center">
                        <img src="../toki_section1.png" className="h-5/6"></img>
                        <div className="w-[525px] lg:w-2/5 space-y-4 right-0">
                            <h1 className="text-[#ffc907] font-bold text-4xl">Toki Service</h1>
                            <p className="text-black">Та такси дуудах, кофе, хоол захиалах, нэгж дата авах, хэрэглээний төлбөрүүдээ төлөх, тоглоом тоглох, цэнэглэх гэх мэт өдөр бүрд хэрэгтэй үйлчилгээнүүдээ нэг дороос хялбар, хурдан авах боломжтой.</p>
                        </div>
                    </div>
                </section>
                <section id="pay">
                    <div className="w-full px-24 pb-24 lg:pb-0 items-center bg-[#fff3d7] flex-col-reverse lg:flex-row flex justify-center">
                        <div className="w-[525px] lg:w-2/5 space-y-4 right-0">
                            <h1 className="text-[#ffc907] text-end font-bold text-4xl">Toki Pay</h1>
                            <p className="text-black text-end">Toki Pay нь таны бодит хэтэвчийг цахимжуулсан цоо шинэ дижитал хэтэвч юм. Бүх банкны картаа холбож төлбөрөө төлөөд, лояалти карт болон бичиг баримтуудаа нэг дор хадгалаарай</p>
                        </div>
                        <img src="../toki_section2.png" className="h-5/6"></img>
                    </div>
                </section>
                <section id="shop">
                    <div className="w-full px-24 pb-24 lg:pb-0 items-center bg-[#fafafa] flex-col lg:flex-row flex justify-center">
                        <img src="../toki_section3.png" className="h-5/6"></img>
                        <div className="w-[525px] lg:w-2/5 space-y-4 right-0">
                            <h1 className="text-[#ffc907] font-bold text-4xl">Toki Shop</h1>
                            <p className="text-black">Та өөрийн хүссэн бараагаа албан ёсны дэлгүүрүүдээс сонголт хийж, нэг дороос шууд захиалах боломжтой.</p>
                        </div>
                    </div>
                </section>
                <section id="footer">
                    <div className="w-full h-full">
                        <div className="w-full h-[50vh] px-12 sm:px-24 md:px-36 lg:px-48 xl:px-64 bg-white flex flex-col items-center space-y-4">
                            <h1 className="text-[#ffc907] font-bold text-2xl md:text-3xl xl:text-4xl text-center mt-24">Toki апп өдөр бүр танд тусална</h1>
                            <p className="text-black text-center">Toki апп бол хүн бүрийн өдөр тутамд хэрэгтэй бүх үйлчилгээг нэг дор багтаасан таны цаг хугацааг хэмнэх хялбар, хэрэгтэй аппликейшн юм.</p>
                        </div>
                        <div className="w-full h-[17vh] flex justify-center bg-[#fff3d7]">
                            <button className="px-16 text-white bg-[#ffc907] rounded-full font-semibold h-12 mt-4">Давуу Тал</button>
                        </div>
                        <div className="w-full h-[33vh] bg-black grid grid-cols-3">
                            <div className="w-full h-full flex justify-center pt-12">
                                <img src="../toki_logo.png" className="h-12"></img>
                            </div>
                            <div className="w-full h-full pt-12">
                                <p className="opacity-75 text-xs mb-4 hover:text-[#ffc907] cursor-pointer">Түгээмэл асуулт</p>
                                <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" opacity={0.75} width="12" height="12" viewBox="0 0 24 24" fill="" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                    <p className="opacity-75 text-xs">Сүхбаатар дүүрэг, 8-р хороо, Сэнтрал Тауэр, 8-р давхар</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" opacity={0.75} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                        <p className="opacity-75 text-xs">77074477, 4477</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" opacity={0.75} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                        <p className="opacity-75 text-xs">info@toki.mn</p>
                                    </div>
                                </div>
                                <p className="opacity-75 text-xs mt-4">Copyright © 2022 | Toki.mn</p>
                            </div>
                            <div className="w-full h-full p-12">
                                <p className="opacity-75 text-xs hover:text-[#ffc907] cursor-pointer">Нууцлал</p>
                                <div className="space-x-2 mt-4 w-full flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="hover:fill-blue-700 cursor-pointer" width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="hover:stroke-pink-600 cursor-pointer" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}