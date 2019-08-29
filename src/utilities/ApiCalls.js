import * as endpoints from '../constants/endpoints'

export async function callApi(url, options) {
    try {
        const response = await fetch(url, options)
        if(response.ok) {
            console.log('Response is ok')
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
    return await callApi(endpoints.CREATE_PRODUCTS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-functions-key': endpoints.FUNCTION_KEY
        },
        body: JSON.stringify(product)
    })
}

export async function callUploadImage(productId, image) {
    return await callApi(endpoints.GET_PRODUCTS + productId + '/image', {
        method: 'POST',
        headers: {
            'x-functions-key': endpoints.FUNCTION_KEY
        },
        body: image
    })
}

export async function callUpdateProduct(product) {
    return await callApi(endpoints.CREATE_PRODUCTS + product.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'x-functions-key': endpoints.FUNCTION_KEY
        },
        body: JSON.stringify(product)
    })
}