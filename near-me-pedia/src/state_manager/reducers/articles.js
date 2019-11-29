const articlesReducer = (state=[], action) => {
    switch(action.type){
        case 'ASSIGN_ARTICLES':
            return action.payload
        default:
            return state
    }
}

export default articlesReducer