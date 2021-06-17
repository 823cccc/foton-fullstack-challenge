import axios from 'axios'

const api = axios.create({
  baseURL: 'https://foton-fullstack-challenge.herokuapp.com',
})

export default api
