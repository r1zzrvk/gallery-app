import axios from "axios"

export const rootAPI = {
  fetchItems: (limit = 24) => {
    return axios
    .get(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}`)
    .then(response => response.data)
  },

  fetchItem: (id) => {
    return axios
    .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then(response => response.data)
  }
};