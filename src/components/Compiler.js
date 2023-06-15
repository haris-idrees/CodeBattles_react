
import React, { useState, useEffect } from 'react';
import { AiOutlineUserDelete, AiOutlineLock, AiFillContacts } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import APIServices from '../APIServices';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function Compiler() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const { problem_name: problem_name } = useParams();
  const [details, setDetails] = useState([]);
  
  useEffect(() => {

    axios
      .get('http://127.0.0.1:8000/getProblem/', {
        params: {
          id: problem_name,
        },
      })
      .then((res) => {

        const data = res.data.user_details;
        console.log('Data fetched from API:', data);
        setDetails(data);
      })
      .catch((err) => {
        console.log('Error fetching data from API:', err);
      });
  }, []);


  const handleRunPython = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/run-python/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          code: code,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setOutput(data.output);
        setError('');
      } else {
        setOutput(data.error);
        setError('');
      }
    } catch (error) {
      setError('An error occurred while executing the Python code.');
      setOutput('');
    }
  };

  return (

    
    <div>
      <div className="inputbox">
        <h1>{details.name}</h1>
      </div>
      <textarea value={code} onChange={(e) => setCode(e.target.value)} />
      <button onClick={handleRunPython}>Run Python</button>
      {output && <pre>{output}</pre>}
      {error && <pre>Error: {error}</pre>}
    </div>
  );
}

export default Compiler;
