import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Fetch() {
    const router = useRouter();

    const [data, setData] = useState([]);

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

    return (
        <div>
            {(eval(router.query.slug) || []).map((item) => (
                router.query.id == item.id && (
                    <div className="w-full h-screen bg-[#171717] flex-col md:flex-row flex items-center justify-center p-36 -z-20">
                        {router.query.slug != "provinces" ?  <img className="w-96 border-4 mb-12 md:mr-24 rounded-3xl border-red-600" src={item.images[0]}></img> : <img className="w-96 mr-24" src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"></img>}
                        <div className="space-y-4">
                            <h1 className="text-7xl font-black text-[#EAEAEA]">{item.name}</h1>
                            <h1>{item.description}</h1>
                        </div>
                        <div className="absolute bottom-8 text-2xl underline">{item.timePeriod}</div>
                        <img className="w-36 absolute left-4 bottom-4" src="/bulan1.png"></img>
                        <img onClick={() => router.back()} className="cursor-pointer w-36 absolute left-4 top-4 rotate-90" src="/bulan1.png"></img>
                        <img className="w-36 absolute right-4 top-4 rotate-180" src="/bulan1.png"></img>
                        <img className="w-36 absolute right-4 bottom-4 -rotate-90" src="/bulan1.png"></img>
                    </div>
                )
            ))}
        </div>
    );
}