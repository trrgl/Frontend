import { useRouter } from "next/router";
import { useState } from "react";

export default function Toki() {
    const [search, setSearch] = useState("");

    const router = useRouter();
    const stock = [
        {
            id: 1,
            name: "RTX 5090",
            price: "$4000",
            brand: "NVIDIA",
            imgsrc: "../rtx5090.jpeg",
            additional: [
                {
                    name: "Cable",
                    price: "$10"
                },
                {
                    name: "Replacement Fan",
                    price: "$50"
                }
            ]
        },
        {
            id: 2,
            name: "IPhone 16 Pro Max",
            price: "$1000",
            brand: "Apple",
            imgsrc: "../iphone16.webp",
            additional: [
                {
                    name: "Case",
                    price: "$10"
                },
                {
                    name: "Charger",
                    price: "$15"
                }
            ]
        },
        {
            id: 3,
            name: "HyperX Cloud II",
            price: "$100",
            brand: "HyperX",
            imgsrc: "../cloud2.webp",
            additional: [
                {
                    name: "Soundcard",
                    price: "$20"
                },
                {
                    name: "Replacement Mic",
                    price: "$10"
                }
            ]
        },
        {
            id: 4,
            name: "Intel Core I9-14900K",
            price: "$1500",
            brand: "Intel",
            imgsrc: "../i9-14900k.png",
            additional: [
                {
                    name: "Thermal Paste",
                    price: "$10"
                },
                {
                    name: "Travel Case",
                    price: "$20"
                }
            ]
        },
        {
            id: 5,
            name: "Wooting 60HE+",
            price: "$350",
            brand: "Wooting",
            imgsrc: "../wootin60.png",
            additional: [
                {
                    name: "Travel Case",
                    price: "$30"
                },
                {
                    name: "Keyswap Kit",
                    price: "$50"
                }
            ]
        },
        {
            id: 6,
            name: "Macbook M4 Air",
            price: "$1400",
            brand: "Apple",
            imgsrc: "../macbookm4.jpg",
            additional: [
                {
                    name: "Charger",
                    price: "$50"
                },
                {
                    name: "Adapter",
                    price: "$100"
                }
            ]
        },
        {
            id: 7,
            name: "AirPods 4",
            price: "$130",
            brand: "Apple",
            imgsrc: "../airpods4.jpg",
            additional: [
                {
                    name: "Case",
                    price: "$100"
                },
                {
                    name: "Charger",
                    price: "$50"
                }
            ]
        },
        {
            id: 8,
            name: "Vision Pro",
            price: "$4000",
            brand: "Apple",
            imgsrc: "../visionpro.jpg",
            additional: [
                {
                    name: "Travel Case",
                    price: "$200"
                },
                {
                    name: "Earbuds",
                    price: "$100"
                }
            ]
        },
        {
            id: 9,
            name: "IPad Pro",
            price: "$1000",
            brand: "Apple",
            imgsrc: "../ipadpro.png",
            additional: [
                {
                    name: "Case",
                    price: "$40"
                },
                {
                    name: "Charger",
                    price: "$50"
                }
            ]
        },
        {
            id: 10,
            name: "Apple Watch Series 10",
            price: "$250",
            brand: "Apple",
            imgsrc: "../watch10.jpg",
            additional: [
                {
                    name: "Replacement band",
                    price: "$50"
                },
                {
                    name: "Case",
                    price: "$30"
                }
            ]
        }
    ]

    const filteredStock = stock.filter((items) =>
        items.name.toLowerCase().includes(search.toLowerCase())
    );

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
            <div className="w-4/5 h-full bg-slate-200 overflow-auto p-4 flex flex-col space-y-4">
                <div className="w-full h-12 flex justify-between bg-slate-200">
                    <input value={search} onChange={(Search) => setSearch(Search.target.value)} className="px-2 sm:px-4 md:px-6 py-3 focus:outline-none rounded-xl text-sm text-black" placeholder="Search..."></input>
                    <div className="sm:flex hidden px-6 py-3 text-center bg-orange-600 hover:bg-orange-800 cursor-pointer rounded-xl justify-center items-center text-white">Add Item</div>
                </div>
                {filteredStock.length > 0 ? filteredStock.map((item) => (
                    <div key={item.id} className="w-full h-32 rounded-xl bg-white flex items-center justify-between px-4 py-2">
                        <div className="flex space-x-4 items-center text-black text-sm sm:text-lg">
                            <img className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-slate-400 object-contain" src={item.imgsrc}></img>
                            <h1>{item.name}</h1>
                            <h1 className="sm:block hidden">{item.price}</h1>
                            <h1 className="md:block hidden">{item.brand}</h1>
                        </div>
                        <div className="flex space-x-8 items-center text-black">
                            <div className="lg:flex hidden flex-col space-y-2 text-black items-end">
                                <h1>{item.additional[0].name} <span className="font-semibold">{item.additional[0].price}</span></h1>
                                <h1>{item.additional[1].name} <span className="font-semibold">{item.additional[1].price}</span></h1>
                            </div>
                            <div className="px-2 py-2 sm:py-4 sm:px-4 md:px-8 text-center bg-orange-600 hover:bg-orange-800 cursor-pointer rounded-xl flex justify-center items-center text-white">
                                Add <span className="ml-1 md:block hidden">to Cart</span>
                            </div>
                        </div>
                    </div>
                )) : <h1 className="text-black">No Item found</h1>}
            </div>
        </div>
    );
}