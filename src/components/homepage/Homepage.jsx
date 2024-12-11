// React
import { useContext } from 'react'

// Components
import Pokemon from '../pokemon/Pokemon'

// Context
import { PokemonsContext } from '../../context/PokemonsContext'

// Styles
import styles from './style.module.css'

const Homepage = () => {
    const { pokemons } = useContext(PokemonsContext)
    
    return (
        <>
            <div className={styles.pokemonsContainer}>
            {pokemons?.map(pokemon =>
                <Pokemon key={pokemon.id} pokemon={pokemon}/>
            )}
            </div>
        </>
    )
}

export default Homepage
