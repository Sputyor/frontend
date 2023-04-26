import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://sore-blue-elephant-toga.cyclic.app',
    headers:{
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin': 'https://visionary-croquembouche-50b9b6.netlify.app/'
    },
    withCredentials:true
});

export default instance;