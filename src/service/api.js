import axios from 'axios';


const api = axios.create({
    baseURL: 'https://api-bewell-ls.herokuapp.com/?'
});


export default api;