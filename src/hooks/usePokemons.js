// React
import { useContext } from "react";

// Services 
import { pokemons } from "../services/pokemons";

// Context
import { PokemonsContext } from "../context/PokemonsContext";

export function usePokemons () {
    const { pokemonsBasics, setPokemonsBasics } = useContext(PokemonsContext)

    const getPokemons = async () => {
        if (pokemonsBasics) return
        try{
            const pokeResult = await pokemons()
            setPokemonsBasics(pokeResult)
        } catch (e) {
            console.log(e)
        }
    }

    return { getPokemons }
}