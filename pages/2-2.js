import { useState, useEffect} from "react";

export default function Home() {
    const[color, setColor] = useState("red");

    useEffect(() => {
        console.log(color);
    }, [color])

    return (
        <div id="bg" className={`bg-${color}-500 w-full h-screen flex items-center justify-evenly`}>
            <div onClick={() => setColor("red")} className="w-20 h-20 bg-red-500 border border-white text-white flex items-center justify-center cursor-pointer">Red</div>
            <div onClick={() => setColor("blue")} className="w-20 h-20 bg-blue-500 border border-white text-white flex items-center justify-center cursor-pointer">Blue</div>
            <div onClick={() => setColor("green")} className="w-20 h-20 bg-green-500 border border-white text-white flex items-center justify-center cursor-pointer">Green</div>
        </div>
    );
}