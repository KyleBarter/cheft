import sendRequest from './send-request'

const BASE_URL = "/api/recipes"

export function getAllRecipes(){
    return sendRequest(`${BASE_URL}/`)
}

export function getSingleRecipe(id){
    return sendRequest(`${BASE_URL}/${id}`)
}

export function addRecipe(formData){
    return sendRequest(`${BASE_URL}`, 'POST', formData)
}

export function editRecipe(id, formData){
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', formData)
}

export function deleteRecipe(recipeId){
    return sendRequest(`${BASE_URL}/${recipeId}`, 'DELETE')
}