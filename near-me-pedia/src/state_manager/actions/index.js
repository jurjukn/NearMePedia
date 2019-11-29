export const assignArticles = (articles) => {
    return {
        type: 'ASSIGN_ARTICLES',
        payload: articles
    }
}