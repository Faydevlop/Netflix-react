import axios from 'axios'
import {apiBaseUrl} from './Constens/constats'

const instance = axios.create({
    baseURL: apiBaseUrl ,
    
  });

  export default instance