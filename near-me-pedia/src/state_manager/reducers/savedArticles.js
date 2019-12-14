const savedArticlesReducer = (state=[], action) => {
    switch(action.type){
        case 'ADD_ARTICLE':
            return [...state, action.payload]
        case 'ASSIGN_ARTICLES':
            return action.payload
        default:
            return state
    }
}

export default savedArticlesReducer