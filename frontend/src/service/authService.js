import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1/auth/';

const register = async (userData) => {
  const response = await axios.post(`${API_URL}signup`, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  register,
};

export default authService;
