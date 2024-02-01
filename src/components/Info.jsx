import React from 'react';
import TopBar from './TopBar';
import Foto from '../Foto.jpeg'
import VozCommands from './voz/VozComands.jsx';

function Info() {
    return (
        <>
            <div>
                <TopBar />
            </div>
            <div className="container" style={{ marginTop: '70px' }}>
            <VozCommands />
                <h2>Proyecto: UT7 interfaces naturales de usuario</h2>
                <h3>Realizado por: Antonio David Alonso Ramos</h3>
                <p>Curso: 2º DAM</p>
                <p>Asignatura: DAD</p>
                <p>Foto de grupo (donde tengo 45 años)</p>
                <img src={Foto} alt="Foto de grupo (soy el de rosa claramente)" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
        </>
    );
}

export default Info;
