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