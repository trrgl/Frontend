import { useState } from "react";

export default function Search() {
    const [search, setSearch] = useState('');
    const [grid, setGrid] = useState(true);

    const data = [
        {
            "id" : 1,
            "name" : "Amartuvshin",
            "description" : "Discord Moderator."
        },
        {
            "id" : 2,
            "name" : "Anar",
            "description" : "Bumbug."
        },
        {
            "id" : 3,
            "name" : "Anar-Erdene",
            "description" : "whoami."
        },
        {
            "id" : 4,
            "name" : "Batmend",
            "description" : "Sags."
        },
        {
            "id" : 5,
            "name" : "Temuulen",
            "description" : "Dumb."
        },
        {
            "id" : 6,
            "name" : "B.Temuujin",
            "description" : "Pubg."
        },
        {
            "id" : 7,
            "name" : "SH.Temuujin",
            "description" : "Russian."
        },
        {
            "id" : 8,
            "name" : "E.Temuujin",
            "description" : "GENGHIS KHAAN!!!"
        },
        {
            "id" : 9,
            "name" : "Tergel",
            "description" : "Top Student :)."
        },
        {
            "id" : 10,
            "name" : "Khanbileg",
            "description" : "VALORANT DIAMOND 2."
        },
        {
            "id" : 11,
            "name" : "Tselmeg",
            "description" : "Dance."
        },
        {
            "id" : 12,
            "name" : "Tugs-Asralt",
            "description" : "E-Boy."
        },
        {
            "id" : 13,
            "name" : "Shine-Erdene",
            "description" : "Sigma Alone Alpha Chill Guy."
        },
        {
            "id" : 14,
            "name" : "Ochir-Erdene",
            "description" : "Hybrid."
        },
        {
            "id" : 15,
            "name" : "Enkhtugs",
            "description" : "Brown."
        },
        {
            "id" : 16,
            "name" : "Enkhjav",
            "description" : "Java."
        },
        {
            "id" : 17,
            "name" : "Emily",
            "description" : "American."
        },
        {
            "id" : 18,
            "name" : "Dalaisuren",
            "description" : "NPC."
        },
        {
            "id" : 19,
            "name" : "Choi-Odser",
            "description" : "Ghost."
        },
        {
            "id" : 20,
            "name" : "Enkh-Uchral",
            "description" : "Hud Coach."
        }
    ];

    const filteredData = data.filter((classmates) =>
        classmates.name.toLowerCase().includes(search.toLowerCase())
    );
    
    return (
        <div className="w-full h-full flex flex-col p-8 items-center bg-[#E0E7FB] space-y-4">
            <h1 className="text-black font-bold text-2xl">Хэрэглэгчдийн Жагсаалт</h1>
            <input value={search} onChange={(Search) => setSearch(Search.target.value)} placeholder="Хэрэглэгчийн нэр оруулна уу..." className="w-full h-12 drop-shadow-xl text-black rounded-xl p-2"></input>
            <div className={grid == true ? "w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 z-10" : "w-full space-y-4 z-10"}>
                    {filteredData.map((classmates) => (
                        <div key={classmates.id} className="w-full bg-white drop-shadow-xl text-black h-full rounded-xl p-4">
                            <h1 className="font-bold text-2xl">{classmates.name}</h1>
                        <h1>{classmates.description}</h1>
                    </div>
                ))}
            </div>
            <div className="w-screen h-screen bg-[#E0E7FB] absolute -z-10"></div>
            <div className="text-black text-xl absolute top-36">Уучлаарай, Тийм хэрэглэгч олдсонгүй.</div>
        </div>
    );
}
