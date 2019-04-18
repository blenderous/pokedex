import React from 'react';
import { Pokemon } from './Pokemon';
// import SearchInput, {createFilter} from 'react-search-input';
import pokeDex from './pokedex.json';

// const KEYS_TO_FILTERS = ['pokemon.name.english']

export class PokeList extends React.Component {
    render() {
        const listItems = pokeDex.map((pokemon) => (
            <li key={pokemon.id}>
                <Pokemon 
                    id={pokemon.id}
                    name={pokemon.name.english}
                    type={pokemon.type}
                    attack={pokemon.base.Attack}
                    defense={pokemon.base.Defense}
                />
            </li>
            )
        );
        return (
            <div>
                <ul className="pokelist-container">
                    {listItems}
                </ul>
                {/* Add Pokemon form */}
                <div class="add-new-form-container">
                    <h3>Add new pokemon</h3>
                    <form className="add-form" method="#">
                        <div class="form-group">
                            <input type="text" placeholder="Name"/>
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Type(s)"/>
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Attack level"/>
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Defense level"/>
                        </div>
                        <textarea placeholder="Description"></textarea>
                        <button type="submit" className="btn btn-primary">Add Pokemon</button>
                    </form>
                </div>
            </div>
        )
    }
}