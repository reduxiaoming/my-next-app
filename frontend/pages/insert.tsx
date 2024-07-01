// frontend/pages/insert.tsx
import React, { useEffect, useState } from 'react';
import logToServer from '../utils/logger';
import { API_BASE_URL } from '../utils/config';

interface MessageResponse {
  id: number;
  message: string;
  userId: string;
  timestamp: string;
}

const Insert = () => {
  const [response, setResponse] = useState<MessageResponse | null>(null);

  useEffect(() => {
    const logFuncName = 'useEffect';
    fetch('/insert.html')
      .then((res) => res.text())
      .then((html) => {
        document.getElementById('insertContainer')!.innerHTML = html;

        const form = document.getElementById('insertForm') as HTMLFormElement;
        if (form) {
          form.addEventListener('submit', handleSubmit);
        }
        logToServer(`[${logFuncName}] Loaded insert.html at ${new Date().toISOString()}`, 'info');
      })
      .catch((error) => logToServer(`[${logFuncName}] Error fetching insert.html: ${error} at ${new Date().toISOString()}`, 'error'));
  }, []);

  const handleSubmit = async (e: Event) => {
    const logFuncName = 'handleSubmit';
    e.preventDefault();
    const message = (document.getElementById('message') as HTMLInputElement).value;
    const userId = (document.getElementById('userId') as HTMLInputElement).value;
    try {
      const res = await fetch(`${API_BASE_URL}/insert`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, userId }),
      });
      const data = await res.json();
      setResponse(data);
      logToServer(`[${logFuncName}] Submitted message: ${message} by user: ${userId} at ${new Date().toISOString()}`, 'info');
    } catch (error) {
      logToServer(`[${logFuncName}] Error submitting message: ${error} at ${new Date().toISOString()}`, 'error');
    }
  };

  useEffect(() => {
    const logFuncName = 'useEffect-response';
    if (response) {
      const responseDiv = document.getElementById('response');
      if (responseDiv) {
        responseDiv.innerHTML = `<h2>Response</h2><pre>${JSON.stringify(response, null, 2)}</pre>`;
        logToServer(`[${logFuncName}] Updated response at ${new Date().toISOString()}`, 'info');
      }
    }
  }, [response]);

  return <div id="insertContainer"></div>;
};

export default Insert;