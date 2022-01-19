import axios from 'axios'
const api = axios.create({
  baseURL: 'https://personalport-be.herokuapp.com',
})
export default api
