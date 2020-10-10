import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './pokemon-detail.css';

export default class PokemonDetail extends Component {
    state = {
        apiUrl: 'http://localhost:5000/pokemons/',
        number: null,
        pokemon: {},
        image: '',
    }
    async componentDidMount() {
        const { pokemonNumber } = this.props.match.params;
        this.setState({number: pokemonNumber})
        this.getPokemon(pokemonNumber)
    }
    getPokemon(pokemonNumber) {
        axios.get(this.state.apiUrl + pokemonNumber).then(response => {
            console.log(response.data)
            this.setState({pokemon: response.data})
        })
    }
    deletePokemon () {
        axios.delete(this.state.apiUrl + this.state.number).then(response => {
            this.props.history.push('/')
        })
    }
    render() {
        const pokemon = this.state.pokemon
        return (
            <div>
                {this.state.pokemon ? (
                    <React.Fragment>
                        <div className="row">
                            <div className="col-md-4 border border-rounded p-5 mr-2 stage m-2">
                                <div className="box bounce-5">
                                    <img src={pokemon.image} className="imagePokemon" alt={pokemon.number} />
                                </div>
                            </div>
                            <div className="col-md-7 border-bottom border-left border-right border-rounded m-2">
                                <div className="p-3 row border-bottom border-top border-rounded">
                                    <h3>{ pokemon.name } <small className="text-muted">N°{ pokemon.number }</small></h3>
                                </div>
                                <div className="row pl-3 mt-2">
                                    <span>Espèce : { pokemon.species } -</span>
                                    <span className="ml-1">Taille : { pokemon.height } -</span>
                                    <span className="ml-1">Poids : { pokemon.weight } </span>
                                </div>
                                <div className="row pl-3 mt-2">
                                    <span className="ml-1">Chance de spawn : { pokemon.spawn_chance } %</span>
                                </div>
                                <div className="row pl-3 mt-2">
                                    <span>Faiblesse : { pokemon.weaknesses ? (
                                        <div className='btn mr-1' >
                                                { pokemon.weaknesses.map((type) => (
                                                    <span>{type} </span>
                                                ))
                                            }
                                        </div>
                                    ) : (
                                            <span>Chargement des données</span>
                                    )}
                                    </span>
                                </div>
                                <div className="row pl-3 mt-2">
                                    <span>Type : { pokemon.types ? (
                                        <div className='btn mr-1' >
                                                { pokemon.types.map((type) => (
                                                    <span>{type} </span>
                                                ))
                                            }
                                        </div>
                                    ) : (
                                            <span>Chargement des données</span>
                                    )}
                                    </span>
                                </div>
                                <div className="row pl-3 mt-2">
                                    <button className="btn btn-danger" onClick={() => this.deletePokemon()}>Delete <FaTrash/> </button>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                ) : (
                    <div>
                        Chargement du pokemon
                    </div>
                )}
            </div>
        )
    }
}
