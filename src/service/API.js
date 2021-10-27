import axios from "axios";

const API = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
const getAPI = axios.create({
    baseURL: API
})

export default getAPI;
