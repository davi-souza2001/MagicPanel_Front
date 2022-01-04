import axios from "axios"

// Url base que o axios vai consumir em toda a aplicação

const api = axios.create({
    baseURL: "https://magicpaneapi.herokuapp.com/"
});

export default api

// https://magicpaneapi.herokuapp.com/
// http://localhost:5000/