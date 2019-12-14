export const addArticle = (article) => {
    return {
        type: 'ADD_ARTICLE',
        payload: article
    }
}

export const addLocation = (coordinates) => {
    return {
        type: 'ADD_LOCATION',
        payload: coordinates
    }
}
