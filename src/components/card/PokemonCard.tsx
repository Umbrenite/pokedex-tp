export default function PokemonCard(props) {

  if (!props.pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="shadow-xl py-5 px-5 text-center w-56 rounded-lg">
      <h2 className="text-2xl text-gray-500 text-right">#{props.pokemonData.id}</h2>
      <div className="flex flex-col items-center">
        <img src={props.pokemonData.image} width="150px" alt={props.pokemonData.name} />
        <h2 className="text-2xl">{props.pokemonData.name}</h2>
        <ul className="flex flex-row justify-center">
          {props.pokemonData.types.map((type) => (
            <li key={type.id}>
              <img src={type.image} alt={type.name} style={{ width: '50px', marginRight: '10px' }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
