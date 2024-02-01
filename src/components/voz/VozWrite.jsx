import React, { useState } from 'react';

function VozWrite() {
    const [comments, setComments] = useState([]);

    const handleSpeechRecognition = () => {
        const recognition = new window.webkitSpeechRecognition();

        recognition.onresult = (event) => {
            const current = event.resultIndex;
            const transcript = event.results[current][0].transcript;
            setComments([...comments, transcript]);
        };

        recognition.start(); 
    };

    return (
        <div>
            <button onClick={handleSpeechRecognition}>Escribir comentario por voz</button>
            <div>
                {comments.map((comment, index) => (
                    <div key={index} style={commentStyle}>
                        {comment}
                    </div>
                ))}
            </div>
        </div>
    );
}

const commentStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '5px'
};

export default VozWrite;
