export default function Endtend() {
    return (
        <div className="w-full h-full">
            <div className="w-screen h-[827px] absolute -z-10 bg-gradient-to-b from-[#121212] via-transparent to-[#121212]"></div>
            <video autoPlay muted loop playsInline preload="auto" src="/endtendBG.mp4" className="w-screen h-auto -z-20 absolute"></video>
            <div className="fixed left-12 right-12 top-12 z-10 flex items-center justify-between bg-[#121212] bg-opacity-25 border backdrop-blur-[50px] border-[#4c4c4c] p-[8px] rounded-full">
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
                    <button className="px-[24px] py-[8px] border rounded-full backdrop-blur-[34px] bg-[#020202] bg-opacity-50 hover:bg-opacity-0">Sign in</button>
                </div>
            </div>
            <div className="w-full h-[120vh] absolute bg-[#121212] -z-30"></div>
            <div className="w-full p-12">
                <div className="w-full flex flex-col items-center mt-24 bg-black bg-opacity-25 border backdrop-blur-sm border-[#4c4c4c]/60 pt-12 rounded-[40px]">
                    <h1 className="text-center text-4xl font-medium">Start Your Journey to Your<br></br>Dream Destination Here.</h1>
                    <h1 className="text-center text-sm font-thin mt-6">Start your journey to the destination you’ve always dreamed of. Discover stunning locations, plan<br></br>with ease, and create memories that last a lifetime. Whether it’s a relaxing escape or an exciting<br></br>adventure, your perfect getaway begin right here.</h1>
                    <div className="flex bg-[#060606] bg-opacity-60 rounded-full p-[5px] backdrop-blur-[34px] mt-12 overflow-hidden">
                        <div className="bg-[#7A7A7A] bg-opacity-70 rounded-full py-2 px-4 flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg"  width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M14 13.5H0V12.0556H0.7V1.22222C0.7 1.03068 0.77375 0.846977 0.905025 0.711534C1.0363 0.576091 1.21435 0.5 1.4 0.5H11.2C11.3857 0.5 11.5637 0.576091 11.695 0.711534C11.8263 0.846977 11.9 1.03068 11.9 1.22222V4.83333H13.3V12.0556H14V13.5ZM10.5 12.0556H11.9V6.27778H7.7V12.0556H9.1V7.72222H10.5V12.0556ZM10.5 4.83333V1.94444H2.1V12.0556H6.3V4.83333H10.5ZM3.5 6.27778H4.9V7.72222H3.5V6.27778ZM3.5 9.16667H4.9V10.6111H3.5V9.16667ZM3.5 3.38889H4.9V4.83333H3.5V3.38889Z" fill="white"/>
                            </svg>
                            <div className="text-white text-sm">Hotels</div>
                        </div>
                        <div className="rounded-full py-2 px-4 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 14" fill="none">
                                <g filter="url(#filter0_d_159_287)">
                                    <path d="M20.4667 5.69565H19.7467L17.8947 1.61957C17.8109 1.43515 17.6742 1.27846 17.5012 1.1685C17.3282 1.05853 17.1263 1 16.92 1H9.08C8.87369 1 8.67181 1.05853 8.49882 1.1685C8.32583 1.27846 8.18915 1.43515 8.10533 1.61957L6.25333 5.69565H5.53333C5.39188 5.69565 5.25623 5.75062 5.15621 5.84847C5.05619 5.94631 5 6.07902 5 6.21739C5 6.35576 5.05619 6.48847 5.15621 6.58632C5.25623 6.68416 5.39188 6.73913 5.53333 6.73913H6.06667V11.9565C6.06667 12.2333 6.17905 12.4987 6.37909 12.6944C6.57912 12.8901 6.85044 13 7.13333 13H8.73333C9.01623 13 9.28754 12.8901 9.48758 12.6944C9.68762 12.4987 9.8 12.2333 9.8 11.9565V10.913H16.2V11.9565C16.2 12.2333 16.3124 12.4987 16.5124 12.6944C16.7125 12.8901 16.9838 13 17.2667 13H18.8667C19.1496 13 19.4209 12.8901 19.6209 12.6944C19.821 12.4987 19.9333 12.2333 19.9333 11.9565V6.73913H20.4667C20.6081 6.73913 20.7438 6.68416 20.8438 6.58632C20.9438 6.48847 21 6.35576 21 6.21739C21 6.07902 20.9438 5.94631 20.8438 5.84847C20.7438 5.75062 20.6081 5.69565 20.4667 5.69565ZM9.08 2.04348H16.92L18.5793 5.69565H7.42067L9.08 2.04348ZM8.73333 11.9565H7.13333V10.913H8.73333V11.9565ZM17.2667 11.9565V10.913H18.8667V11.9565H17.2667ZM18.8667 9.86957H7.13333V6.73913H18.8667V9.86957ZM8.2 8.30435C8.2 8.16597 8.25619 8.03327 8.35621 7.93542C8.45623 7.83758 8.59188 7.78261 8.73333 7.78261H9.8C9.94145 7.78261 10.0771 7.83758 10.1771 7.93542C10.2771 8.03327 10.3333 8.16597 10.3333 8.30435C10.3333 8.44272 10.2771 8.57543 10.1771 8.67327C10.0771 8.77112 9.94145 8.82609 9.8 8.82609H8.73333C8.59188 8.82609 8.45623 8.77112 8.35621 8.67327C8.25619 8.57543 8.2 8.44272 8.2 8.30435ZM15.6667 8.30435C15.6667 8.16597 15.7229 8.03327 15.8229 7.93542C15.9229 7.83758 16.0586 7.78261 16.2 7.78261H17.2667C17.4081 7.78261 17.5438 7.83758 17.6438 7.93542C17.7438 8.03327 17.8 8.16597 17.8 8.30435C17.8 8.44272 17.7438 8.57543 17.6438 8.67327C17.5438 8.77112 17.4081 8.82609 17.2667 8.82609H16.2C16.0586 8.82609 15.9229 8.77112 15.8229 8.67327C15.7229 8.57543 15.6667 8.44272 15.6667 8.30435Z" fill="white"/>
                                    <path d="M16.9199 0.900391L17.0879 0.912109C17.2536 0.935733 17.413 0.993927 17.5547 1.08398L17.6895 1.18359C17.8155 1.29197 17.9164 1.42658 17.9854 1.57812L19.8115 5.5957H20.4668C20.634 5.59574 20.7952 5.66103 20.9141 5.77734L20.9932 5.87207C21.0621 5.97341 21.0996 6.09371 21.0996 6.21777C21.0995 6.34191 21.0623 6.46213 20.9932 6.56348L20.9141 6.6582C20.7952 6.7745 20.634 6.83883 20.4668 6.83887H20.0332V11.9561C20.0332 12.26 19.9095 12.5514 19.6904 12.7656C19.4715 12.9798 19.1749 13.0996 18.8662 13.0996H17.2666C16.9966 13.0996 16.7359 13.0081 16.5283 12.8418L16.4424 12.7656C16.2235 12.5514 16.0996 12.26 16.0996 11.9561V11.0127H9.90039V11.9561C9.90039 12.222 9.8051 12.4782 9.63477 12.6816L9.55762 12.7656C9.33868 12.9798 9.04209 13.0996 8.7334 13.0996H7.13379C6.82512 13.0996 6.52851 12.9798 6.30957 12.7656C6.09054 12.5514 5.9668 12.26 5.9668 11.9561V6.83887H5.5332C5.40777 6.83884 5.28585 6.80271 5.18262 6.73535L5.08594 6.6582C4.96702 6.54187 4.90049 6.38325 4.90039 6.21777C4.90039 6.05233 4.96715 5.89373 5.08594 5.77734L5.18262 5.69922C5.28583 5.6319 5.40781 5.59573 5.5332 5.5957H6.18848L8.01465 1.57812L8.09375 1.43262C8.18354 1.29336 8.30342 1.17418 8.44531 1.08398L8.59277 1.00488C8.7451 0.936236 8.91124 0.900393 9.08008 0.900391H16.9199ZM17.3662 11.8564H18.7666V11.0127H17.3662V11.8564ZM7.2334 11.8564H8.63379V11.0127H7.2334V11.8564ZM7.2334 9.76953H18.7666V6.83887H7.2334V9.76953ZM9.7998 7.68262C9.96707 7.68262 10.1281 7.74791 10.2471 7.86426L10.3262 7.95898C10.3952 8.06037 10.4336 8.18055 10.4336 8.30469C10.4335 8.42889 10.3954 8.549 10.3262 8.65039L10.2471 8.74512C10.1282 8.86136 9.96699 8.92578 9.7998 8.92578H8.7334C8.56618 8.92578 8.40506 8.8614 8.28613 8.74512C8.16721 8.62878 8.0997 8.47018 8.09961 8.30469C8.09961 8.13918 8.16727 7.98066 8.28613 7.86426C8.40507 7.74791 8.56613 7.68262 8.7334 7.68262H9.7998ZM17.2666 7.68262C17.4339 7.68262 17.5949 7.74791 17.7139 7.86426C17.8327 7.98066 17.9004 8.13918 17.9004 8.30469C17.9003 8.47018 17.8328 8.62878 17.7139 8.74512C17.5949 8.8614 17.4338 8.92578 17.2666 8.92578H16.2002C16.033 8.92578 15.8718 8.86136 15.7529 8.74512C15.634 8.62878 15.5665 8.47018 15.5664 8.30469C15.5664 8.13915 15.634 7.98066 15.7529 7.86426C15.8719 7.74791 16.0329 7.68262 16.2002 7.68262H17.2666ZM7.57617 5.5957H18.4238L16.8555 2.14355H9.14453L7.57617 5.5957Z" stroke="white" stroke-width="0.2"/>
                                </g>
                                <defs>
                                    <filter id="filter0_d_159_287" x="0.799988" y="0.799988" width="24.4" height="20.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="2"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_159_287"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_159_287" result="shape"/>
                                    </filter>
                                </defs>
                            </svg>
                            <div className="text-white text-sm">Car Rental</div>
                        </div>
                        <div className="rounded-full py-2 px-4 flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                <path d="M13.6364 11.4091V5.27273H4.09091V11.4091H13.6364ZM13.6364 1.86364C13.998 1.86364 14.3449 2.0073 14.6006 2.26304C14.8563 2.51877 15 2.86561 15 3.22727V11.4091C15 11.7708 14.8563 12.1176 14.6006 12.3733C14.3449 12.6291 13.998 12.7727 13.6364 12.7727H4.09091C3.72925 12.7727 3.3824 12.6291 3.12667 12.3733C2.87094 12.1176 2.72727 11.7708 2.72727 11.4091V3.22727C2.72727 2.86561 2.87094 2.51877 3.12667 2.26304C3.3824 2.0073 3.72925 1.86364 4.09091 1.86364H4.77273V0.5H6.13636V1.86364H11.5909V0.5H12.9545V1.86364H13.6364ZM1.36364 14.1364H10.9091V15.5H1.36364C1.00198 15.5 0.655131 15.3563 0.3994 15.1006C0.143668 14.8449 0 14.498 0 14.1364V5.95455H1.36364V14.1364ZM12.2727 10.0455H9.54545V7.31818H12.2727V10.0455Z" fill="white"/>
                            </svg>
                            <div className="text-white text-sm">Events</div>
                        </div>
                    </div>
                    <div className="w-3/4 flex items-center space-x-2 mt-12">
                        <h1 className="text-white text-sm font-medium">Best hotels in</h1>
                        <div className="bg-[#060606] bg-opacity-60 rounded-full py-1 px-2 flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg"  width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M14 13.5H0V12.0556H0.7V1.22222C0.7 1.03068 0.77375 0.846977 0.905025 0.711534C1.0363 0.576091 1.21435 0.5 1.4 0.5H11.2C11.3857 0.5 11.5637 0.576091 11.695 0.711534C11.8263 0.846977 11.9 1.03068 11.9 1.22222V4.83333H13.3V12.0556H14V13.5ZM10.5 12.0556H11.9V6.27778H7.7V12.0556H9.1V7.72222H10.5V12.0556ZM10.5 4.83333V1.94444H2.1V12.0556H6.3V4.83333H10.5ZM3.5 6.27778H4.9V7.72222H3.5V6.27778ZM3.5 9.16667H4.9V10.6111H3.5V9.16667ZM3.5 3.38889H4.9V4.83333H3.5V3.38889Z" fill="white"/>
                            </svg>
                            <div className="text-white text-xs">Kyoto, Japan</div>
                        </div>
                    </div>
                    <div className="w-full h-full flex mt-4 mb-6 space-x-4 overflow-x-auto whitespace-nowrap">
                        <div className="relative w-64 h-80 rounded-3xl border-4 border-[#282828]/80 overflow-hidden flex-none ml-24">
                            <img src="/cardBG.png" className="absolute top-0 h-auto w-64 -z-20"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent -z-10"/>
                            <div className="bg-[#282828] rounded-full absolute right-4 top-4 flex items-center justify-center w-6 h-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            </div>
                            <div className="px-4 mt-28">
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#FFC300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                    <h1 className="text-xs">4.7/5</h1>
                                </div>
                                <h1 className="text-white font-medium text-xl">The Lake Kawaguchiko</h1>
                                <h1 className="text-white font-medium text-[9px]">THE LAKE Kawaguchiko Living is a rental house that is a luxurious Japanese house where you can stay while enjoying the view of Lake Kawaguchi.</h1>
                                <div className="flex space-x-1 mt-1">
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Free Wi-Fi</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Kitchen</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">2 Beds</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">House</div>
                                </div> 
                                <div className="flex space-x-1 mt-1">
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Spa</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Central</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Luxury</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Chill</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Tax</div>
                                </div>
                                <div className="flex w-full justify-between mt-8 items-center">
                                    <h1 className="text-lg font-medium">$180<span className="text-sm text-[#9c9c9c]">/night</span></h1>
                                    <div className="flex space-x-2">
                                        <div className="px-4 py-[2px] border-2 border-white text-xs font-medium rounded-full">Add</div>
                                        <div className="bg-[#282828] rounded-full flex items-center justify-center w-6 h-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-64 h-80 rounded-3xl border-4 border-[#282828]/80 overflow-hidden flex-none">
                            <img src="/cardBG.png" className="absolute top-0 h-auto w-64 -z-20"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent -z-10"/>
                            <div className="bg-[#282828] rounded-full absolute right-4 top-4 flex items-center justify-center w-6 h-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            </div>
                            <div className="px-4 mt-28">
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#FFC300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                    <h1 className="text-xs">4.7/5</h1>
                                </div>
                                <h1 className="text-white font-medium text-xl">The Lake Kawaguchiko</h1>
                                <h1 className="text-white font-medium text-[9px]">THE LAKE Kawaguchiko Living is a rental house that is a luxurious Japanese house where you can stay while enjoying the view of Lake Kawaguchi.</h1>
                                <div className="flex space-x-1 mt-1">
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Free Wi-Fi</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Kitchen</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">2 Beds</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">House</div>
                                </div> 
                                <div className="flex space-x-1 mt-1">
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Spa</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Central</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Luxury</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Chill</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Tax</div>
                                </div>
                                <div className="flex w-full justify-between mt-8 items-center">
                                    <h1 className="text-lg font-medium">$180<span className="text-sm text-[#9c9c9c]">/night</span></h1>
                                    <div className="flex space-x-2">
                                        <div className="px-4 py-[2px] border-2 border-white text-xs font-medium rounded-full">Add</div>
                                        <div className="bg-[#282828] rounded-full flex items-center justify-center w-6 h-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-64 h-80 rounded-3xl border-4 border-[#282828]/80 overflow-hidden flex-none">
                            <img src="/cardBG.png" className="absolute top-0 h-auto w-64 -z-20"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent -z-10"/>
                            <div className="bg-[#282828] rounded-full absolute right-4 top-4 flex items-center justify-center w-6 h-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            </div>
                            <div className="px-4 mt-28">
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#FFC300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                    <h1 className="text-xs">4.7/5</h1>
                                </div>
                                <h1 className="text-white font-medium text-xl">The Lake Kawaguchiko</h1>
                                <h1 className="text-white font-medium text-[9px]">THE LAKE Kawaguchiko Living is a rental house that is a luxurious Japanese house where you can stay while enjoying the view of Lake Kawaguchi.</h1>
                                <div className="flex space-x-1 mt-1">
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Free Wi-Fi</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Kitchen</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">2 Beds</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">House</div>
                                </div> 
                                <div className="flex space-x-1 mt-1">
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Spa</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Central</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Luxury</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Chill</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Tax</div>
                                </div>
                                <div className="flex w-full justify-between mt-8 items-center">
                                    <h1 className="text-lg font-medium">$180<span className="text-sm text-[#9c9c9c]">/night</span></h1>
                                    <div className="flex space-x-2">
                                        <div className="px-4 py-[2px] border-2 border-white text-xs font-medium rounded-full">Add</div>
                                        <div className="bg-[#282828] rounded-full flex items-center justify-center w-6 h-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-64 h-80 rounded-3xl border-4 border-[#282828]/80 overflow-hidden flex-none">
                            <img src="/cardBG.png" className="absolute top-0 h-auto w-64 -z-20"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent -z-10"/>
                            <div className="bg-[#282828] rounded-full absolute right-4 top-4 flex items-center justify-center w-6 h-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            </div>
                            <div className="px-4 mt-28">
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#FFC300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                    <h1 className="text-xs">4.7/5</h1>
                                </div>
                                <h1 className="text-white font-medium text-xl">The Lake Kawaguchiko</h1>
                                <h1 className="text-white font-medium text-[9px]">THE LAKE Kawaguchiko Living is a rental house that is a luxurious Japanese house where you can stay while enjoying the view of Lake Kawaguchi.</h1>
                                <div className="flex space-x-1 mt-1">
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Free Wi-Fi</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Kitchen</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">2 Beds</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">House</div>
                                </div> 
                                <div className="flex space-x-1 mt-1">
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Spa</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Central</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Luxury</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Chill</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Tax</div>
                                </div>
                                <div className="flex w-full justify-between mt-8 items-center">
                                    <h1 className="text-lg font-medium">$180<span className="text-sm text-[#9c9c9c]">/night</span></h1>
                                    <div className="flex space-x-2">
                                        <div className="px-4 py-[2px] border-2 border-white text-xs font-medium rounded-full">Add</div>
                                        <div className="bg-[#282828] rounded-full flex items-center justify-center w-6 h-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-64 h-80 rounded-3xl border-4 border-[#282828]/80 overflow-hidden flex-none">
                            <img src="/cardBG.png" className="absolute top-0 h-auto w-64 -z-20"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent -z-10"/>
                            <div className="bg-[#282828] rounded-full absolute right-4 top-4 flex items-center justify-center w-6 h-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            </div>
                            <div className="px-4 mt-28">
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#FFC300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                    <h1 className="text-xs">4.7/5</h1>
                                </div>
                                <h1 className="text-white font-medium text-xl">The Lake Kawaguchiko</h1>
                                <h1 className="text-white font-medium text-[9px]">THE LAKE Kawaguchiko Living is a rental house that is a luxurious Japanese house where you can stay while enjoying the view of Lake Kawaguchi.</h1>
                                <div className="flex space-x-1 mt-1">
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Free Wi-Fi</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Kitchen</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">2 Beds</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">House</div>
                                </div> 
                                <div className="flex space-x-1 mt-1">
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Spa</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Central</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Luxury</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Chill</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Tax</div>
                                </div>
                                <div className="flex w-full justify-between mt-8 items-center">
                                    <h1 className="text-lg font-medium">$180<span className="text-sm text-[#9c9c9c]">/night</span></h1>
                                    <div className="flex space-x-2">
                                        <div className="px-4 py-[2px] border-2 border-white text-xs font-medium rounded-full">Add</div>
                                        <div className="bg-[#282828] rounded-full flex items-center justify-center w-6 h-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-64 h-80 rounded-3xl border-4 border-[#282828]/80 overflow-hidden flex-none">
                            <img src="/cardBG.png" className="absolute top-0 h-auto w-64 -z-20"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent -z-10"/>
                            <div className="bg-[#282828] rounded-full absolute right-4 top-4 flex items-center justify-center w-6 h-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            </div>
                            <div className="px-4 mt-28">
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#FFC300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                    <h1 className="text-xs">4.7/5</h1>
                                </div>
                                <h1 className="text-white font-medium text-xl">The Lake Kawaguchiko</h1>
                                <h1 className="text-white font-medium text-[9px]">THE LAKE Kawaguchiko Living is a rental house that is a luxurious Japanese house where you can stay while enjoying the view of Lake Kawaguchi.</h1>
                                <div className="flex space-x-1 mt-1">
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Free Wi-Fi</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Kitchen</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">2 Beds</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">House</div>
                                </div> 
                                <div className="flex space-x-1 mt-1">
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Spa</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Central</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Luxury</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Chill</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Tax</div>
                                </div>
                                <div className="flex w-full justify-between mt-8 items-center">
                                    <h1 className="text-lg font-medium">$180<span className="text-sm text-[#9c9c9c]">/night</span></h1>
                                    <div className="flex space-x-2">
                                        <div className="px-4 py-[2px] border-2 border-white text-xs font-medium rounded-full">Add</div>
                                        <div className="bg-[#282828] rounded-full flex items-center justify-center w-6 h-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-64 h-80 rounded-3xl border-4 border-[#282828]/80 overflow-hidden flex-none">
                            <img src="/cardBG.png" className="absolute top-0 h-auto w-64 -z-20"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent -z-10"/>
                            <div className="bg-[#282828] rounded-full absolute right-4 top-4 flex items-center justify-center w-6 h-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            </div>
                            <div className="px-4 mt-28">
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#FFC300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                    <h1 className="text-xs">4.7/5</h1>
                                </div>
                                <h1 className="text-white font-medium text-xl">The Lake Kawaguchiko</h1>
                                <h1 className="text-white font-medium text-[9px]">THE LAKE Kawaguchiko Living is a rental house that is a luxurious Japanese house where you can stay while enjoying the view of Lake Kawaguchi.</h1>
                                <div className="flex space-x-1 mt-1">
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Free Wi-Fi</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Kitchen</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">2 Beds</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">House</div>
                                </div> 
                                <div className="flex space-x-1 mt-1">
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Spa</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Central</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Luxury</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Chill</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Tax</div>
                                </div>
                                <div className="flex w-full justify-between mt-8 items-center">
                                    <h1 className="text-lg font-medium">$180<span className="text-sm text-[#9c9c9c]">/night</span></h1>
                                    <div className="flex space-x-2">
                                        <div className="px-4 py-[2px] border-2 border-white text-xs font-medium rounded-full">Add</div>
                                        <div className="bg-[#282828] rounded-full flex items-center justify-center w-6 h-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-64 h-80 rounded-3xl border-4 border-[#282828]/80 overflow-hidden flex-none">
                            <img src="/cardBG.png" className="absolute top-0 h-auto w-64 -z-20"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent -z-10"/>
                            <div className="bg-[#282828] rounded-full absolute right-4 top-4 flex items-center justify-center w-6 h-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            </div>
                            <div className="px-4 mt-28">
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#FFC300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                    <h1 className="text-xs">4.7/5</h1>
                                </div>
                                <h1 className="text-white font-medium text-xl">The Lake Kawaguchiko</h1>
                                <h1 className="text-white font-medium text-[9px]">THE LAKE Kawaguchiko Living is a rental house that is a luxurious Japanese house where you can stay while enjoying the view of Lake Kawaguchi.</h1>
                                <div className="flex space-x-1 mt-1">
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Free Wi-Fi</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Kitchen</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">2 Beds</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">House</div>
                                </div> 
                                <div className="flex space-x-1 mt-1">
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Spa</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Central</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Luxury</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Chill</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Tax</div>
                                </div>
                                <div className="flex w-full justify-between mt-8 items-center">
                                    <h1 className="text-lg font-medium">$180<span className="text-sm text-[#9c9c9c]">/night</span></h1>
                                    <div className="flex space-x-2">
                                        <div className="px-4 py-[2px] border-2 border-white text-xs font-medium rounded-full">Add</div>
                                        <div className="bg-[#282828] rounded-full flex items-center justify-center w-6 h-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-64 h-80 rounded-3xl border-4 border-[#282828]/80 overflow-hidden flex-none">
                            <img src="/cardBG.png" className="absolute top-0 h-auto w-64 -z-20"/>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent -z-10"/>
                            <div className="bg-[#282828] rounded-full absolute right-4 top-4 flex items-center justify-center w-6 h-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            </div>
                            <div className="px-4 mt-28">
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#FFC300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                    <h1 className="text-xs">4.7/5</h1>
                                </div>
                                <h1 className="text-white font-medium text-xl">The Lake Kawaguchiko</h1>
                                <h1 className="text-white font-medium text-[9px]">THE LAKE Kawaguchiko Living is a rental house that is a luxurious Japanese house where you can stay while enjoying the view of Lake Kawaguchi.</h1>
                                <div className="flex space-x-1 mt-1">
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Free Wi-Fi</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Kitchen</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">2 Beds</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">House</div>
                                </div> 
                                <div className="flex space-x-1 mt-1">
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Spa</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Central</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Luxury</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Chill</div>
                                    <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Tax</div>
                                </div>
                                <div className="flex w-full justify-between mt-8 items-center">
                                    <h1 className="text-lg font-medium">$180<span className="text-sm text-[#9c9c9c]">/night</span></h1>
                                    <div className="flex space-x-2">
                                        <div className="px-4 py-[2px] border-2 border-white text-xs font-medium rounded-full">Add</div>
                                        <div className="bg-[#282828] rounded-full flex items-center justify-center w-6 h-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full bg-[#121212] p-12 mt-24">
                <h1 className="text-4xl text-white font-medium">Find your next stay</h1>
                <h1 className="text-2xl text-[#919191]">Search low prices on hotels, homes and much more...</h1>
                <div className="w-full h-fit bg-[#202020] p-[10px] flex space-x-[16px] rounded-md mt-8">
                    <div className="space-x-[14px] flex items-center bg-[#0b0b0b] p-[16px] border border-[#3d3d3d] rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="14" viewBox="0 0 21 14" fill="none">
                            <path d="M0.875 13.625V0.5H2.625V9.25H9.625V2.25H16.625C17.5875 2.25 18.4115 2.59271 19.0969 3.27813C19.7823 3.96354 20.125 4.7875 20.125 5.75V13.625H18.375V11H2.625V13.625H0.875ZM6.125 8.375C5.39583 8.375 4.77604 8.11979 4.26563 7.60938C3.75521 7.09896 3.5 6.47917 3.5 5.75C3.5 5.02083 3.75521 4.40104 4.26563 3.89062C4.77604 3.38021 5.39583 3.125 6.125 3.125C6.85417 3.125 7.47396 3.38021 7.98438 3.89062C8.49479 4.40104 8.75 5.02083 8.75 5.75C8.75 6.47917 8.49479 7.09896 7.98438 7.60938C7.47396 8.11979 6.85417 8.375 6.125 8.375Z" fill="url(#paint0_linear_244_592)"/>
                            <defs>
                                <linearGradient id="paint0_linear_244_592" x1="10.5" y1="0.5" x2="10.5" y2="13.625" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white"/>
                                <stop offset="1" stop-color="white" stop-opacity="0.6"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <h1 className="text-white">Where are you going?</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"/></svg>
                    </div>
                    <div className="space-x-[14px] flex items-center bg-[#0b0b0b] p-[16px] border border-[#3d3d3d] rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                            <path d="M2.1875 8.3125H18.8125M2.1875 8.3125V17.9375C2.1875 18.1696 2.27969 18.3921 2.44378 18.5562C2.60788 18.7203 2.83044 18.8125 3.0625 18.8125H17.9375C18.1696 18.8125 18.3921 18.7203 18.5562 18.5562C18.7203 18.3921 18.8125 18.1696 18.8125 17.9375V8.3125M2.1875 8.3125V4.375C2.1875 4.14294 2.27969 3.92038 2.44378 3.75628C2.60788 3.59219 2.83044 3.5 3.0625 3.5H17.9375C18.1696 3.5 18.3921 3.59219 18.5562 3.75628C18.7203 3.92038 18.8125 4.14294 18.8125 4.375V8.3125" stroke="url(#paint0_linear_244_599)" stroke-width="2" stroke-linejoin="round"/>
                            <path d="M7 13.5625L9.625 16.1875L14.875 10.9375" stroke="url(#paint1_linear_244_599)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7 2.1875V5.6875M14 2.1875V5.6875" stroke="url(#paint2_linear_244_599)" stroke-width="2" stroke-linecap="round"/>
                            <defs>
                            <linearGradient id="paint0_linear_244_599" x1="10.5" y1="3.5" x2="10.5" y2="18.8125" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0.6"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_244_599" x1="10.9375" y1="10.9375" x2="10.9375" y2="16.1875" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0.6"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_244_599" x1="10.5" y1="2.1875" x2="10.5" y2="5.6875" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0.6"/>
                            </linearGradient>
                            </defs>
                        </svg>
                        <h1 className="text-white">Check in date - Check out date</h1>
                    </div>
                    <div className="space-x-[14px] flex items-center bg-[#0b0b0b] p-[16px] border border-[#3d3d3d] rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                            <path d="M8.5 0.75C7.63471 0.75 6.78885 1.00659 6.06938 1.48732C5.34992 1.96805 4.78916 2.65133 4.45803 3.45076C4.12689 4.25019 4.04025 5.12985 4.20906 5.97852C4.37787 6.82719 4.79455 7.60674 5.40641 8.21859C6.01826 8.83045 6.79781 9.24713 7.64648 9.41594C8.49515 9.58475 9.37481 9.49811 10.1742 9.16697C10.9737 8.83584 11.6569 8.27509 12.1377 7.55562C12.6184 6.83616 12.875 5.99029 12.875 5.125C12.875 3.96468 12.4141 2.85188 11.5936 2.03141C10.7731 1.21094 9.66032 0.75 8.5 0.75ZM8.5 7.75C7.98082 7.75 7.47331 7.59605 7.04163 7.30761C6.60995 7.01917 6.2735 6.6092 6.07482 6.12954C5.87614 5.64989 5.82415 5.12209 5.92544 4.61289C6.02672 4.10369 6.27673 3.63596 6.64384 3.26885C7.01096 2.90173 7.47869 2.65173 7.98789 2.55044C8.49709 2.44915 9.02489 2.50114 9.50454 2.69982C9.9842 2.8985 10.3942 3.23495 10.6826 3.66663C10.971 4.09831 11.125 4.60582 11.125 5.125C11.125 5.82119 10.8484 6.48887 10.3562 6.98116C9.86387 7.47344 9.19619 7.75 8.5 7.75ZM16.375 17.375V16.5C16.375 14.8756 15.7297 13.3176 14.581 12.169C13.4324 11.0203 11.8745 10.375 10.25 10.375H6.75C5.12555 10.375 3.56763 11.0203 2.41897 12.169C1.27031 13.3176 0.625 14.8756 0.625 16.5V17.375H2.375V16.5C2.375 15.3397 2.83594 14.2269 3.65641 13.4064C4.47688 12.5859 5.58968 12.125 6.75 12.125H10.25C11.4103 12.125 12.5231 12.5859 13.3436 13.4064C14.1641 14.2269 14.625 15.3397 14.625 16.5V17.375H16.375Z" fill="url(#paint0_linear_244_612)"/>
                            <defs>
                            <linearGradient id="paint0_linear_244_612" x1="8.5" y1="0.75" x2="8.5" y2="17.375" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0.6"/>
                            </linearGradient>
                            </defs>
                        </svg>
                        <h1 className="text-white">2 adults - 0 children - 1 room</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"/></svg>
                    </div>
                    <div className="space-x-[14px] flex-1 flex items-center bg-[#0b0b0b] p-[16px] border border-[#3d3d3d] rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                            <path d="M17.375 17.375L13.5688 13.5688M15.625 8.625C15.625 12.491 12.491 15.625 8.625 15.625C4.75901 15.625 1.625 12.491 1.625 8.625C1.625 4.75901 4.75901 1.625 8.625 1.625C12.491 1.625 15.625 4.75901 15.625 8.625Z" stroke="url(#paint0_linear_244_633)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <defs>
                            <linearGradient id="paint0_linear_244_633" x1="9.50001" y1="1.625" x2="9.50001" y2="17.375" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0.6"/>
                            </linearGradient>
                            </defs>
                        </svg>
                        <h1 className="text-white">Search...</h1>
                    </div>
                </div>
                <h1 className="text-4xl text-white font-medium mt-32">Offers</h1>
                <h1 className="text-2xl text-[#919191]">Promotions, deals and special offers for you</h1>
                <div className="w-full h-fit bg-[#202020] px-[36px] py-[24px] flex justify-between rounded-xl mt-8">
                    <div className="space-y-[20px]">
                        <div>
                            <h1 className="text-3xl text-white font-medium">Quick escape, quality time</h1>
                            <h1 className="text-xl text-[#919191]">Save up to 20% with a Getaway Deal</h1>
                        </div>
                        <div>
                            <div className="bg-[#0b0b0b] px-[20px] py-[10px] w-fit border border-[#3d3d3d] rounded-md">
                                <h1 className="text-white">Save on stays</h1>
                            </div>
                        </div>
                    </div>
                    <img src="/endtendPIC1.png"></img>
                </div>
                <div className="flex justify-center mt-24">
                    <h1 className="text-4xl text-white font-medium mt-32 self-center">Our footprints</h1>
                </div>
                <div className="w-full flex space-x-[24px] mt-8">
                    <div className="bg-[#0b0b0b] py-[27px] space-y-[10px] flex-1 border border-[#3d3d3d] rounded-md flex flex-col items-center">
                        <h1 className="text-4xl text-white font-medium">10M+</h1>
                        <h1 className="text-xl text-[#919191]">Total Customers</h1>
                    </div>
                    <div className="bg-[#0b0b0b] py-[27px] space-y-[10px] flex-1 border border-[#3d3d3d] rounded-md flex flex-col items-center">
                        <h1 className="text-4xl text-white font-medium">1.5+</h1>
                        <h1 className="text-xl text-[#919191]">Years of Experience</h1>
                    </div>
                    <div className="bg-[#0b0b0b] py-[27px] space-y-[10px] flex-1 border border-[#3d3d3d] rounded-md flex flex-col items-center">
                        <h1 className="text-4xl text-white font-medium">12K</h1>
                        <h1 className="text-xl text-[#919191]">Total Destinations</h1>
                    </div>
                    <div className="bg-[#0b0b0b] py-[27px] space-y-[10px] flex-1 border border-[#3d3d3d] rounded-md flex flex-col items-center">
                        <h1 className="text-4xl text-white font-medium">5.0</h1>
                        <h1 className="text-xl text-[#919191]">Average Rating</h1>
                    </div>
                </div>
                <div className="w-full flex space-x-[24px] mt-24">
                    <div className="flex-1 flex flex-col space-y-[8px]">
                        <div className="h-[48px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M19.8103 35.2727C19.5416 35.3532 19.2714 35.429 19 35.5C16.1459 34.7597 13.4697 33.4532 11.1305 31.6582C8.79128 29.8632 6.83676 27.6163 5.38309 25.051C3.92941 22.4857 3.00624 19.6543 2.66843 16.7252C2.33063 13.796 2.58508 10.8289 3.41666 8C9.12846 8.26137 14.7176 6.28872 19 2.5C23.2824 6.28872 28.8715 8.26137 34.5833 8C35.6956 11.7825 35.7709 15.7944 34.8015 19.616M31.8333 37.3333V26.3333M31.8333 26.3333L37.3333 31.8333M31.8333 26.3333L26.3333 31.8333" stroke="#1596F9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <h1 className="text-3xl text-white font-medium">Trust & Safety. </h1>
                        <h1 className="text-md text-[#919191]">Verified hosts, secure payments, and real guest reviews you can trust.</h1>
                    </div>
                    <div className="flex-1 flex flex-col space-y-[8px]">
                        <div className="h-[48px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                                <path d="M0.666656 19.0001C0.666656 16.464 1.14821 14.0806 2.11132 11.8501C3.07443 9.61953 4.38038 7.67925 6.02916 6.02925C7.67793 4.37925 9.61821 3.0733 11.85 2.11141C14.0818 1.14953 16.4651 0.66797 19 0.666748C22.8805 0.666748 26.3413 1.73619 29.3822 3.87508C32.423 6.01397 34.6304 8.77925 36.0042 12.1709C36.218 12.6904 36.226 13.2098 36.028 13.7292C35.83 14.2487 35.4707 14.6001 34.95 14.7834C34.4611 14.9362 33.9954 14.8904 33.553 14.6459C33.1105 14.4015 32.797 14.0348 32.6125 13.5459C31.8792 11.7126 30.825 10.0931 29.45 8.68758C28.075 7.28203 26.425 6.1973 24.5 5.43341V6.16675C24.5 7.17508 24.1413 8.03858 23.4238 8.75725C22.7064 9.47591 21.8429 9.83464 20.8333 9.83342H17.1667V13.5001C17.1667 14.0195 16.9907 14.4552 16.6387 14.8072C16.2867 15.1592 15.8515 15.3346 15.3333 15.3334H11.6667V19.0001H13.5C14.0194 19.0001 14.4552 19.1761 14.8072 19.5281C15.1592 19.8801 15.3345 20.3152 15.3333 20.8334V24.5001H13.5L4.69999 15.7001C4.60832 16.2501 4.5246 16.8001 4.44882 17.3501C4.37305 17.9001 4.33455 18.4501 4.33332 19.0001C4.33332 22.7279 5.56349 25.982 8.02382 28.7626C10.4842 31.5431 13.5776 33.1473 17.3042 33.5751C17.793 33.6362 18.1982 33.8428 18.5197 34.1947C18.8411 34.5467 19.0012 34.9819 19 35.5001C18.9988 36.0183 18.8228 36.454 18.472 36.8072C18.1212 37.1605 17.7014 37.3053 17.2125 37.2417C12.5375 36.7834 8.6111 34.8279 5.43332 31.3751C2.25555 27.9223 0.666656 23.7973 0.666656 19.0001ZM34.4 35.1334L29.8167 30.5501C29.175 30.9167 28.4875 31.2223 27.7542 31.4667C27.0208 31.7112 26.2417 31.8334 25.4167 31.8334C23.125 31.8334 21.1774 31.0316 19.5738 29.4281C17.9703 27.8245 17.1679 25.8763 17.1667 23.5834C17.1654 21.2905 17.9678 19.3429 19.5738 17.7406C21.1798 16.1382 23.1274 15.3359 25.4167 15.3334C27.7059 15.331 29.6541 16.1334 31.2613 17.7406C32.8685 19.3478 33.6703 21.2954 33.6667 23.5834C33.6667 24.4084 33.5444 25.1876 33.3 25.9209C33.0555 26.6542 32.75 27.3417 32.3833 27.9834L36.9667 32.5667C37.3028 32.9029 37.4708 33.3306 37.4708 33.8501C37.4708 34.3695 37.3028 34.7973 36.9667 35.1334C36.6305 35.4695 36.2028 35.6376 35.6833 35.6376C35.1639 35.6376 34.7361 35.4695 34.4 35.1334ZM25.4167 28.1667C26.7 28.1667 27.7847 27.7237 28.6708 26.8376C29.5569 25.9515 30 24.8667 30 23.5834C30 22.3001 29.5569 21.2154 28.6708 20.3292C27.7847 19.4431 26.7 19.0001 25.4167 19.0001C24.1333 19.0001 23.0486 19.4431 22.1625 20.3292C21.2764 21.2154 20.8333 22.3001 20.8333 23.5834C20.8333 24.8667 21.2764 25.9515 22.1625 26.8376C23.0486 27.7237 24.1333 28.1667 25.4167 28.1667Z" fill="#23EB97"/>
                            </svg>
                        </div>
                        <h1 className="text-3xl text-white font-medium">For Travelers. </h1>
                        <h1 className="text-md text-[#919191]">Book places to stay and rides to go — all from one easy platform.</h1>
                    </div>
                    <div className="flex-1 flex flex-col space-y-[8px]">
                        <div className="h-[48px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="28" viewBox="0 0 42 28" fill="none">
                                <path d="M0.833313 27.8333V0.333252H4.49998V18.6666H19.1666V3.99992H33.8333C35.85 3.99992 37.5764 4.71797 39.0125 6.15409C40.4486 7.5902 41.1666 9.31659 41.1666 11.3333V27.8333H37.5V22.3333H4.49998V27.8333H0.833313ZM11.8333 16.8333C10.3055 16.8333 9.00692 16.2985 7.93748 15.2291C6.86803 14.1596 6.33331 12.861 6.33331 11.3333C6.33331 9.80547 6.86803 8.50686 7.93748 7.43742C9.00692 6.36797 10.3055 5.83325 11.8333 5.83325C13.3611 5.83325 14.6597 6.36797 15.7291 7.43742C16.7986 8.50686 17.3333 9.80547 17.3333 11.3333C17.3333 12.861 16.7986 14.1596 15.7291 15.2291C14.6597 16.2985 13.3611 16.8333 11.8333 16.8333Z" fill="#FF4526"/>
                            </svg>
                        </div>
                        <h1 className="text-3xl text-white font-medium">For Hosts.</h1>
                        <h1 className="text-md text-[#919191]">Easily list your space, manage bookings, and grow your income fast.</h1>
                    </div>
                    <div className="flex-1 flex flex-col space-y-[8px]">
                        <div className="h-[48px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                <path d="M4.58337 17.4166H39.4167M4.58337 17.4166V37.5833C4.58337 38.0695 4.77653 38.5358 5.12034 38.8796C5.46416 39.2234 5.93048 39.4166 6.41671 39.4166H37.5834C38.0696 39.4166 38.5359 39.2234 38.8797 38.8796C39.2236 38.5358 39.4167 38.0695 39.4167 37.5833V17.4166M4.58337 17.4166V9.16659C4.58337 8.68035 4.77653 8.21404 5.12034 7.87022C5.46416 7.52641 5.93048 7.33325 6.41671 7.33325H37.5834C38.0696 7.33325 38.5359 7.52641 38.8797 7.87022C39.2236 8.21404 39.4167 8.68035 39.4167 9.16659V17.4166" stroke="#FFC400" stroke-width="4" stroke-linejoin="round"/>
                                <path d="M14.6667 28.4165L20.1667 33.9165L31.1667 22.9165" stroke="#FFC400" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.6667 4.58325V11.9166M29.3334 4.58325V11.9166" stroke="#FFC400" stroke-width="4" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <h1 className="text-3xl text-white font-medium">Trip Planner.</h1>
                        <h1 className="text-md text-[#919191]">Plan your trip with maps, shared itineraries, and helpful reminders.</h1>
                    </div>
                </div>
                <h1 className="text-3xl text-white font-medium mt-60">Choose your property type</h1>
                <h1 className="text-xl text-[#919191]">We can offer you the best property for your travel</h1>
                <div className="w-full space-x-[36px] flex mt-4">
                    <div className="flex flex-col flex-1 space-y-[8px]">
                        <img className="w-full aspect-square" src="/endtendHOTEL1.png"></img>
                        <div className="w-full flex justify-between items-center">
                            <h1 className="text-white text-2xl font-medium">Hotels</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M7 17L17 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7 7H17V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 space-y-[8px]">
                        <img className="w-full aspect-square" src="/endtendHOTEL2.png"></img>
                        <div className="w-full flex justify-between items-center">
                            <h1 className="text-white text-2xl font-medium">Apartments</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M7 17L17 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7 7H17V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 space-y-[8px]">
                        <img className="w-full aspect-square" src="/endtendHOTEL3.png"></img>
                        <div className="w-full flex justify-between items-center">
                            <h1 className="text-white text-2xl font-medium">Resorts</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M7 17L17 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7 7H17V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 space-y-[8px]">
                        <img className="w-full aspect-square" src="/endtendHOTEL4.png"></img>
                        <div className="w-full flex justify-between items-center">
                            <h1 className="text-white text-2xl font-medium">Villas</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M7 17L17 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7 7H17V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <h1 className="text-3xl text-white font-medium mt-28">Trending destinations</h1>
                <h1 className="text-xl text-[#919191]">Most popular choices for travellers from Mongolia</h1>
                <div className="w-full flex space-x-[36px] mt-4">
                    <div className="flex flex-1 justify-center rounded-2xl border border-[#4a4a4a] relative">
                        <img className="w-full rounded-2xl" src="/endtendSEOUL.png"></img>
                        <div className="absolute w-full px-6 bottom-6 flex justify-between">
                            <h1 className="text-white text-xl"><span className="font-semibold">Seoul</span>, Korea</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M7 17L17 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7 7H17V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-1 rounded-2xl border border-[#4a4a4a] relative">
                        <img className="w-full rounded-2xl" src="/endtendTOKYO.png"></img>
                        <div className="absolute w-full px-6 bottom-6 flex justify-between">
                            <h1 className="text-white text-xl"><span className="font-semibold">Tokyo</span>, Japan</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M7 17L17 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7 7H17V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-full flex space-x-[36px] mt-9 h-[240px]">
                    <div className="flex flex-1 justify-center rounded-2xl border border-[#4a4a4a] relative">
                        <img className="w-full rounded-2xl" src="/endtendHOCHINMINH.png"></img>
                        <div className="absolute w-full px-6 bottom-6 flex justify-between">
                            <h1 className="text-white text-xl"><span className="font-semibold">Ho Chi Minh</span>, Vietnam</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M7 17L17 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7 7H17V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-1 rounded-2xl border border-[#4a4a4a] relative">
                        <img className="w-full rounded-2xl" src="/endtendUB.png"></img>
                        <div className="absolute w-full px-6 bottom-6 flex justify-between">
                            <h1 className="text-white text-xl"><span className="font-semibold">Ulaanbaatar</span>, Mongolia</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M7 17L17 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7 7H17V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-1 rounded-2xl border border-[#4a4a4a] relative">
                        <img className="w-full rounded-2xl" src="/endtendFRANKFURT.png"></img>
                        <div className="absolute w-full px-6 bottom-6 flex justify-between">
                            <h1 className="text-white text-xl"><span className="font-semibold">Frankfurt</span>, Germany</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <path d="M7 17L17 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7 7H17V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <h1 className="text-3xl text-white font-medium mt-28">Stay at our top unique properties</h1>
                <h1 className="text-xl text-[#919191]">From castles and villas to boats and igloos, we have got it all</h1>
                <div className="flex justify-between mt-4">
                    <div className="relative w-64 h-80 rounded-3xl border-4 border-[#282828]/80 overflow-hidden flex-none">
                        <img className="w-full absolute top-0 h-32 object-cover" src="/cardBG.png"></img>
                        <div className="w-full h-32 bg-gradient-to-t from-black/50 to-transparent absolute top-0 z-10"></div>
                        <div className="bg-[#282828] rounded-full absolute right-4 top-4 flex items-center justify-center w-6 h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        </div>
                        <div className="px-4 mt-28">
                            <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#FFC300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                <h1 className="text-xs">4.7/5</h1>
                            </div>
                            <h1 className="text-white font-medium text-xl">The Lake Kawaguchiko</h1>
                            <h1 className="text-white font-medium text-[9px]">THE LAKE Kawaguchiko Living is a rental house that is a luxurious Japanese house where you can stay while enjoying the view of Lake Kawaguchi.</h1>
                            <div className="flex space-x-1 mt-1">
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Free Wi-Fi</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Kitchen</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">2 Beds</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">House</div>
                            </div> 
                            <div className="flex space-x-1 mt-1">
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Spa</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Central</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Luxury</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Chill</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Tax</div>
                            </div>
                            <div className="flex w-full justify-between mt-4 items-center">
                                <h1 className="text-lg font-medium">$180<span className="text-sm text-[#9c9c9c]">/night</span></h1>
                                <div className="flex space-x-2">
                                    <div className="px-4 py-[2px] border-2 border-white text-xs font-medium rounded-full">Add</div>
                                    <div className="bg-[#282828] rounded-full flex items-center justify-center w-6 h-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-64 h-80 rounded-3xl border-4 border-[#282828]/80 overflow-hidden flex-none">
                        <img className="w-full absolute top-0 h-32 object-cover" src="/cardBG.png"></img>
                        <div className="w-full h-32 bg-gradient-to-t from-black/50 to-transparent absolute top-0 z-10"></div>
                        <div className="bg-[#282828] rounded-full absolute right-4 top-4 flex items-center justify-center w-6 h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        </div>
                        <div className="px-4 mt-28">
                            <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#FFC300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                <h1 className="text-xs">4.7/5</h1>
                            </div>
                            <h1 className="text-white font-medium text-xl">The Lake Kawaguchiko</h1>
                            <h1 className="text-white font-medium text-[9px]">THE LAKE Kawaguchiko Living is a rental house that is a luxurious Japanese house where you can stay while enjoying the view of Lake Kawaguchi.</h1>
                            <div className="flex space-x-1 mt-1">
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Free Wi-Fi</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Kitchen</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">2 Beds</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">House</div>
                            </div> 
                            <div className="flex space-x-1 mt-1">
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Spa</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Central</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Luxury</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Chill</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Tax</div>
                            </div>
                            <div className="flex w-full justify-between mt-4 items-center">
                                <h1 className="text-lg font-medium">$180<span className="text-sm text-[#9c9c9c]">/night</span></h1>
                                <div className="flex space-x-2">
                                    <div className="px-4 py-[2px] border-2 border-white text-xs font-medium rounded-full">Add</div>
                                    <div className="bg-[#282828] rounded-full flex items-center justify-center w-6 h-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-64 h-80 rounded-3xl border-4 border-[#282828]/80 overflow-hidden flex-none">
                        <img className="w-full absolute top-0 h-32 object-cover" src="/cardBG.png"></img>
                        <div className="w-full h-32 bg-gradient-to-t from-black/50 to-transparent absolute top-0 z-10"></div>
                        <div className="bg-[#282828] rounded-full absolute right-4 top-4 flex items-center justify-center w-6 h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        </div>
                        <div className="px-4 mt-28">
                            <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#FFC300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                <h1 className="text-xs">4.7/5</h1>
                            </div>
                            <h1 className="text-white font-medium text-xl">The Lake Kawaguchiko</h1>
                            <h1 className="text-white font-medium text-[9px]">THE LAKE Kawaguchiko Living is a rental house that is a luxurious Japanese house where you can stay while enjoying the view of Lake Kawaguchi.</h1>
                            <div className="flex space-x-1 mt-1">
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Free Wi-Fi</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Kitchen</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">2 Beds</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">House</div>
                            </div> 
                            <div className="flex space-x-1 mt-1">
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Spa</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Central</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Luxury</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Chill</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Tax</div>
                            </div>
                            <div className="flex w-full justify-between mt-4 items-center">
                                <h1 className="text-lg font-medium">$180<span className="text-sm text-[#9c9c9c]">/night</span></h1>
                                <div className="flex space-x-2">
                                    <div className="px-4 py-[2px] border-2 border-white text-xs font-medium rounded-full">Add</div>
                                    <div className="bg-[#282828] rounded-full flex items-center justify-center w-6 h-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-64 h-80 rounded-3xl border-4 border-[#282828]/80 overflow-hidden flex-none">
                        <img className="w-full absolute top-0 h-32 object-cover" src="/cardBG.png"></img>
                        <div className="w-full h-32 bg-gradient-to-t from-black/50 to-transparent absolute top-0 z-10"></div>
                        <div className="bg-[#282828] rounded-full absolute right-4 top-4 flex items-center justify-center w-6 h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        </div>
                        <div className="px-4 mt-28">
                            <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#FFC300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                <h1 className="text-xs">4.7/5</h1>
                            </div>
                            <h1 className="text-white font-medium text-xl">The Lake Kawaguchiko</h1>
                            <h1 className="text-white font-medium text-[9px]">THE LAKE Kawaguchiko Living is a rental house that is a luxurious Japanese house where you can stay while enjoying the view of Lake Kawaguchi.</h1>
                            <div className="flex space-x-1 mt-1">
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Free Wi-Fi</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Kitchen</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">2 Beds</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">House</div>
                            </div> 
                            <div className="flex space-x-1 mt-1">
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Spa</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Central</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Luxury</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Chill</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Tax</div>
                            </div>
                            <div className="flex w-full justify-between mt-4 items-center">
                                <h1 className="text-lg font-medium">$180<span className="text-sm text-[#9c9c9c]">/night</span></h1>
                                <div className="flex space-x-2">
                                    <div className="px-4 py-[2px] border-2 border-white text-xs font-medium rounded-full">Add</div>
                                    <div className="bg-[#282828] rounded-full flex items-center justify-center w-6 h-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-64 h-80 rounded-3xl border-4 border-[#282828]/80 overflow-hidden flex-none">
                        <img className="w-full absolute top-0 h-32 object-cover" src="/cardBG.png"></img>
                        <div className="w-full h-32 bg-gradient-to-t from-black/50 to-transparent absolute top-0 z-10"></div>
                        <div className="bg-[#282828] rounded-full absolute right-4 top-4 flex items-center justify-center w-6 h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        </div>
                        <div className="px-4 mt-28">
                            <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#FFC300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                <h1 className="text-xs">4.7/5</h1>
                            </div>
                            <h1 className="text-white font-medium text-xl">The Lake Kawaguchiko</h1>
                            <h1 className="text-white font-medium text-[9px]">THE LAKE Kawaguchiko Living is a rental house that is a luxurious Japanese house where you can stay while enjoying the view of Lake Kawaguchi.</h1>
                            <div className="flex space-x-1 mt-1">
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Free Wi-Fi</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Kitchen</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">2 Beds</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">House</div>
                            </div> 
                            <div className="flex space-x-1 mt-1">
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Spa</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Central</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Luxury</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Chill</div>
                                <div className="p-1 bg-[#282828] flex items-center space-x-1 w-fit rounded-full text-[9px]">Tax</div>
                            </div>
                            <div className="flex w-full justify-between mt-4 items-center">
                                <h1 className="text-lg font-medium">$180<span className="text-sm text-[#9c9c9c]">/night</span></h1>
                                <div className="flex space-x-2">
                                    <div className="px-4 py-[2px] border-2 border-white text-xs font-medium rounded-full">Add</div>
                                    <div className="bg-[#282828] rounded-full flex items-center justify-center w-6 h-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-3xl text-white font-medium mt-28">Get inspiration for your next trip</h1>
                <div className="w-full flex mt-4 space-x-[10px]">
                    <div className="flex flex-1 rounded-2xl relative">
                        <img className="w-full rounded-2xl" src="/endtendTRIP1.png"></img>
                        <div className="absolute w-full px-6 bottom-6 flex justify-between items-end">
                            <div>
                                <h1 className="text-3xl text-white font-semibold">Explore our<br></br>Seoul<span className="text-green-500">.</span></h1>
                                <h1 className="text-sm text-white">200 hotels, 345 local flights and 234 bus providers</h1>
                            </div>
                            <div className="bg-[#0b0b0b] px-[20px] py-[10px] w-fit border bg-opacity-50 backdrop-blur-[24px] border-[#3d3d3d] rounded-md">
                                <h1 className="text-white">Explore</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 rounded-2xl relative">
                        <img className="w-full rounded-2xl" src="/endtendTRIP2.png"></img>
                        <div className="absolute w-full px-6 bottom-6 flex justify-between items-end">
                            <div>
                                <h1 className="text-3xl text-white font-semibold">Explore our<br></br>Tokyo<span className="text-red-500">.</span></h1>
                                <h1 className="text-sm text-white">200 hotels, 345 local flights and 234 bus providers</h1>
                            </div>
                            <div className="bg-[#0b0b0b] px-[20px] py-[10px] w-fit border bg-opacity-50 backdrop-blur-[24px] border-[#3d3d3d] rounded-md">
                                <h1 className="text-white">Explore</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 rounded-2xl relative">
                        <img className="w-full rounded-2xl" src="/endtendTRIP3.png"></img>
                        <div className="absolute w-full px-6 bottom-6 flex justify-between items-end">
                            <div>
                                <h1 className="text-3xl text-white font-semibold">Explore our<br></br>Ulaanbaatar<span className="text-blue-500">.</span></h1>
                                <h1 className="text-sm text-white">200 hotels, 345 local flights and 234 bus providers</h1>
                            </div>
                            <div className="bg-[#0b0b0b] px-[20px] py-[10px] w-fit border bg-opacity-50 backdrop-blur-[24px] border-[#3d3d3d] rounded-md">
                                <h1 className="text-white">Explore</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 rounded-2xl relative">
                        <img className="w-full rounded-2xl" src="/endtendTRIP4.png"></img>
                        <div className="absolute w-full px-6 bottom-6 flex justify-between items-end">
                            <div>
                                <h1 className="text-3xl text-white font-semibold">Explore our<br></br>Shanghai<span className="text-purple-500">.</span></h1>
                                <h1 className="text-sm text-white">200 hotels, 345 local flights and 234 bus providers</h1>
                            </div>
                            <div className="bg-[#0b0b0b] px-[20px] py-[10px] w-fit border bg-opacity-50 backdrop-blur-[24px] border-[#3d3d3d] rounded-md">
                                <h1 className="text-white">Explore</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-3xl text-white font-medium mt-28">Travel more, spend less</h1>
                <div className="w-full h-fit bg-[#202020] px-[36px] py-[24px] flex justify-between rounded-xl mt-4">
                    <div className="space-y-[20px]">
                        <div>
                            <h1 className="text-3xl text-white font-medium">Sign in, save money</h1>
                            <h1 className="text-xl text-[#919191]">Save 10% or more at participating properties - just look for the blue Genius label</h1>
                        </div>
                        <div>
                            <div className="flex space-x-6 items-center">
                                <div className="bg-[#0b0b0b] px-[20px] py-[10px] w-fit border border-[#3d3d3d] rounded-md">
                                    <h1 className="text-white">Sign in</h1>
                                </div>
                                <h1 className="text-white">Register</h1>
                            </div>
                        </div>
                    </div>
                    <img src="/endtendPIC1.png"></img>
                </div>
                <h1 className="text-3xl text-white font-medium mt-28">Most popular choice</h1>
                <h1 className="text-xl text-[#919191]">Join us in exploring Mongolia, the must-visit destination of 2025!</h1>
                <div className="w-full h-fit flex flex-col items-center justify-end bg-[#0b0b0b] border border-[#3d3d3d] mt-4 rounded-xl">
                    <h1 className="text-lg text-[#919191] translate-y-8">Trip to Mongolia</h1>
                    <h1 className="text-6xl text-white translate-y-8">Explore it right now</h1>
                    <img src="/endtendCATALOG.png"></img>
                </div>
                <h1 className="text-3xl text-white mt-20 font-medium">Inspiration for future getaways</h1>
                <div className="space-x-[40px] text-lg text-white flex mt-2">
                    <h1 className="underline decoration-blue-500 decoration-2 underline-offset-[23px]">Unique stays</h1>
                    <h1>Categories</h1>
                    <h1>Travel tips & inspiration</h1>
                    <h1>EndTend-friendly apartments</h1>
                </div>
                <div className="w-full h-[1px] mt-4 bg-white"></div>
                <div className="w-full h-fit grid grid-cols-5 gap-4 mt-8">
                    <div>
                        <h1 className="text-xl text-white font-medium">Cabins</h1>
                        <h1 className="text-xl text-[#919191]">United States</h1>
                    </div>
                    <div>
                        <h1 className="text-xl text-white font-medium">Treehouses</h1>
                        <h1 className="text-xl text-[#919191]">United States</h1>
                    </div>
                    <div>
                        <h1 className="text-xl text-white font-medium">Glamping</h1>
                        <h1 className="text-xl text-[#919191]">United States</h1>
                    </div>
                    <div>
                        <h1 className="text-xl text-white font-medium">Tiny houses</h1>
                        <h1 className="text-xl text-[#919191]">United States</h1>
                    </div>
                    <div>
                        <h1 className="text-xl text-white font-medium">Beach houses</h1>
                        <h1 className="text-xl text-[#919191]">United States</h1>
                    </div>
                    <div>
                        <h1 className="text-xl text-white font-medium">Lake houses</h1>
                        <h1 className="text-xl text-[#919191]">United States</h1>
                    </div>
                    <div>
                        <h1 className="text-xl text-white font-medium">Yurt Rentals</h1>
                        <h1 className="text-xl text-[#919191]">United States</h1>
                    </div>
                    <div>
                        <h1 className="text-xl text-white font-medium">Yurt Rentals</h1>
                        <h1 className="text-xl text-[#919191]">United States</h1>
                    </div>
                    <div>
                        <h1 className="text-xl text-white font-medium">Castle Rentals</h1>
                        <h1 className="text-xl text-[#919191]">United States</h1>
                    </div>
                    <div>
                        <h1 className="text-xl text-white font-medium">Houseboats</h1>
                        <h1 className="text-xl text-[#919191]">United States</h1>
                    </div>
                    <div>
                        <h1 className="text-xl text-white font-medium">Private Island Rentals</h1>
                        <h1 className="text-xl text-[#919191]">United States</h1>
                    </div>
                    <div>
                        <h1 className="text-xl text-white font-medium">Farm Houses</h1>
                        <h1 className="text-xl text-[#919191]">United States</h1>
                    </div>
                    <div>
                        <h1 className="text-xl text-white font-medium">Farm Cottages</h1>
                        <h1 className="text-xl text-[#919191]">United States</h1>
                    </div>
                    <div>
                        <h1 className="text-xl text-white font-medium">Cabin Rentals</h1>
                        <h1 className="text-xl text-[#919191]">United States</h1>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <h1 className="text-xl text-white font-medium">Show more</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"/></svg>
                    </div>
                    <div className="w-screen h-fit grid grid-cols-3 bg-black py-12 -translate-x-12 px-12">
                        <div className="space-y-2">
                            <h1 className="text-lg text-white font-medium">Support</h1>
                            <h1 className="text-lg text-[#919191]">Help Center</h1>
                            <h1 className="text-lg text-[#919191]">EndCover</h1>
                            <h1 className="text-lg text-[#919191]">Anti-discrimination</h1>
                            <h1 className="text-lg text-[#919191]">Disability support</h1>
                            <h1 className="text-lg text-[#919191]">Cancellation options</h1>
                            <h1 className="text-lg text-[#919191]">Report neighborhood concern</h1>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-lg text-white font-medium">Hosting</h1>
                            <h1 className="text-lg text-[#919191]">EndTend your home</h1>
                            <h1 className="text-lg text-[#919191]">EndCover for Hosts</h1>
                            <h1 className="text-lg text-[#919191]">Hosting resources</h1>
                            <h1 className="text-lg text-[#919191]">Community forum</h1>
                            <h1 className="text-lg text-[#919191]">Hosting responsibly</h1>
                            <h1 className="text-lg text-[#919191]">EndTend-friendly aparments</h1>
                            <h1 className="text-lg text-[#919191]">Join a free Hosting class</h1>
                            <h1 className="text-lg text-[#919191]">Find a co-host</h1>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-lg text-white font-medium">EndTend</h1>
                            <h1 className="text-lg text-[#919191]">2025 summer release</h1>
                            <h1 className="text-lg text-[#919191]">Newsroom</h1>
                            <h1 className="text-lg text-[#919191]">New features</h1>
                            <h1 className="text-lg text-[#919191]">Careers</h1>
                            <h1 className="text-lg text-[#919191]">Investors</h1>
                            <h1 className="text-lg text-[#919191]">Gift cards</h1>
                            <h1 className="text-lg text-[#919191]">Join a free Hosting class</h1>
                            <h1 className="text-lg text-[#919191]">EndTend.com emergency stays</h1>
                        </div>
                    </div>
                </div>  
                <div className="w-screen -translate-x-12 h-[1px] bg-[#919191]"></div>
                <div className="w-screen -translate-x-12 h-fit text-[#919191] bg-black flex items-center px-12 py-8 justify-between">
                    <h1> © 2025 EndTend, Inc. · Terms · Privacy · Your Privacy Choices</h1>
                    <div className="flex space-x-4 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#919191" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 12H22" stroke="#919191" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="#919191" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h1>English(US)</h1>
                        <h1 className="font-semibold">$ USD</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#919191" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path d="M0.0414634 0L6.60564 9.37769L0 17H1.4875L7.26906 10.3246L11.9415 17H17L10.0678 7.09625L16.2148 0H14.7299L9.40442 6.14658L5.10259 0H0.0414634ZM2.22866 1.1684H4.5532L14.8154 15.8288H12.4909L2.22866 1.1684Z" fill="#919191"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#919191" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16 11.3698C16.1234 12.2021 15.9812 13.052 15.5937 13.7988C15.2062 14.5456 14.5931 15.1512 13.8416 15.5295C13.0901 15.9077 12.2384 16.0394 11.4077 15.9057C10.5771 15.7721 9.80971 15.3799 9.21479 14.785C8.61987 14.1901 8.22768 13.4227 8.09402 12.592C7.96035 11.7614 8.09202 10.9097 8.47028 10.1582C8.84854 9.40667 9.45414 8.79355 10.2009 8.40605C10.9477 8.01856 11.7977 7.8764 12.63 7.99981C13.4789 8.1257 14.2648 8.52128 14.8716 9.12812C15.4785 9.73496 15.8741 10.5209 16 11.3698Z" stroke="#919191" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.5 6.5H17.51" stroke="#919191" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}