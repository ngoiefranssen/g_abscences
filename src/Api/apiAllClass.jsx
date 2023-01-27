import axios from "axios"

// api get all classes

const API_KEY_GET = 'http://192.168.10.58:8040/classe/api/get'

export const getFecthData = async () => {
    try {
        return await axios.get(API_KEY_GET);
    } catch (error) {
        console.log('Error while calling get user api', error.message)
    }  
}

// api post class

const API_KEY_POST = 'http://192.168.10.58:8040/postClasse/api/v1'

export const postClassData = async (data) => {
    try {
        return axios.post(API_KEY_POST, data)
    } catch (error) {
        console.log('Error while calling post user api', error.message)
    }
}

// api edit class
const API_KEY_EDIT = 'http://192.168.10.58:8040/classe/api/upDate'

export const apiEditClass = async (data, id) => {
    try {
        return axios.put(`${API_KEY_EDIT}/${id}`, data)
    } catch (error) {
        console.log('Error while calling post user api', error.message)
    }
}

// delete
const API_KEY_DELETE = 'http://192.168.10.58:8040/classe/api/delete'

export const delClass = async (id) =>{
    try {
        return axios.delete(`${API_KEY_DELETE}/${id}`)
    } catch (error) {
        console.log('Error while calling post user api', error.message)
    }
}
