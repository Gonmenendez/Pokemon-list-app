// React
import { useContext, useEffect } from "react"

// Context
import { PokemonsContext } from "../../context/PokemonsContext"

// Components
import Pokemon from "../pokemon/Pokemon"

// Styles
import styles from './style.module.css'

const CapturedPokemons = () => {
    const { capturedPokemons } = useContext(PokemonsContext)

    useEffect(()=>{
        console.log(capturedPokemons)
    },[capturedPokemons])

    return (
        <div className={styles.pokemonsContainerWrap}>
            {capturedPokemons.length > 0 ?
            <div className={styles.pokemonsContainer}>
                {capturedPokemons.map(pokemon =>
                    <Pokemon key={pokemon.id} pokemon={pokemon}/>
                )}
            </div>
            :
            <h2>Gotta catch &apos;em all</h2>}
        </div>
    )
}

export default CapturedPokemons
