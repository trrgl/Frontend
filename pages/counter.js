import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 10) return;

    const interval = setInterval(() => {setCount(e => e + 1)}, 1000);
    return () => clearInterval(interval);
  }, [count]);

  return (
        <div className="w-full h-screen flex items-center justify-center">
            Тоолуур : {count}
        </div>
  );
}