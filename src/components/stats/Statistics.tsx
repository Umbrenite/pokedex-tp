"use client";
import React from "react";

function Statistics(props) {
    if (!props.pokemonData) {
        return <div>Loading...</div>;
    }

    const stats = props.pokemonData.stats;

    return (
        <div>
            <h3>Statistiques</h3>
            <ul className="flex flex-col">
                {Object.entries(stats).map(([statName, statValue]) => (
                    <li className="flex flex-row justify-between" key={statName}>
                        <strong>{statName}:</strong> {statValue}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Statistics;
