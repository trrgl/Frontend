import { useState, useEffect } from "react";

export default function Fetch() {
    const [input, setInput] = useState('');
    const [ip, setIP] = useState('');
    const [isp, setISP] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');

    const fetchData = async (ip) => {
        try {
            const data = await fetch(`https://api.ipquery.io/${ip}`);
            const jsonData = await data.json();
            setIP(jsonData.ip)
            setISP(jsonData.isp.isp)
            setCountry(jsonData.location.country)
            setCity(jsonData.location.city)
        } catch(error) {
            console.log(error);
        }
    }

    const search = () => {
        fetchData(input)
    }

    return (
        <div className="w-full h-full">
            <div className="bg-[#d2d5da] w-full h-screen flex justify-center items-center flex-col">
                <h1 className="text-xl text-black mb-4">Hacker-уудын 99.99%-ийн сонголт</h1>
                <h1 className="text-5xl font-bold text-black mb-8">IP Look Up</h1>
                <div className="bg-white w-96 h-14 rounded-xl drop-shadow-xl flex px-4 py-2 justify-between items-center">
                    <input value={input} onChange={e => {setInput(e.currentTarget.value)}} id="input" className="rounded-xl text-black focus:outline-none w-4/5 text-lg" placeholder="Өнгөө оруулна уу..."></input>
                    <a onClick={() => search()} href="#result">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    </a>
                </div>
            </div>
            <div className="w-full h-screen bg-[#d2d5da]" id="result">
                <h1 className="text-black">{ip}</h1>
                <h1 className="text-black">{isp}</h1>
                <h1 className="text-black">{country}, {city}</h1>
            </div>
        </div>
    );
}