import React, { Component } from 'react';

class Games extends Component {
    render () {
        return (
            <div>
                <p>Juego nº {this.props.index +1}</p>
                <p>Has acertado: {this.props.hits === 20 ? this.props.hits + ' Has Ganado!!' : this.props.hits + ' Has Perdido!!'}</p>
                <p>Tus hits fueron: {this.props.shots}</p>
            </div>
        );
    }
}

export default Games;