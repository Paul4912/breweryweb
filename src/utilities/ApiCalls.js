import * as endpoints from '../constants/endpoints'

export const callApi = (url, options) =>
    fetch(url, options)
    .then(data => console.log(data))
    .then(res => {
        return res.json()
    })
    .catch(console.log)

export const callGetProducts = () => {
    return callApi(endpoints.BASE_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-functions-key': endpoints.FUNCTION_KEY
        }
    })
}

