import axios from "axios"

// api get all students
const API_KEY_GET = 'http://192.168.10.57:8040/listeEleve/api/v1'

export const getAll = async () => {
    try {
        return axios.get(API_KEY_GET)
    } catch (error) {
        console.log('Error while calling get user api', error.message)
    }
}
export const getAllByClass = async (id) => {
    try {
        return axios.get(`${API_KEY_GET}/${id}`)
    } catch (error) {
        console.log('Error while calling get user api', error.message)
    }
}
// api post student
const API_KEY_POST = 'http://192.168.10.57:8040/postEleve/api/v1'

export const postDataStudent = async (data) => {
    // debugger
    try {
        // debugger
        return axios.post(API_KEY_POST, data)
    } catch (error) {
        debugger
        console.log('Error while calling post user api', error.message)
    }
}

// api update student
const API_KEY_UPDATE = 'http://192.168.10.57:8040/eleveUpdate/api/v1'

export const updateDataStudent = async (date, id) => {
    try {
        return axios.put(`${API_KEY_UPDATE}/${id}`, date)
    } catch (error) {
        console.log('Error while calling update user api', error.message)
    }
}

// api delete
const API_KEY_DELETE = 'http://192.168.10.57:8040/eleveDelete/api/v1'

export const deleteStudentData = async (id) => {
    try {
        return axios.delete(`${API_KEY_DELETE}/${id}`)
    } catch (error) {
        console.log('Error while calling update user api', error.message)
    }
}