// React
import { useContext } from "react"

// Context
import { PokemonsContext } from "../context/PokemonsContext"


export function useCapture ({pokemon}) {
    const { pokemons, captureHandler } = useContext(PokemonsContext)

    const handleCapture = () => {
        const pokemonIndex = pokemons.findIndex(pokemonMatch => pokemon.id === pokemonMatch.id)
        if(pokemonIndex != -1) pokemons[pokemonIndex].captured = !pokemons[pokemonIndex].captured
        captureHandler()
    }

    return{ handleCapture }
}