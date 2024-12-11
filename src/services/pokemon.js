// Axios
import axios from 'axios'

export const pokemon = async ({ url }) => {
    try{
        const result = await axios.get(`${url}`)
        const pokemon = result.data

        return {
            id: pokemon.id,
            name: pokemon.name,
            img: pokemon.sprites.front_default,
            types: pokemon.types,
            captured : false
        }
    } catch {
        throw new Error("There's been an error fetching pokemon")
    }
}