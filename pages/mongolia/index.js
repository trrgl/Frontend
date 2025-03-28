import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Fetch() {
    const router = useRouter();

    const [search, setSearch] = useState('');
    const [grid, setGrid] = useState(true);
    const [Found, setFound] = useState(true);
    const [loading, setLoading] = useState(true);

    const [clothes, setClothes] = useState([]);
    const [instruments, setInstruments] = useState([]);
    const [historicaltools, setTools] = useState([]);
    const [ethnicgroups, setGroups] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [historicalfigures, setFigures] = useState([]);
    const [touristattractions, setAttractions] = useState([]);

    const fetchData = async (link, setData) => {
        try {
            const data = await fetch(`https://mongol-api-rest.vercel.app/${link}`);
            const jsonData = await data.json();
            setData(jsonData[link])
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setLoading(true);
        fetchData("clothes", setClothes);
        fetchData("instruments", setInstruments);
        fetchData("historicalTools", setTools);
        fetchData("ethnicGroups", setGroups);
        fetchData("provinces", setProvinces);
        fetchData("historicalFigures", setFigures);
        fetchData("touristAttractions", setAttractions);
        setLoading(false);
    },[])

    const cfilteredData = clothes.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    const ifilteredData = instruments.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    const htfilteredData = historicaltools.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    const egfilteredData = ethnicgroups.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    const hffilteredData = historicalfigures.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    const tafilteredData = touristattractions.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    const pfilteredData = provinces.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    const allData = [...cfilteredData, ...ifilteredData, ...htfilteredData, ...egfilteredData, ...hffilteredData, ...tafilteredData, ...pfilteredData]

    useEffect(() => {
        if (allData.length === 0) {
            setFound(false)
        } else {
            setFound(true)
        }
    }, [allData])
    
    if (loading) {
        console.log("hi")
    }

    return (
        <div className="w-full h-full flex flex-col p-8 items-center bg-[#171717] space-y-8">
            <h1 className="text-red-600 font-black font-serif text-3xl">Mongolia</h1>
            <div className="relative group w-full">
                <div className="group-hover:from-red-400 group-hover:via-blue-500 group-hover:to-red-400 absolute -inset-0.5 rounded-lg bg-gradient-to-r from-red-600 via-blue-700 to-red-600 group-focus:from-red-400 group-focus:via-blue-500 group-focus:to-red-400 opacity-75 blur"></div>
                <input value={search} onChange={(Search) => setSearch(Search.target.value)} placeholder="Search..." className="w-full focus:outline-none h-12 drop-shadow-xl text-[#EAEAEA] bg-slate-900 focus:bg-slate-800 hover:bg-slate-800 rounded-xl p-2"></input>
            </div>
            <div className={grid ? "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 z-10" : "w-full space-y-8 z-10"}>
                {cfilteredData.map((item) => (
                    <div key={item.id} className="relative group flex items-center justify-center">
                        <div className="group-hover:from-red-400 group-hover:via-blue-500 group-hover:to-red-400 absolute -inset-0.5 rounded-lg bg-gradient-to-r from-red-600 via-blue-700 to-red-600 opacity-75 blur"></div>
                        <div key={item.id} onClick={() => router.push(`mongolia/clothes/${item.id}`)} className={`w-full cursor-pointer group-hover:bg-slate-800 bg-slate-900 drop-shadow-xl text-[#EAEAEA] h-full rounded-xl p-4 flex items-center ${grid ? "flex-col" : "flex-row space-x-4"}`}>
                            <img src={item.images[0]} className="h-60 w-auto rounded-xl"></img>
                            <div>
                                <h1 className="font-bold text-2xl group-hover:text-3xl transition-all duration-150">{item.name}</h1>
                                <h1>{item.description}</h1>
                                <h1 className="italic underline group-hover:font-bold transition-all duration-150">{item.timePeriod}</h1>
                            </div>
                        </div>
                    </div>
                ))}
                {ifilteredData.map((item) => (
                    <div key={item.id} className="relative group flex items-center justify-center">
                        <div className="group-hover:from-red-400 group-hover:via-blue-500 group-hover:to-red-400 absolute -inset-0.5 rounded-lg bg-gradient-to-r from-red-600 via-blue-700 to-red-600 opacity-75 blur"></div>
                        <div key={item.id} onClick={() => router.push(`mongolia/instruments/${item.id}`)} className={`w-full cursor-pointer group-hover:bg-slate-800 bg-slate-900 drop-shadow-xl text-[#EAEAEA] h-full rounded-xl p-4 flex items-center ${grid ? "flex-col" : "flex-row space-x-4"}`}>
                            <img src={item.images[0]} className="h-60 w-auto rounded-xl"></img>
                            <div>
                                <h1 className="font-bold text-2xl group-hover:text-3xl transition-all duration-150">{item.name}</h1>
                                <h1>{item.description}</h1>
                                <h1 className="italic underline group-hover:font-bold transition-all duration-150">{item.timePeriod}</h1>
                            </div>
                        </div>
                    </div>
                ))}
                {htfilteredData.map((item) => (
                    <div key={item.id} className="relative group flex items-center justify-center">
                        <div className="group-hover:from-red-400 group-hover:via-blue-500 group-hover:to-red-400 absolute -inset-0.5 rounded-lg bg-gradient-to-r from-red-600 via-blue-700 to-red-600 opacity-75 blur"></div>
                        <div key={item.id} onClick={() => router.push(`mongolia/historicaltools/${item.id}`)} className={`w-full cursor-pointer group-hover:bg-slate-800 bg-slate-900 drop-shadow-xl text-[#EAEAEA] h-full rounded-xl p-4 flex items-center ${grid ? "flex-col" : "flex-row space-x-4"}`}>
                            <img src={item.images[0]} className="h-60 w-auto rounded-xl"></img>
                            <div>
                                <h1 className="font-bold text-2xl group-hover:text-3xl transition-all duration-150">{item.name}</h1>
                                <h1>{item.description}</h1>
                                <h1 className="italic underline group-hover:font-bold transition-all duration-150">{item.timePeriod}</h1>
                            </div>
                        </div>
                    </div>
                ))}
                {egfilteredData.map((item) => (
                    <div key={item.id} className="relative group flex items-center justify-center">
                        <div className="group-hover:from-red-400 group-hover:via-blue-500 group-hover:to-red-400 absolute -inset-0.5 rounded-lg bg-gradient-to-r from-red-600 via-blue-700 to-red-600 opacity-75 blur"></div>
                        <div key={item.id} onClick={() => router.push(`mongolia/ethnicgroups/${item.id}`)} className={`w-full cursor-pointer group-hover:bg-slate-800 bg-slate-900 drop-shadow-xl text-[#EAEAEA] h-full rounded-xl p-4 flex ${grid ? "flex-col" : "flex-row space-x-4"}`}>
                            <img src={item.images[0]} className="h-60 w-auto rounded-xl"></img>
                            <div>
                                <h1 className="font-bold text-2xl group-hover:text-3xl transition-all duration-150">{item.name}</h1>
                                <h1>{item.linguistic}</h1>
                                <h1 className="italic underline group-hover:font-bold transition-all duration-150">{item.population}</h1>
                            </div>
                        </div>
                    </div>
                ))}
                {hffilteredData.map((item) => (
                    <div key={item.id} className="relative group flex items-center justify-center">
                        <div className="group-hover:from-red-400 group-hover:via-blue-500 group-hover:to-red-400 absolute -inset-0.5 rounded-lg bg-gradient-to-r from-red-600 via-blue-700 to-red-600 opacity-75 blur"></div>
                        <div key={item.id} onClick={() => router.push(`mongolia/historicalfigures/${item.id}`)} className={`w-full cursor-pointer group-hover:bg-slate-800 bg-slate-900 drop-shadow-xl text-[#EAEAEA] h-full rounded-xl p-4 flex items-center ${grid ? "flex-col" : "flex-row space-x-4"}`}>
                            <img src={item.images[0]} className="h-60 w-auto rounded-xl"></img>
                            <div>
                                <h1 className="font-bold text-2xl group-hover:text-3xl transition-all text-center duration-150">{item.name}</h1>
                                <h1>{item.description}</h1>
                                <h1 className="italic underline group-hover:font-bold transition-all duration-150">{item.timePeriod}</h1>
                            </div>
                        </div>
                    </div>
                ))}
                {tafilteredData.map((item) => (
                    <div key={item.id} className="relative group flex items-center justify-center">
                        <div className="group-hover:from-red-400 group-hover:via-blue-500 group-hover:to-red-400 absolute -inset-0.5 rounded-lg bg-gradient-to-r from-red-600 via-blue-700 to-red-600 opacity-75 blur"></div>
                        <div key={item.id} onClick={() => router.push(`mongolia/touristattractions/${item.id}`)} className={`w-full cursor-pointer group-hover:bg-slate-800 bg-slate-900 drop-shadow-xl text-[#EAEAEA] h-full rounded-xl p-4 flex items-center ${grid ? "flex-col" : "flex-row space-x-4"}`}>
                            <img src={item.images[0]} className="h-60 w-auto rounded-xl"></img>
                            <div>
                                <h1 className="font-bold text-2xl group-hover:text-3xl transition-all duration-150">{item.name}</h1>
                                <h1>{item.description}</h1>
                                <h1 className="italic underline group-hover:font-bold transition-all duration-150">{item.timePeriod}</h1>
                            </div>
                        </div>
                    </div>
                ))}
                {pfilteredData.map((item) => (
                    <div key={item.id} className="relative group flex items-center justify-center">
                        <div className="group-hover:from-red-400 group-hover:via-blue-500 group-hover:to-red-400 absolute -inset-0.5 rounded-lg bg-gradient-to-r from-red-600 via-blue-700 to-red-600 opacity-75 blur"></div>
                        <div key={item.id} onClick={() => router.push(`mongolia/provinces/${item.id}`)} className={`w-full cursor-pointer group-hover:bg-slate-800 bg-slate-900 drop-shadow-xl text-[#EAEAEA] h-full rounded-xl p-4 flex items-center ${grid ? "flex-col" : "flex-row space-x-4"}`}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYQe7sk8paP8GwcE7D6iEMSmj82HEVN8lZg&s" className="w-auto h-60 rounded-xl"></img>
                            <div>
                                <h1 className="font-bold text-2xl group-hover:text-4xl transition-all duration-50">{item.name}</h1>
                                <h1>{item.description}</h1>
                                <h1 className="italic underline group-hover:font-bold transition-all duration-50">{item.timePeriod}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <p id="noSearch" className={`text-red-600 font-black mt-48 text-3xl ${Found ? "hidden" : ""}`}>No Item Found</p>
            <div className="w-screen h-screen bg-[#171717] absolute -z-10"></div>
            <button onClick={() => setGrid(!grid)} className="cursor-pointer absolute top-0 right-24 bg-red-600 hover:bg-red-800 text-white rounded-lg px-4 py-2 hidden sm:block">{grid ? "List-рүү шилжих" : "Grid-рүү шилжих"}</button>
        </div>
    );
}