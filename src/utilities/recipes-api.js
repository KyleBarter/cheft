import sendRequest from './send-request'

const BASE_URL = "/api/recipes"

export function getAllRecipes(){
    return sendRequest(`${BASE_URL}/`)
}

export function getSingleRecipe(id){
    return sendRequest(`${BASE_URL}/${id}`)
}

export function addRecipe(){
    return sendRequest(`${BASE_URL}`, 'POST')
}