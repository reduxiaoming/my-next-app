import { API_BASE_URL } from './config';

const logToServer = async (message: string, level: string = 'info') => {
  try {
    await fetch(`${API_BASE_URL}/log`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, level, screenName: window.location.pathname.substring(1) || 'home' }),
    });
  } catch (error) {
    console.error('Failed to send log to server:', error);
  }
};

export default logToServer;