// React
import { useContext } from 'react';

// Context
import { PokemonsContext } from '../context/PokemonsContext';

// Services
import { pokemon } from '../services/pokemon';

export const usePokemon = () => {
    const { pokemonsBasics, setPokemons } = useContext(PokemonsContext);

    const getPokemon = async () => {
        if (!pokemonsBasics) return
        try {
            const newPokemons = await Promise.all(
                pokemonsBasics.map(async (pokemonBasic) => {
                    const newPokemon = await pokemon({ url: pokemonBasic.url });
                    return newPokemon;
                })
            );
            setPokemons(newPokemons);

        } catch (e) {
            console.log(e);
        }
    };

    return { getPokemon };
}