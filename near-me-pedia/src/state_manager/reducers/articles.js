const articlesReducer = (state=[], action) => {
    switch(action.type){
        case 'ASSIGN_ARTICLES':
            return state=action.articles
        default:
            return state
    }
    
    return state
}

export default articlesReducer