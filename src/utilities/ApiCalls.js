import * as endpoints from '../constants/endpoints'

export async function callApi(url, options) {
    try {
        const response = await fetch(url, options)
        if(response.ok) {
            console.log(response)
        } else {
            console.log('Network response was not ok.');
        }
        return await response.json()
    } catch(err) {
        console.log(err)
    }
}

export async function callGetProducts() {
    return await callApi(endpoints.GET_PRODUCTS, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-functions-key': endpoints.FUNCTION_KEY
        }
    })
}

export async function callCreateProduct(product) {
    return await callApi(endpoints.GET_PRODUCTS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-functions-key': endpoints.FUNCTION_KEY
        },
        body: product
    })
}

