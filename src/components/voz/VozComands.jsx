import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const VozCommands = () => {
    const [message, setMessage] = useState('');
    const commands = [
        {
            command: 'página arriba',
            callback: () => window.scrollBy({top: -window.innerHeight, behavior: 'smooth'})
        },
        {
            command: 'página abajo',
            callback: () => window.scrollBy({top: window.innerHeight, behavior: 'smooth'})
        },
        {
            command: 'ir superior',
            callback: () => window.scrollTo({top: 0, behavior: 'smooth'})
        },
        {
            command: 'ir inferior',
            callback: () => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})
        },
    ]

    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands });
    console.log(transcript)
    if (!browserSupportsSpeechRecognition) {
        return null;
    }
    
    return (
        <div>
            <p>Microfono: 
            <button onClick={() => SpeechRecognition.startListening({continuous: true})}>Start</button>
            <button onClick={() => SpeechRecognition.stopListening({continuous: true})}>Stop</button>
            </p>
            <p>{console.log(message)}</p>
        </div>
    );
};


export default VozCommands;
