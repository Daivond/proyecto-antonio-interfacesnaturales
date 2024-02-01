import React, { useState } from 'react';
import TopBar from './TopBar';
import VozWrite from './voz/VozWrite';
import VozCommands from './voz/VozComands.jsx';

function Coments() {
    return (
        <>
        <div>
            <div>
                <TopBar />
            </div>
            <div classsName="container">
                <div className="content" style={{marginTop: '70px'}}>
                    <VozCommands />
                    <VozWrite />
                </div>
            </div>
        </div>
        </>
    );
}

export default Coments;