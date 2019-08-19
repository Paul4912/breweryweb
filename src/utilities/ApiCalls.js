import * as endpoints from '../constants/endpoints'

export const callApi = (url, options) =>
    fetch(url, options)
    .then(function(response) {
        if(response.ok) {
            console.log(response)
        } else {
            console.log('Network response was not ok.');
        }
        return response.json()
    })
    .catch(console.log)

export const callGetProducts = async () => {
    return callApi(endpoints.BASE_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-functions-key': endpoints.FUNCTION_KEY
        }
    })
}

