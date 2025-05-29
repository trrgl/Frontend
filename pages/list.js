import axios from "axios";
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";

export default function Post() {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await axios.get("http://localhost:8080/users");
                setData(fetchedData.data);
            } catch(error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    const filteredData = data.filter((users) =>
        users.first_name.toLowerCase().includes(search.toLowerCase())
    );

    const deleteData = async (userId) => {
        try {
            await axios.delete(`http://localhost:8080/users/${userId}`);
            setData(e => e.filter(user => user.id !== userId));
        } catch (error) {
            console.error("Failed to delete user", error);
        }
    };

    return (
        <div className="w-full h-full flex flex-col p-8 items-center bg-[#E0E7FB] space-y-4">
            <button onClick={() => router.push("./post")} className="rounded-xl bg-green-500 px-4 py-2 text-white absolute right-8 top-8">Add users</button>
            <h1 className="text-black font-bold text-2xl">Хэрэглэгчдийн Жагсаалт</h1>
            <input value={search} onChange={(Search) => setSearch(Search.target.value)} placeholder="Хэрэглэгчийн нэр оруулна уу..." className="w-full h-12 drop-shadow-xl text-black rounded-xl p-2"></input>
            <div className="w-full space-y-4 z-10">
                {filteredData.map((users) => (
                    <div key={users.id} className="w-full bg-white drop-shadow-xl text-black h-full rounded-xl p-4 relative">
                        <h1 className="font-bold text-2xl">{users.first_name} <span className="font-thin">{users.last_name}</span></h1>
                        <h1>{users.email}</h1>
                        <h1>{users.age}</h1>
                        <h1 onClick={() => deleteData(users.id)} className="absolute right-6 text-red-500 cursor-pointer hover:underline bottom-4">Delete</h1>
                    </div>
                ))}
            </div>
            <div className="w-screen h-screen bg-[#E0E7FB] absolute -z-10"></div>
            <div className="text-black text-xl absolute top-36">Уучлаарай, Тийм хэрэглэгч олдсонгүй.</div>
        </div>
    );
}