
import React, { useState, useEffect } from 'react';
import { AiOutlineUserDelete, AiOutlineLock, AiFillContacts } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import APIServices from '../APIServices';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import StickyFooter from './StickyFooter';

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

  const submitproblem = async () => {
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
        let r = 'Fail'
        // Check if the output matches the expected output
        if (data.output === details.output) {
          r = 'Pass'
          console.log('Output matches the expected output');
          // Call a function or perform any other action here
        } else {
          // Output does not match
          console.log('Output does not match the expected output');
          // Handle the mismatch as needed
        }
        console.log(sessionStorage.getItem('id'), details.id, r)
        axios
          .post('http://127.0.0.1:8000/submitresult/', {
            user_id: sessionStorage.getItem('id'),
            prob_id: details.id,
            result: r,
          })
          .then((res) => {
            console.log(res.data.status)
            alert("Submitted");
          })
          .catch((err) => {
            console.log('Error fetching data from API:', err);
          });

      } else {
        setOutput(data.error);
        setError('');
      }
    } catch (error) {
      setError('An error occurred while executing the Python code.');
      setOutput('');
    }
  };

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
      <Navbar />
      <div className="inputbox">
        <h1>{details.name}</h1>

        <h4>{details.Prob_description}</h4>
      </div>
      <textarea value={code} onChange={(e) => setCode(e.target.value)} />
      <button onClick={handleRunPython}>Run Python</button>
      <button onClick={submitproblem}>Submit</button>
      {output && <pre>{output}</pre>}
      {error && <pre>Error: {error}</pre>}
      <StickyFooter />
    </div>
  );
}

export default Compiler;
