'use client';
import axios from 'axios';

const rmsApi = axios.create({
  baseURL: process.env.RMS_API_URL,
});

export const getAuthToken = async () => {
  try {
    const response = await rmsApi.post('/authToken', {
      agentId: '1038',
      agentPassword: '?Ft8zbqbnte',
      clientId:'11281',
      clientPassword: '?Ft8zbqbnte',
      useTrainingDatabase: false,
      moduleType: ['distribution'],
    });

    return response.data;
  } catch (error) {
    console.error('Error getting auth token:', error);
    throw error;
  }
};

export default rmsApi;
