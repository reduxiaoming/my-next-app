// frontend/pages/select.tsx
import React, { useEffect, useState } from 'react';
import logToServer from '../utils/logger';
import { API_BASE_URL } from '../utils/config';

interface Message {
  id: number;
  content: string;
  userId: string;
  timestamp: string;
}

const Select = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const logFuncName = 'useEffect';
    fetch('/select.html')
      .then((res) => res.text())
      .then((html) => {
        document.getElementById('selectContainer')!.innerHTML = html;
        fetchMessages();
        logToServer(`[${logFuncName}] Loaded select.html at ${new Date().toISOString()}`, 'info');
      })
      .catch((error) => logToServer(`[${logFuncName}] Error fetching select.html: ${error} at ${new Date().toISOString()}`, 'error'));
  }, []);

  const fetchMessages = async () => {
    const logFuncName = 'fetchMessages';
    try {
      const res = await fetch(`${API_BASE_URL}/select`);
      const data = await res.json();
      setMessages(data);
      logToServer(`[${logFuncName}] Fetched messages at ${new Date().toISOString()}`, 'info');
    } catch (error) {
      logToServer(`[${logFuncName}] Error fetching messages: ${error} at ${new Date().toISOString()}`, 'error');
    }
  };

  useEffect(() => {
    const logFuncName = 'useEffect-messages';
    if (messages.length > 0) {
      const tableBody = document.getElementById('messageTableBody');
      if (tableBody) {
        tableBody.innerHTML = '';
        messages.forEach((message) => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${message.id}</td>
            <td>${message.content}</td>
            <td>${message.userId}</td>
            <td>${message.timestamp}</td>
          `;
          tableBody.appendChild(row);
        });
        logToServer(`[${logFuncName}] Updated message table at ${new Date().toISOString()}`, 'info');
      }
    }
  }, [messages]);

  return <div id="selectContainer"></div>;
};

export default Select;