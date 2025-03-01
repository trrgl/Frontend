import { useState, useEffect } from "react";

export default function Fetch() {
    const [search, setSearch] = useState('');
    const [grid, setGrid] = useState(true);
    const [data, setData] = useState({});

    const [clothes, setClothes] = useState([]);
    const [instruments, setInstruments] = useState([]);
    const [historicaltools, setTools] = useState([]);
    const [ethnicgroups, setGroups] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [historicalfigures, setFigures] = useState([]);
    const [touristattractions, setAttractions] = useState([]);

    const fetchData = async () => {
        try {
            const data = await fetch(`http://139.162.5.230:10299/api/setMsg`);
            console.log(data);
            const jsonData = await data.json();
            setData(jsonData);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
        console.log(data);
    },[])

    return (
        <div className="w-full h-full flex flex-col p-8 items-center bg-[#E0E7FB] space-y-4">
            <h1 className="text-black font-bold text-2xl">Хувцасны Жагсаалт</h1>
            <input value={search} onChange={(Search) => setSearch(Search.target.value)} placeholder="Хэрэглэгчийн нэр оруулна уу..." className="w-full h-12 drop-shadow-xl text-black rounded-xl p-2"></input>
            <div className={grid ? "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 z-10" : "w-full space-y-4 z-10"}>
            </div>
            <div className="w-screen h-screen bg-[#E0E7FB] absolute -z-10"></div>
            <button onClick={() => setGrid(!grid)} className="cursor-pointer absolute top-4 right-8 bg-blue-500 hover:bg-blue-700 text-white rounded-lg px-4 py-2">{grid ? "List-рүү шилжих" : "Grid-рүү шилжих"}</button>
        </div>
    );

    
}