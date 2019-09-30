import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "8ce9a1a110e1c4b14ada4645d0c94759",
        language: "en-US"
    }
});

export default api;