// provinsiService.js

import axios from 'axios';

const apiUrl = 'http://localhost:4000'; // Replace with your actual backend API URL

const token =  localStorage.getItem('token');
console.log('Token:', token); 

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getToken = () => {
    const token = localStorage.getItem('token');
    return token ? `Bearer ${token}` : '';
  };

axiosInstance.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export const getProvinsi = async () => {
  try {
    const response = await axiosInstance.get(`${apiUrl}/provinsi`);
    return response.data;
  } catch (error) {
    console.error('Error fetching provinces:', error);
    throw error;
  }
};

export const addProvinsi = async (provinsi) => {
  try {
    const response = await axiosInstance.post(`${apiUrl}/provinsi`, provinsi);
    return response.data;
  } catch (error) {
    console.error('Error adding province:', error);
    throw error;
  }
};

export const updateProvinsi = async (id, provinsi) => {
  try {
    const response = await axios.put(`${apiUrl}/provinsi/${id}`, provinsi);
    return response.data;
  } catch (error) {
    console.error('Error updating province:', error);
    throw error;
  }
};

export const deleteProvinsi = async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}/provinsi/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting province:', error);
    throw error;
  }
};
