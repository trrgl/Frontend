import React, { useState } from "react";

export default function onChange() {
  const [search, setSearch] = useState("");
  
  console.log(search);

  return (
    <div>
        <input type="search" onChange={(e) => setSearch(e.target.value)} />
        <p>search: {search}</p>
    </div>
  );
}