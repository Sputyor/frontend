import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://sore-blue-elephant-toga.cyclic.app',
    headers:{
        'Content-Type' : 'application/json',
    },
    withCredentials:true
});

export default instance;