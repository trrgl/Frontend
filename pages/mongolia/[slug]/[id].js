import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Fetch() {
    const router = useRouter();

    const [data, setData] = useState([]);
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

    if (loading) {
        return <div className="flex w-full justify-center"><p className="text-red-600 font-black mt-48 text-3xl">Loading...</p></div>
    }

    return (
        <div>
            <div className="absolute w-full flex justify-center top-8">
                <div onClick={() => router.back()} className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-red-600 hover:border-red-400 cursor-pointer transition-all duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </div>
            </div>
            {(eval(router.query.slug) || []).map((item) => (
                router.query.id == item.id && (
                    <div key={item.id} className="w-full h-screen bg-[#171717] flex justify-center items-center -z-20">
                        <div className="h-1/2 flex flex-col md:flex-row w-full items-center justify-center p-36">
                            {router.query.slug != "provinces" ?  <img className="w-96 h-64 md:w-auto md:h-96 border-4 mb-12 md:mr-24 rounded-3xl border-red-600" src={item.images[0]}></img> : <img className="w-96 mr-24" src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"></img>}
                            <div className="space-y-4">
                                <h1 className="text-4xl md:text-7xl font-black text-[#EAEAEA]">{item.name}</h1>
                                <h1>{item.description}</h1>
                            </div>
                        </div>
                        <div className="absolute bottom-8 text-2xl underline hidden md:block">{item.timePeriod}</div>
                        <img className="w-36 absolute left-4 bottom-4" src="/bulan1.png"></img>
                        <img className="cursor-pointer w-36 absolute left-4 top-4 rotate-90" src="/bulan1.png"></img>
                        <img className="w-36 absolute right-4 top-4 rotate-180" src="/bulan1.png"></img>
                        <img className="w-36 absolute right-4 bottom-4 -rotate-90" src="/bulan1.png"></img>
                    </div>
                )
            ))}
        </div>
    );
}