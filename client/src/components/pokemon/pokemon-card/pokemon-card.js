import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./pokemon-card.css"

export default class PokemonCard extends Component {
    state = {
        name: '',
        number: '',
        image: ''
    }
    async componentDidMount() {
        this.setState({number: this.props.number, name: this.props.name, image: this.props.image})
    }
    render() {
        return (
            <div className="col-md-4 col-sm-6 mb-5 mt-3">
                <Link to={`pokemon/${this.state.number}`} className="Link">
                    <div className="card flex-row flex-wrap">
                        <div className="card-header border-0 backIcon">
                            <img src={this.state.image} alt={this.state.name} className="card-img-top iconPokemon"/>
                        </div>
                        <div className="card-block px-2">
                            <h4 className="card-title">{ this.state.name }</h4>
                            <p className="card-text">N°{ this.state.number }</p>
                        </div>
                        <div className="w-100"></div>
                    </div>
                </Link> 
            </div>
        )
    }
}
