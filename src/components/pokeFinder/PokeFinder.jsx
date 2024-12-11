// React
import { useCallback, useContext, useState } from "react"

// Assets
import pokeball from '../../assets/pokeball.png'
import capturingPokeball from '../../assets/openPokeball.png'
import setFreePokeball from '../../assets/closePokeball.png'

// Context
import { PokemonFindContext } from "../../context/PokemonFindContext"

// Hook
import { usePokemonFind } from "../../hooks/usePokemonFind"

// Debounce
import debounce from 'just-debounce-it'

// Styles
import styles from './style.module.css'
import { useCapture } from "../../hooks/useCapture"


const PokeFinder = () => {
    const { findPokemon } = usePokemonFind()
    const { search, setSearch, pokemonFound } = useContext(PokemonFindContext)
    const { handleCapture } = useCapture({ pokemon: pokemonFound })
    const [ expand, setExpand ] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        findPokemon({search})
        if(search != '')setExpand(true)
    }

    const debouncedFindPokemon = useCallback(
        debounce(search => {
            findPokemon({ search })
            if(search === ''){
                setExpand(false)
                return
            }
            setExpand(true)
        }, 400)
    , [findPokemon])

    const handleChange = (e) => {
        const inputValue = e.target.value.trim()
        if(inputValue.startsWith(' ')) return
        setExpand(false)
        setSearch(inputValue.toLowerCase())
        debouncedFindPokemon(inputValue.toLowerCase())
    }

    return (
        <form className={styles.pokemonFinder} onSubmit={handleSubmit}>
            <h2>POKE-FINDER</h2>
            <input type="text" value={search} placeholder="Baulbasaur, Charmander, Squirtle..." onChange={handleChange} />
            <div  className={`${styles.found} ${expand ? styles.expand : styles.collapse}`} >
                {pokemonFound ?
                <div className={styles.foundPokemon} style={{display: !pokemonFound && 'none'}} onClick={handleCapture}>
                    <div className={styles.imageContainer}>
                        <p>N° {pokemonFound?.id}</p>
                        <img src={pokemonFound?.img} alt="" />
                    </div>
                    <div className={styles.pokemonDetail}>
                        <h3>{pokemonFound?.name}</h3>
                        <p>Status: <span style={{color: pokemonFound.captured ? 'red': '#6eecbc'}}>{pokemonFound.captured ? 'captured' : 'Free'}</span></p>
                        <img className={styles.finderCapturer} src={pokemonFound.captured ? setFreePokeball : capturingPokeball} alt={pokemonFound.captured ? 'Set free' : 'Capture'}/>
                        <p>Types:</p>
                        <div className={styles.typesContainer}>
                            {pokemonFound?.types?.map(type => 
                                <div className={styles[type.type.name]} key={type.slot}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</div>
                            )}
                        </div>
                    </div>
                </div>
                :
                <div className={styles.notFoundContainer}>
                    <h3 className={styles.notFound} style={{display: pokemonFound && 'none'}}>Pokemon not found</h3>
                </div>
                }
            </div>
            <button><img src={pokeball} alt="Pokeball button" /></button>
        </form>
    ) 
}

export default PokeFinder
