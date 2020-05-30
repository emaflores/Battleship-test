import React, { Component } from 'react';

import { Container, Row } from 'react-bootstrap';
import _ from 'lodash'

import BattleField from '../../components/BattleField/BattleField';
import { getBattleField, makeClone } from './StartBattleField';
import { shipTypes } from './Ships';

function SaveDataToLocalStorage(data){
    var a = [];
    a = JSON.parse(localStorage.getItem('session')) || [];
    a.push(data);
    localStorage.setItem('session', JSON.stringify(a));
}

// clase principal
class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      battleField: null,
      navy: null,
      shots: -1,
      hits: 0,
      maxShots: 1000,
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFacil = this.handleFacil.bind(this);
    this.handleMedio = this.handleMedio.bind(this);
    this.handleDificil = this.handleDificil.bind(this);
  }

    componentDidMount() {
        let newNavy = _.cloneDeep(shipTypes);
        this.setState({
          navy: newNavy,
        });
      }
      onSubmit(event) {
        let newNavy = _.cloneDeep(shipTypes);
        this.setState({
          battleField: getBattleField(),
          hits: 0,
          shots: 0,
          navy: newNavy
        })
        event.preventDefault();
      }
      
      handleChange(event) {
        this.setState({
          ...this.state,
          maxShots: event.target.value
        });
        event.preventDefault();
      }
      handleFacil(event) {
        this.setState({
          ...this.state,
          maxShots: 100
        });
        //event.preventDefault();
      }
      handleMedio(event) {
        this.setState({
          ...this.state,
          maxShots: 80
        });
        //event.preventDefault();
      }
      handleDificil(event) {
        this.setState({
          ...this.state,
          maxShots: 50
        });
        //event.preventDefault();
      }

    onCellClick(x, y) {
        let newBattleField = makeClone(this.state.battleField);
        let shot = this.state.shots + 1;
        let hits = this.state.hits;
        let newNavy = [...this.state.navy];
        let cellValue = this.state.battleField[x][y];
        if (cellValue >= 100) {
          newBattleField[x][y] = 'hitted';
          hits += 1;
          this.setState({
            battleField: newBattleField,
            hits: hits,
            shots: shot,
            navy: newNavy
          })
        } else {
          newBattleField[x][y] = 'miss';
          this.setState({
            battleField: newBattleField,
            shots: shot
          })
        }
      }

      componentWillUpdate(){
        if(this.state.shots === this.state.maxShots*1 || this.state.hits === 20){
          let records = {
            hits: this.state.hits,
            shots: this.state.shots
          };
          SaveDataToLocalStorage(records);
          let sta = {
            ...this.state,
          }
          sta.battleField= null;
          sta.navy=null;
          sta.shots= -1;
          sta.hits= 0;
          sta.maxShots= 1000;

          this.setState({ ...sta })
        }
      }
    render() {
        let { battleField, hits, shots, maxShots } = this.state;
        let battleFieldPanel = (
          <BattleField
            hits={hits}
            shots={shots}
            handleChange={this.handleChange}
            handleFacil = {this.handleFacil}
            handleMedio = {this.handleMedio}
            handleDificil = {this.handleDificil}
            maxShots={maxShots}
            battleField={battleField}
            onSubmit={this.onSubmit}
            onCellClick={(x, y) => this.onCellClick(x, y)}
          />
        );

        return (
          <div className='main-content'>
            <Container>
                
                <Row>{battleFieldPanel}</Row>
            </Container>
          </div>
        );
      }
}

export default Game;