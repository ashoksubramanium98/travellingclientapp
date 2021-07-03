import Axios from 'axios';
import CONFIG from '../Config';

export const getWeather = () => {
    return Axios.get(CONFIG.apiURL + '/e3ae9d2e-78f5-403d-b6cd-fa7f8c7e1576').then(res => {
        let response = res['data'];
        return response;
    }).catch(err => {
        console.log('Get weather', err);
    });
};

export const getDestinations = () => {
    return Axios.get(CONFIG.apiURL + '/3e6901dd-9a60-4771-a8cb-9c62177a654c').then(res => {
        let response = res['data'];
        return response;
    }).catch(err => {
        console.log('Get Destinations', err);
    });
};