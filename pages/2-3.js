import { useState, useEffect } from "react";

export default function Fetch() {
    const [search, setSearch] = useState('');
    const [grid, setGrid] = useState(true);

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
        fetchData("clothes", setClothes);
        fetchData("instruments", setInstruments);
        fetchData("historicalTools", setTools);
        fetchData("ethnicGroups", setGroups);
        fetchData("provinces", setProvinces);
        fetchData("historicalFigures", setFigures);
        fetchData("touristAttractions", setAttractions);
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

    return (
        <div className="w-full h-full flex flex-col p-8 items-center bg-[#E0E7FB] space-y-4">
            <h1 className="text-black font-bold text-2xl">Хувцасны Жагсаалт</h1>
            <input value={search} onChange={(Search) => setSearch(Search.target.value)} placeholder="Хэрэглэгчийн нэр оруулна уу..." className="w-full h-12 drop-shadow-xl text-black rounded-xl p-2"></input>
            <div className={grid ? "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 z-10" : "w-full space-y-4 z-10"}>
                {cfilteredData.map((item) => (
                    <div key={item.id} className="w-full bg-white drop-shadow-xl text-black h-full rounded-xl p-4">
                        <img src={item.images[0]} className="h-60 w-auto rounded-xl"></img>
                        <h1 className="font-bold text-2xl">{item.name}</h1>
                        <h1>{item.description}</h1>
                        <h1 className="italic underline">{item.timePeriod}</h1>
                    </div>
                ))}
                {ifilteredData.map((item) => (
                    <div key={item.id} className="w-full bg-white drop-shadow-xl text-black h-full rounded-xl p-4">
                        <img src={item.images[0]} className="h-60 w-auto rounded-xl"></img>
                        <h1 className="font-bold text-2xl">{item.name}</h1>
                        <h1>{item.description}</h1>
                        <h1 className="italic underline">{item.timePeriod}</h1>
                    </div>
                ))}
                {htfilteredData.map((item) => (
                    <div key={item.id} className="w-full bg-white drop-shadow-xl text-black h-full rounded-xl p-4">
                        <img src={item.images[0]} className="h-60 w-auto rounded-xl"></img>
                        <h1 className="font-bold text-2xl">{item.name}</h1>
                        <h1>{item.description}</h1>
                        <h1 className="italic underline">{item.timePeriod}</h1>
                    </div>
                ))}
                {egfilteredData.map((item) => (
                    <div key={item.id} className="w-full bg-white drop-shadow-xl text-black h-full rounded-xl p-4">
                        <img src={item.images[0]} className="h-60 w-auto rounded-xl"></img>
                        <h1 className="font-bold text-2xl">{item.name}</h1>
                        <h1>{item.description}</h1>
                        <h1 className="italic underline">{item.timePeriod}</h1>
                    </div>
                ))}
                {hffilteredData.map((item) => (
                    <div key={item.id} className="w-full bg-white drop-shadow-xl text-black h-full rounded-xl p-4">
                        <img src={item.images[0]} className="h-60 w-auto rounded-xl"></img>
                        <h1 className="font-bold text-2xl">{item.name}</h1>
                        <h1>{item.description}</h1>
                        <h1 className="italic underline">{item.timePeriod}</h1>
                    </div>
                ))}
                {tafilteredData.map((item) => (
                    <div key={item.id} className="w-full bg-white drop-shadow-xl text-black h-full rounded-xl p-4">
                        <img src={item.images[0]} className="h-60 w-auto rounded-xl"></img>
                        <h1 className="font-bold text-2xl">{item.name}</h1>
                        <h1>{item.description}</h1>
                        <h1 className="italic underline">{item.timePeriod}</h1>
                    </div>
                ))}
                {pfilteredData.map((item) => (
                    <div key={item.id} className="w-full bg-white drop-shadow-xl text-black h-full rounded-xl p-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYQe7sk8paP8GwcE7D6iEMSmj82HEVN8lZg&s" className="w-auto h-60 rounded-xl"></img>
                        <h1 className="font-bold text-2xl">{item.name}</h1>
                        <h1>{item.description}</h1>
                        <h1 className="italic underline">{item.timePeriod}</h1>
                    </div>
                ))}
            </div>
            <div className="w-screen h-screen bg-[#E0E7FB] absolute -z-10"></div>
            <button onClick={() => setGrid(!grid)} className="cursor-pointer absolute top-4 right-8 bg-blue-500 hover:bg-blue-700 text-white rounded-lg px-4 py-2">{grid ? "List-рүү шилжих" : "Grid-рүү шилжих"}</button>
        </div>
    );
}