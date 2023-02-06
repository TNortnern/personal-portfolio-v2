import axios from 'axios'
const api = axios.create({
  baseURL: 'https://personal-portfolio-be.onrender.com',
})
export default api
