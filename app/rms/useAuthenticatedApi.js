'use client';
// api/useAuthenticatedApi.js
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const useAuthenticatedApi = () => {
  const { authToken } = useAuth();

  const api = axios.create({
    baseURL: process.env.RMS_API_URL,
  });

  api.interceptors.request.use((config) => {
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  });

  return api;
};

export default useAuthenticatedApi;
