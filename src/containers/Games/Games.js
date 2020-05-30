import React, { Component } from 'react';

import Item from './Item';

class Games extends Component {
    state = {
        records: JSON.parse(localStorage.getItem('session'))
    }

    render () {
        return (
            <div>
                <h1>Games</h1>
                
                {this.state.records !== null ? 
                    this.state.records.map((game, i) => (
                        <Item
                        key={i}
                        index={i}
                        hits={game["hits"]}
                        shots={game["shots"]}
                    />
                    ) 
                ) : <p>Todavia no has jugado ninguna partida!</p> }
            </div>
        );
    }
}

export default Games;