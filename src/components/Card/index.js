import React from 'react';
import './style.css';

export default ({ items }) => {
  
    function colorSelect(item) {
        let bgColor = ''
        switch (item) {
            case 'Bug':
                bgColor = '#1b4928';
                break;
            case 'Ghost':
                bgColor = '#040706';
                break;
            case 'Dragon':
                bgColor = '#448c93';
                break;
            case 'Electric':
                bgColor = '#e3e32b';
                break;
            case 'Fairy':
                bgColor = '#961944';
                break;
            case 'Fighting':
                bgColor = '#974026';
                break;
            case 'Fire':
                bgColor = '#aa2022';
                break;
            case 'Flying':
                bgColor = '#4a677d';
                break;
            case 'Grass':
                bgColor = '#147b3d';
                break;
            case 'Ground':
                bgColor = '#aa6e2e'
                break;
            case 'Ice':
                bgColor = '#87d1f3'
                break;
            case 'Normal':
                bgColor = '#73525b'
                break;
            case 'Poison':
                bgColor = '#5e2d88'
                break;
            case 'Psychic':
                bgColor = '#a32b6c'
                break;
            case 'Rock':
                bgColor = '#47190b'
                break;
            case 'Steel':
                bgColor = '#5e766d'
                break;
            case 'Water':
                bgColor = '#1552e2'
                break;
            default:
                break;
        }
        return {backgroundColor: bgColor, color: "#fff"}
    }
    return (
        <div className="pokemonCard" id={'pokemon' + items.num}>
            <div className="pokemonImage">
                <img src={items.img} alt="Pokemon" />
                <p>#{items.num}</p>
            </div>

            <h2>{items.name}</h2>
            <div className="pokemonType">
                {items.type.map(item => (
                    <p style={colorSelect(item)}>{item}</p>
                ))}
            </div>

        </div>
    )
}