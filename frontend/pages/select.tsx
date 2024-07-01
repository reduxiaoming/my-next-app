import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import '../styles/Select.module.css';
import logToServer from '../utils/logger';
import { API_BASE_URL } from '../utils/config';

const Select: React.FC = () => {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const logFuncName = 'useEffect';
    fetch(`${API_BASE_URL}/select`)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
        logToServer(`[${logFuncName}] Fetched messages at ${new Date().toISOString()}`, 'info');
      })
      .catch((error) => logToServer(`[${logFuncName}] Error fetching messages: ${error} at ${new Date().toISOString()}`, 'error'));
  }, []);

  return (
    <>
      <Head>
        <title>Select Page</title>
      </Head>
      <div className="container">
        <h1>Messages</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Content</th>
              <th>User ID</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message.id}>
                <td>{message.id}</td>
                <td>{message.content}</td>
                <td>{message.userId}</td>
                <td>{new Date(message.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="navigation mt-4">
          <a href="/" className="btn btn-link">Go to Home</a>
          <a href="/insert" className="btn btn-link">Go to Insert</a>
        </div>
      </div>
    </>
  );
};

export default Select;