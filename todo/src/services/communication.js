import axios from 'axios'
const baseUrl = '/api/todos'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request =  axios.post(baseUrl,newObject)
    return request.then(response => response.data)
}

const update = (id,todoObject) => {
    const request = axios.put(`${baseUrl}/${id}`,todoObject)
    return request.then(response => response.data)
}

const TodoService = {getAll,create,update}
export default TodoService
