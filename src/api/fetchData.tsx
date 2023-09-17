import axios from 'axios';

const fetchData = async (url: string, bodyParams = {}, headers = {}) => {
  try {
    const response = await axios.post(url, bodyParams, {
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });
    const jsonString = response.data.split(']')[0] + ']';
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('SOAP Request Error:', error);
    throw error;
  }
};

export default fetchData;
