import axios from 'axios';

const clientAxios=axios.create({
    baseURL:'https://api.spacexdata.com/v4/'
});

export default clientAxios;