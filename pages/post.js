import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Post() {
    const router = useRouter();

    const [lname, setLName] = useState("");
    const [fname, setFName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState();
    const [data, setData] = useState({});

    const handleSubmit = (fname, lname, email, age) => {
        axios.post("http://localhost:8080/createUsers", {
            first_name: fname,
            last_name: lname,
            email: email,
            age: age
        });
        router.push("/list");
    }

    return (
        <div className="w-full h-screen bg-white text-black">
            <div className="flex ml-2">
                <p className="text-3xl font-bold">Post page:</p>
            </div>
            <div className="flex">
                <label>Овог : </label>
                <input value={lname} onChange={e => {setLName(e.target.value)}} placeholder="Enter name" type="text" className="border border-black focus:outline-none"></input>
            </div>
            <div className="flex">
                <label>Нэр : </label>
                <input value={fname} onChange={e => {setFName(e.target.value)}} placeholder="Enter name" type="text" className="border border-black focus:outline-none"></input>
            </div>
            <div className="flex">
                <label>E-Mail : </label>
                <input value={email} onChange={e => {setEmail(e.target.value)}} placeholder="Enter email" type="text" className="border border-black focus:outline-none"></input>
            </div>
            <div className="flex">
                <label>Нас : </label>
                <input value={age} onChange={e => {setAge(e.target.value)}} placeholder="Enter age" type="number" className="border border-black focus:outline-none"></input>
            </div>
            <button onClick={() => handleSubmit(fname, lname, email, age)} className="rounded-xl bg-green-500 px-4 py-2 text-white">Хадгалах</button>
        </div>
    );
}