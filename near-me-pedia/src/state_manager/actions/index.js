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

export const assignArticles = (articles) => {
    return {
        type: 'ASSIGN_ARTICLES',
        payload: articles
    }
}

export const assignLocations = (locations) => {
    return {
        type: 'ASSIGN_LOCATIONS',
        payload: locations
    }
}