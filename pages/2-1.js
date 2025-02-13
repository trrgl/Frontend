import { useState } from "react";
import Image from "next/image";

export default function Home() {
    const [count, addCount] = useState(0);
    const [modal, showModal] = useState(false);

    return (
        <div className="w-full h-full min-h-screen flex flex-col items-center bg-gray-200 space-y-8 relative">
            <div className="w-full h-20 bg-blue-600 text-white font-bold text-3xl flex items-center justify-center">Nest high School</div>
            <h1 className="text-4xl font-bold text-black text-center">Welcome to Nest School</h1>
            <h1 className="w-2/3 text-black text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</h1>
            <div className="flex space-x-8 items-center">
                <button onClick={() => {addCount(count+1), showModal(!modal)}} className="bg-blue-600 text-white flex items-center justify-center px-6 py-3 font-semibold hover:bg-blue-800 rounded-xl">Click Me!</button>
                <h1 className="text-black">Clicked {count} times.</h1>
            </div>
            <div className="grid xl:grid-cols-3 gap-8 md:grid-cols-2 grid-cols-1">
                <div className="w-96 h-60 bg-white rounded-2xl drop-shadow-xl flex items-center flex-col justify-between py-6">
                    <h1 className="font-bold text-2xl text-black">Why Choose Us?</h1>
                    <h1 className="text-lg text-black">✓ High Performance</h1>
                    <h1 className="text-lg text-black">✓ Responsive Design</h1>
                    <h1 className="text-lg text-black">✓ Easy to Use</h1>
                    <h1 className="text-lg text-black">✓ Scalable Solutions</h1>
                    <h1 className="text-lg text-black">✓ 24/7 Support</h1>
                </div>
                <div className="w-96 h-60 bg-white rounded-2xl drop-shadow-xl flex items-center flex-col justify-between py-6">
                    <h1 className="font-bold text-2xl text-black">Our Features</h1>
                    <h1 className="text-lg text-black">🚀 Fast and Lightweight</h1>
                    <h1 className="text-lg text-black">📱 Mobile-First Approach</h1>
                    <h1 className="text-lg text-black">🎨 Customizable UI</h1>
                    <h1 className="text-lg text-black">🔒 Secure and Reliable</h1>
                    <h1 className="text-lg text-black">🌎 Global Reach</h1>
                </div>
                <div className="w-96 h-60 bg-white rounded-2xl drop-shadow-xl flex items-center flex-col space-y-4 py-6 px-8">
                    <h1 className="font-bold text-2xl text-black">Customer Reviews</h1>
                    <h1 className="text-sm text-center text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
                    <h1 className="text-sm text-center text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
                </div>
            </div>
            <div className="h-40"></div>
            <div className={modal == true ? "w-full h-screen z-10 absolute -top-8 flex items-center justify-center transition-all duration-300 opacity-100" : "opacity-0 transition-all duration-300"}>
                <div className={modal == true ? "w-60 h-60 rounded-3xl flex flex-col items-center justify-center bg-white opacity-200 z-20 p-4 relative" : "opacity-0"}>
                    <Image unoptimized src="/crying-emoji-dies.gif" width={100} height={100} className={modal == true ? "mb-12" : "hidden"}></Image>
                    <button onClick={() => showModal(!modal)} className="absolute bg-red-600 w-52 rounded-full h-12 text-white font-semibold hover:bg-red-800 bottom-4">Back</button>
                </div>
                <div className={modal == true ? "bg-black opacity-50 w-full h-screen absolute" : "opacity-0"}></div>
            </div>
            <div className="w-full h-20 bg-black flex items-center justify-center text-white absolute bottom-0">© 2025 Our Company, Nest Education IT School</div>
        </div>
    );
}