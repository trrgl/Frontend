import { useState } from "react";

export default function News() {
    const [grid, setGrid] = useState(true);

    const data = [
        {
            id : 1,
            title : "Text 1",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id : 2,
            title : "Text 2",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id : 3,
            title : "Text 3",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id : 4,
            title : "Text 4",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        
    ];

    return (
        <div className="w-full h-screen flex flex-col align items-center bg-white">
            <div className="w-1/2 h-full p-8">
                <div className="w-full h-16 flex items-center justify-between">
                    <h1 className="text-3xl text-black font-bold">Нийтлэлүүд</h1>
                    <button onClick={() => setGrid(!grid)} className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-800">{grid ? "Жагсаалт - руу шилжих" : "Grid - руу шилжих"}</button>
                </div>
                <div className={grid == true ? "grid grid-cols-2 gap-4" : "space-y-4"}>
                    {data.map((articles) => (
                        <div key={articles.id} className="border-2 border-black rounded-xl p-4 flex flex-col justify-evenly text-black text-xl">
                            <h1 className="font-bold text-2xl">{articles.title}</h1>
                            <h1>{articles.description}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
