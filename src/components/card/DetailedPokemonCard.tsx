import Statistics from "@/components/stats/Statistics";

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
      </div>
    );
  }
  