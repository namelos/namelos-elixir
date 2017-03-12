import axios from 'axios'

const getToken = () =>
  localStorage.getItem('token')


export const get = (url, config = {}) => axios.get(
  url,
  getToken() ?
    { ...config, header: { 'Authorization': getToken() } } :
    config
)

export const post = (url, data = {}, config = {}) => axios.post(
  url,
  data,
  getToken() ?
    { ...config, header: { 'Authorization': getToken() } } :
    config
)
