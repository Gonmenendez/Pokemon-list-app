// React
import { useContext, useEffect } from 'react'

// React-router-dom & routes
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../utils/ResourceRoutes'

// Assets
import pokemonLogo from '../../assets/pokemon.png'

// Hooks
import { usePokemons } from '../../hooks/usePokemons'
import { usePokemon } from '../../hooks/usePokemon'

// Context
import { PokemonsContext } from '../../context/PokemonsContext'

// Styles
import styles from './style.module.css'

const Header = () => {
    const { pokemonsBasics } = useContext(PokemonsContext)
    const { getPokemons } = usePokemons()
    const { getPokemon } = usePokemon()
    
    useEffect(() => {
        getPokemons()
        getPokemon()
    }, [pokemonsBasics])

    return (
        <header className={styles.pokeHeader}>
                <img src={pokemonLogo} alt="Pokémon" />
                <nav>
                    <ul className={styles.menu}>
                        <li><NavLink className={({ isActive }) => isActive ? styles.activeLink : ''} to={ROUTES.home}>All pokemons</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.activeLink : ''} to={ROUTES.captured}>My pokemons</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.activeLink : ''} to={ROUTES.wild}>Wild pokemons</NavLink></li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header
