import React, { useState, useEffect } from "react";
import Logo from "../Logo";

export default function PokedexNavbar() {

    const [types, setTypes] = useState([]);
    
    useEffect(() => {
      fetch("https://nestjs-pokedex-api.vercel.app/types", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setTypes(data);
          console.log(data);
        })
        .catch((error) => console.log(error));
    }, []);

    return (
        <nav className="p-4 shadow-md text-black">
        <div className="flex items-start mx-auto flex flex-col">
            <div className="flex items-center space-x-4 py-5">
            <Logo />
            <h1 className="text-3xl font-bold text-white">Pokédex</h1>
            </div>

            <form className="flex items-center space-x-4">
            <input
                type="text"
                placeholder="Search"
                className="rounded-full px-4 py-2 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <select
                className="rounded-full px-4 py-2 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                <option value="">Type</option>
                {types.map((type) => (
                    <option key={type.name} value={type.name}>
                        {type.name}
                    </option>
                ))}
            </select>

            <select
                name="Limit"
                className="rounded-full px-4 py-2 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                <option value="">Limit</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
            </form>
        </div>
        </nav>
    );
}
