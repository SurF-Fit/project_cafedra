import Axios from 'axios';
const RESOURCE_NAME = 'http://lifestealer86.ru/api-shop/products';


export default {
    getAll() {
        return Axios.get(RESOURCE_NAME);
    },
};