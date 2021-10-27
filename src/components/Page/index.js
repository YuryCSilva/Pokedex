import { useEffect, useState, useMemo } from 'react';
import './style.css';
import API from '../../service/API';
import Card from '../Card';


export default () => {
    const [pokemons, setPokemon] = useState();
    const [search, setSearch] = useState();
    const [pokemonsSearch, setPokemonsSearch] = useState();

    useEffect(() => {
        const loadAPI = async () => {
            let list = await API.get('').then(response => (response.data.pokemon));
            setPokemon(list);
            setPokemonsSearch(list);
        }
        loadAPI();
    }, []);

    useMemo(() => {
        let searchLower = search?.toLowerCase();
        let NaN = isNaN(parseInt(searchLower))
        if (NaN) {
            setPokemonsSearch(pokemons?.filter((poke) => poke.name.toLowerCase().includes(searchLower)))
        }
        else {
            setPokemonsSearch(pokemons?.filter((poke) => poke.num.toLowerCase().includes(searchLower)))
        }
    }, [search]);

    return (
        <div className="page" >
            <h1>Pokédex</h1>
            <header className="header">
                <nav>
                    <input type="text" value={search} placeholder='Digite o Nome ou o Número do Pokemon 🔍' onChange={(ev) => setSearch(ev.target.value)} />
                </nav>
            </header>
            <section className="pokemon-list">
                {pokemonsSearch?.map((item, key) => (
                    <Card items={item} key={key} />
                ))}
            </section>
        </div>
    );
}
