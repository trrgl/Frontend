export default function Endtend() {
    return (
        <div className="w-full h-full">
            <img src="/endtendBG.png" className="w-screen h-auto -z-10 absolute"></img>
            <div className="w-full p-12">
                <div className="w-full flex items-center justify-between bg-black bg-opacity-25 border backdrop-blur-[50px] border-[#4c4c4c] p-[8px] rounded-full">
                    <div className="flex space-x-4 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 44 44" fill="none">
                            <rect width="44" height="44" rx="22" fill="#D9D9D9"/>
                            <path d="M35.6551 35.6551C28.1135 35.6551 21.9999 29.5415 21.9999 21.9999H35.6551V35.6551Z" fill="black"/>
                            <path d="M22 22C29.5415 22 35.6552 15.8864 35.6552 8.34484H22V22Z" fill="black"/>
                            <path d="M8.34494 8.34488C15.8865 8.34488 22.0001 14.4585 22.0001 22.0001H8.34494V8.34488Z" fill="black"/>
                            <path d="M22 22C14.4585 22 8.34484 28.1136 8.34484 35.6552H22V22Z" fill="black"/>
                        </svg>
                        <h1 className="text-white font-semibold text-lg">ENDTEND</h1>
                    </div>
                    <div className="flex space-x-2">
                        <button className="px-[24px] py-[8px] border rounded-full backdrop-blur-[24px] bg-[#020202] bg-opacity-50 hover:bg-opacity-0">Sign in</button>
                        <button className="px-[24px] py-[8px] border rounded-full backdrop-blur-[24px] bg-[#020202] bg-opacity-50 hover:bg-opacity-0">Get Started</button>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center mt-12 bg-black bg-opacity-25 border backdrop-blur-sm border-[#4c4c4c] pt-12 rounded-[40px]">
                    <h1 className="text-center text-4xl">Start Your Journey to Your<br></br>Dream Destination Here.</h1>
                </div>
            </div>
        </div>
    );
}