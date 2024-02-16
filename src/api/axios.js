import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'bde7711accaa42ec7a2227ee3e12b832',
    language: 'ko-KR',
  }
}); 

export default instance;