import axios from "axios"

export const rootAPI = {
  fetchItems: (limit) => {
    return axios
    .get(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}`)
    .then(response => response.data)
  }
};