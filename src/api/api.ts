import axios from 'axios'

const API_DOMAIN = 'http://localhost:8080'

export const getRecipes = async (): Promise<void> => {
    return axios.get(`${API_DOMAIN}/recipes`)
}
