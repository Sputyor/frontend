import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://main--visionary-croquembouche-50b9b6.netlify.app',
    headers:{
        'Content-Type' : 'application/json',
    },
    withCredentials:true
});

export default instance;