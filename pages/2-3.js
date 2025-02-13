import { useState, useEffect } from "react";

export default function Fetch() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("https://jsonplaceholder.typicode.com/posts");
            const jsonData = await data.json();
            setData(jsonData);
        }

        fetchData();
    },[])

    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="w-full h-full flex flex-col p-8 items-center bg-[#E0E7FB] space-y-4">
            <h1 className="text-black font-bold text-2xl">Хэрэглэгчдийн Жагсаалт</h1>
            <input value={search} onChange={(Search) => setSearch(Search.target.value)} placeholder="Хэрэглэгчийн нэр оруулна уу..." className="w-full h-12 drop-shadow-xl text-black rounded-xl p-2"></input>
            <div className="w-full space-y-4 z-10">
                {filteredData.map((item) => (
                    <div key={item.id} className="w-full bg-white drop-shadow-xl text-black h-full rounded-xl p-4">
                        <h1 className="font-bold text-2xl">{item.title}</h1>
                        <h1>{item.body}</h1>
                    </div>
                ))}
            </div>
            <div className="w-screen h-screen bg-[#E0E7FB] absolute -z-10"></div>
            <div className="text-black text-xl absolute top-36">Уучлаарай, Тийм хэрэглэгч олдсонгүй.</div>
        </div>
    );
}
