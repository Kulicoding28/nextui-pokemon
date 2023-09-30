import PokemonImage from "@/app/components/pokemon-image";
import PokemonStatus from "@/app/components/pokemon-status";

import { getPokemon } from "@/app/lib/pokemonAPI";

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;

  const pokemonObject = await getPokemon(pokemonName);

  return (
    <>
      <div className="flex-col justify-center items-center mt-2">
        <PokemonImage
          image={pokemonObject.sprites.other["official-artwork"].front_default}
          name={pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
          weight={pokemonObject.weight}
        />

        <div>
          {pokemonObject.stats.map((statObject: any) => {
            const statName = statObject.stat.name;
            const statValue = statObject.base_stat;

            return (
              <div className="gap-1">
                <PokemonStatus value={statValue} label={statName} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
