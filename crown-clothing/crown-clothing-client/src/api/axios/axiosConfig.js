import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:8888",
    "Content-type": "application/json"
});