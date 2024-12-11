// Axios
import axios from "axios"

// Endpoint
import { ENDPOINTS } from "../utils/endpoints"

export const pokemons = async () => {
    try{
        const result = await axios.get(`${ENDPOINTS.POKEMONS_URL}pokemon?limit=50`)
        const pokemons = result.data.results

        return pokemons?.map(pokemon => ({
            name: pokemon.name,
            url: pokemon.url
        }))
    } catch {
        throw new Error("There's been an error fetching pokemons")
    }
}