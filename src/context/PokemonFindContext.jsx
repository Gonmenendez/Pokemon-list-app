// React
import { createContext, useState } from "react";

// Prop-types
import PropTypes from "prop-types";

// Context creator
export const PokemonFindContext = createContext()

// Context Provider
export function PokemonFindProvider ({ children }) {
    const [ search, setSearch ] = useState('')
    const [ pokemonFound, setPokemonFound ] = useState('')

    return(
        <PokemonFindContext.Provider value={{ search, setSearch, pokemonFound, setPokemonFound }}>
            {children}
        </PokemonFindContext.Provider>
    )
}

PokemonFindProvider.propTypes = {
    children : PropTypes.node.isRequired
}