// React
import { useState } from "react"

// Prop-types
import PropTypes from "prop-types"

// Styles
import styles from './style.module.css'
import { useCapture } from "../../hooks/useCapture"

// Assets
import pokeball from '../../assets/pokeball.png'
import capturingPokeball from '../../assets/openPokeball.png'
import setFreePokeball from '../../assets/closePokeball.png'

const Pokemon = ({pokemon}) => {
    const { handleCapture } = useCapture({pokemon})
    const [ capturing, setCapturing ] = useState(false)
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    const handleMouseOver = () => {
        if (!isTouchDevice) setCapturing(true);
    };
    
    const handleMouseLeave = () => {
        if (!isTouchDevice) setCapturing(false);
    };

    const handleTouch = () => {
        setCapturing(prevState => !prevState)
    }

    return (
        <div className={styles.pokemonContainerWrap} onClick={handleCapture}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouch}
            onTouchEnd={handleTouch}
            >
            {pokemon.captured && <img className={styles.capturedIcon} src={pokeball} alt="Captured"/>}
            <div className={styles.pokemonContainer} style={{opacity: pokemon.captured ? '0.5' : capturing ? '0.5' : '1'}}>
                <img src={pokemon.img} alt={pokemon.name} />
                <p>N° {pokemon.id}</p>
                <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
                <div className={styles.typesContainer}>
                {pokemon.types.map(type => 
                    <div className={styles[type.type.name]} key={type.slot}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</div>
                )}
                </div>
            </div>
            {capturing && <img className={styles.capturing} src={pokemon.captured ? setFreePokeball : capturingPokeball} alt={pokemon.captured ? 'Set free' : 'Captured'}/>}
        </div>
    )
}

export default Pokemon


Pokemon.propTypes = {
    pokemon : PropTypes.object.isRequired
}