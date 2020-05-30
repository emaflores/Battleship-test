import React from 'react';
import { Col } from 'react-bootstrap';
import Cell from "../Cell/Cell";
import StartGame from '../StartGame/StartGame';

export default (props) => {
  let { battleField, hits, shots, maxShots, onCellClick, onSubmit, handleChange, handleFacil, handleMedio, handleDificil } = props;
  let letras = ['A','B','C','D','E','F','G','H','I','J'];
  return (
    <Col className='battleFieldPanel'>
      {!battleField &&
      <table className={`emptyBattleField`}>
        <tbody>
        <tr>
          <td className='emptyBattleField'>
            <StartGame 
              onSubmit={(e) => onSubmit(e)} 
              handleChange={(e) =>handleChange(e)}
              handleFacil={(e) =>handleFacil(e)}
              handleMedio={(e) =>handleMedio(e)}
              handleDificil={(e) =>handleDificil(e)} 
              maxShots={maxShots}/>
          </td>
        </tr>
        </tbody>
      </table>
      }
      {battleField && hits < 20 && shots < Number(maxShots) &&
      <table className={`battlefieldTable`}>
        <tbody>
        <tr>
          <th></th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
          <th>7</th>
          <th>8</th>
          <th>9</th>
          <th>10</th>
        
        </tr>
        {battleField.map((row, x) => {
          return (
              <tr key={x}>
              <th>{letras[x]}</th>
              {row.map((column, y) => {
                return (
                  <td
                    key={y}
                    className='tableCell'
                  >
                    <Cell
                      onCellClick={() => onCellClick(x, y)}
                      x={x}
                      y={y}
                      cellState={column}
                    />
                  </td>
                )
              })}</tr>
          )
        })}
        </tbody>
      </table>
      }
      {hits === 20  &&
      <table className={`emptyBattleField`}>
        <tbody>
        <tr>
          <td>
            <div className='text-center'>
              <h1 style={{textAlign: 'center'}}>Has Ganado!</h1>
              <StartGame 
                onSubmit={(e) => onSubmit(e)} 
                handleChange={(e) =>handleChange(e)}
                handleFacil={(e) =>handleFacil(e)}
                handleMedio={(e) =>handleMedio(e)}
                handleDificil={(e) =>handleDificil(e)} 
                maxShots={maxShots}/>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      }
      {(shots === Number(maxShots) || shots > Number(maxShots)) &&
      <table className={`emptyBattleField`}>
        <tbody>
        <tr>
          <td>
            <div className='text-center'>
              <h1 style={{textAlign: 'center'}}>Game over. Intentar de nuevo?</h1>
              <StartGame 
                onSubmit={(e) => onSubmit(e)} 
                handleChange={(e) =>handleChange(e)}
                handleFacil={(e) =>handleFacil(e)}
                handleMedio={(e) =>handleMedio(e)}
                handleDificil={(e) =>handleDificil(e)} 
                maxShots={maxShots}/>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      }
    </Col>
  );
}
