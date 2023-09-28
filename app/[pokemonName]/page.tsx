import { PokemonImage } from "../components/pokemon-image";
import { getPokemon } from "../lib/pokemonAPI";

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;

  const pokemonObject = await getPokemon(pokemonName);

  console.log(pokemonObject);

  return (
    <>
      <div className="flex justify-center items-center mt-2">
        <PokemonImage
          image={pokemonObject.sprites.other["official-artwork"].front_default}
          name={pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
          weight={pokemonObject.weight}
        />
      </div>
    </>
  );
}
