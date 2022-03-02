import axios from "axios"

const api = axios.create({
  baseURL: "https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1"
})

export default api