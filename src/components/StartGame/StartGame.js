import React from 'react';
import { Button } from 'react-bootstrap';

export default (props) => {
  const { onSubmit, handleChange, handleFacil, handleMedio, handleDificil } = props;
  return (
    <div style={{textAlign: 'center'}}>
        <div>
            <h1>Ingresar numero de turnos o elegir un nivel de dificultad</h1><br />
            <form onSubmit={(e) => onSubmit(e)}>
                <input type='number' min='0' onChange={(e) => handleChange(e)}></input> <br/>
                <input type="submit" value="Empezar!"></input><br/>
                <Button variant="success" type="submit" onClick={(e) => handleFacil(e)}>Nivel Facil</Button><br/>
                <Button variant="warning" type="submit" onClick={(e) => handleMedio(e)}>Nivel Medio</Button><br/>
                <Button variant="danger" type="submit" onClick={(e) => handleDificil(e)}>Nivel Dificil</Button><br/>
            </form>
        </div>
    </div>
  )
}
