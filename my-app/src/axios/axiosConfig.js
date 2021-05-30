import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://yalantis-react-school-api.yalantis.com/api/task0'
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getDataAPI = (handleGetUsers) => {
    instance.get('/users')
        .then(request => {
            handleGetUsers(request.data)
        })
        .catch(error => {
            console.log(error)
            return Promise.reject(error)
        })
}