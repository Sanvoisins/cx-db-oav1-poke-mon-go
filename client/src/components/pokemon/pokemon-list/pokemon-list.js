import React, { Component } from 'react'
import axios from 'axios'
import PokemonCard from '../pokemon-card/pokemon-card'
import './pokemon-list.css'

export default class PokemonList extends Component {
    state = {
        urlApi: 'http://localhost:5000/pokemons',
        pokemons: [],
        search: '',
        imageType: 'icon'
    }

    async componentDidMount() {
        this.getPokemons();
    }

    getPokemons() {
        axios.get(this.state.urlApi).then(response => {
            this.setState({pokemons: response.data})
        })
    }
    getSearch(event) {
        this.setState({search: event.target.value.substr(0,20)})
    }

    render() {
        return (
            <React.Fragment>
                { this.state.pokemons ? (
                        <div className="row">
                            { this.state.pokemons.map((pokemon) => (
                                    <PokemonCard
                                        key={pokemon.number}
                                        number={pokemon.number}
                                        name={pokemon.name}
                                        image={pokemon.image}
                                    />
                                ))
                            }
                        </div>
                    ) : (
                        <div>
                            <h1>Chargement des Pokemon</h1>
                        </div>
                )}
            </React.Fragment>
        )
    }
}
