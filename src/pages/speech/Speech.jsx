import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import './speech.css'; // Import the CSS file

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = true; // Set to continuous mode
recognition.interimResults = true; // Allow interim results

const SpeechRecognitionComponent = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    if (isListening) {
      recognition.start();
      recognition.onresult = (event) => {
        let interimTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            setTranscript(prevTranscript => prevTranscript + transcript + ' ');
            handleCommand(transcript); // Check for commands in the transcript
          } else {
            interimTranscript += transcript;
          }
        }
        console.log('Interim transcript:', interimTranscript);
      };
    } else {
      recognition.stop();
    }
  }, [isListening]);

  const handleCommand = (command) => {
    console.log('Command:', command);
    if (command.toLowerCase().includes('stop')) {
      setIsListening(false);
    } else if (command.toLowerCase().includes('download')) {
      downloadPDF();
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text(transcript, 10, 10);
    doc.save('transcript.pdf');
  };

  return (
    <div className="speech-recognition-container">
      <h1 className="speech-recognition-title">Speech Recognition in React</h1>
      <button className="speech-recognition-button" onClick={() => setIsListening(!isListening)}>
        {isListening ? 'Stop Listening' : 'Start Listening'}
      </button>
      <div className="speech-recognition-transcript">{transcript}</div>
      <Link to="/start" style={{ textDecoration: "none" }}>
        <button className='btn' >
        <>Redirect to Test</>
        </button>
        </Link>
    </div>
  );
};

export default SpeechRecognitionComponent;
