// React
import { useContext } from "react"

// Context
import { PokemonsContext } from "../../context/PokemonsContext"

// Styles
import styles from './style.module.css'
import Pokemon from "../pokemon/Pokemon"

const WildPokemons = () => {
    const { wildPokemons } = useContext(PokemonsContext)

    return (
        <div className={styles.pokemonsContainerWrap}>
            {wildPokemons.length > 0 ?
            <div className={styles.pokemonsContainer}>
                {wildPokemons.map(pokemon => 
                    <Pokemon key={pokemon.id} pokemon={pokemon}/>
                )}
            </div>
            :
            <h2>You captured &apos;em all</h2>}
        </div>
    )
}


export default WildPokemons
