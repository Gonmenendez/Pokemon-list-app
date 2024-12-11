// React
import { createContext, useEffect, useState } from "react"

// Prop-types
import PropTypes from "prop-types"

// Context creator
export const PokemonsContext = createContext()

// Context provider
export function PokemonsProvider ({ children }) {
    const [ pokemonsBasics, setPokemonsBasics ] = useState()
    const [ pokemons, setPokemons ] = useState([])
    const [ capturedPokemons, setCapturedPokemons ] = useState([])
    const [ wildPokemons, setWildPokemons ] = useState([])

    const captureHandler = () => {
        const captured = pokemons.filter(pokemon => pokemon.captured === true)
        setCapturedPokemons(captured)
        const wild = pokemons.filter(pokemon => pokemon.captured === false)
        setWildPokemons(wild)
    }
    
    useEffect(() => {
        captureHandler()
    }, [ pokemons ])
    
    return (
        <PokemonsContext.Provider value={{ pokemonsBasics, setPokemonsBasics, pokemons, setPokemons, capturedPokemons, wildPokemons, captureHandler }}>
            {children}
        </PokemonsContext.Provider>
    )
}

PokemonsProvider.propTypes = {
    children: PropTypes.node.isRequired,
}