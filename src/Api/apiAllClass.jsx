import axios from "axios"

const API_KEY = ''

const getFecthData = async () =>{
    try {
        return await axios.get(API_KEY);
    } catch (error) {
        console.log('Error while calling get user api', error.message)
    }  
}