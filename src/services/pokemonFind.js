// Axios
import axios from "axios"

// Endpoints
import { ENDPOINTS } from "../utils/endpoints"

export const pokemonFind = async ({ search }) => {
    try{
        const result = await axios.get(`${ENDPOINTS.POKEMONS_URL}pokemon/${search}`)
        const pokemonFound = result.data
        return {
            id: pokemonFound.id,
            name: pokemonFound.name,
            img: pokemonFound.sprites.front_default,
            types: pokemonFound.types,
            captured: false
        }
    } catch {
        throw new Error("There's been an error finding pokemon")
    }
}