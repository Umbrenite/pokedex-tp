import Statistics from "@/components/stats/Statistics";
import Link from "next/link";

export default function DetailedPokemonCard(props) {
  
    if (!props.pokemonData) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="bg-white py-5 px-5 text-center w-full flex flex-row justify-evenly">
        <div className="shadow-xl rounded-lg">
            <h2 className="text-2xl">{props.pokemonData.name}</h2>
            <div className="flex flex-col items-center">
                <img src={props.pokemonData.image} width="400px" alt={props.pokemonData.name} />
            </div>
        </div>
        
        <Statistics pokemonData={props.pokemonData}></Statistics>
        
        <div>
          {props.pokemonData.evolutions && props.pokemonData.evolutions.length > 0 ? (
            <div>
              <h3 className="text-xl">Evolutions:</h3>
              <ul>
                {props.pokemonData.evolutions.map((evolution) => (
                  <li key={evolution.pokedexId}>{evolution.name}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Aucune évolution disponible.</p>
          )}
        </div>
      </div>
    );
}
