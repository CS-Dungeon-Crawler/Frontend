import axios from 'axios';

const axiosWithAuth = () =>  {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      'Authorization': token ? `Token ${token}` : '',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    baseURL: 'https://lambdamud-crawler.herokuapp.com'
    // baseURL: 'http://localhost:8000'
  })
}

export default axiosWithAuth;