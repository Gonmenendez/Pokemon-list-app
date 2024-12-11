// React
import { useCallback, useContext } from "react"

// Context
import { PokemonFindContext } from "../context/PokemonFindContext"
import { PokemonsContext } from "../context/PokemonsContext"

// Services
import { pokemonFind } from "../services/pokemonFind"


export function usePokemonFind () {
    const { setPokemonFound } = useContext(PokemonFindContext)
    const { pokemons, setPokemons } = useContext(PokemonsContext)

    const findPokemon = useCallback(async ({search}) => {
        if(search === ''){
            setPokemonFound('')
            return
        }
        const alreadyIn = pokemons.find(pokemon => pokemon.name === search)
        if(alreadyIn){
            setPokemonFound(alreadyIn)
            return
        }
        try{
            const newPokemon = await pokemonFind({ search })
            setPokemonFound(newPokemon)
            setPokemons(prevState => [...prevState, newPokemon])
        } catch(e){
            console.log(e)
            setPokemonFound(undefined)
        }
    }, [ pokemons, setPokemons, setPokemonFound ]) 

    return { findPokemon }
}
