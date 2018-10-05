import Axios from "axios";
const url = "http://localhost:3000/api/";

const axios = Axios.create({
    baseURL: url,
    headers: {
        'content-type': 'application/json'   
    },
    timeout: 10000
})

export default {
    getTodos(){
        
        return axios.get('tasks')
        
    }
}
