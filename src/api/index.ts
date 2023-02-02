import axios from 'axios'
const api = axios.create({
  baseURL: import.meta.env.VITE_DEV_MODE ? 'http://localhost:1331' : 'https://personal-portfolio-be.onrender.com',
})
export default api
