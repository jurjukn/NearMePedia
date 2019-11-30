export const assignArticles = (articles) => {
    return {
        type: 'ASSIGN_ARTICLES',
        payload: articles
    }
}

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

export const assignStartCoordinates = (coordinates) => {
    return{
        type: 'ASSIGN_COORDINATES',
        payload: coordinates
    }
}