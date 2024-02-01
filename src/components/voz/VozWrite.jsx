import React, { useState } from 'react';

function VozWrite() {
    const [comment, setComment] = useState('');

    const handleSpeechRecognition = () => {
        const recognition = new window.webkitSpeechRecognition();

        recognition.onresult = (event) => {
            const current = event.resultIndex;
            const transcript = event.results[current][0].transcript;
            setComment(transcript);
        };

        recognition.start(); 
    };

    return (
        <div>
            <button onClick={handleSpeechRecognition}>Escribir comentario por voz</button>
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Escribe tu comentario aquí"
                rows={20}
                style={{ width: '100%' }}
            />
        </div>
    );
}

export default VozWrite;