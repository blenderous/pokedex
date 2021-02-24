import React from 'react';
import { Pokemon } from './Pokemon';
import SearchInput, {createFilter} from 'react-search-input';
// import pokeDex from './pokedex.json';

const KEYS_TO_FILTERS = ['name.english', 'type']

export class PokeList extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            searchTerm: '',
            loading: true,
            pokeDex: null
        }
        this.searchUpdated = this.searchUpdated.bind(this)
    }

    componentDidMount() {
        fetch('./pokedex.json')
        .then( response => {
            if (response.ok) {
                return response.text()
            }
            throw response
        }).then (text => {
            console.log(text)
            // this.setState({pokeDex: data})
        }).catch (error => {
            console.error("An error occured: ", error)
        }).finally(() => {
            this.setState({loading: false})
        })
    }

    render() {

        let filteredPokemons = null;
        
        if (this.state.pokeDex) {
            console.log(this.state)
            // filteredPokemons = this.state.pokeDex.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        }

        const isLoading = this.state.loading;
        
        return (

            <div>
                { isLoading 
                    ? <div>Loading..</div> 
                    
                : <div>
                    <SearchInput className="search-input" onChange={this.searchUpdated} />
                    <ul className="pokelist-container">
                    {/* {filteredPokemons.map(pokemon => {
                        return (
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
                        }   
                    )} */}
                    </ul>
                </div> }
            </div>
        )
    }

    searchUpdated (term) {
        this.setState({searchTerm: term})
    }
}