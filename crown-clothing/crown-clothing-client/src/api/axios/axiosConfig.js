import axios from 'axios';

export default axios.create({
    baseURL: "https://crown-clothing-back-282e48e6fbc7.herokuapp.com/",
    "Content-type": "application/json"
});