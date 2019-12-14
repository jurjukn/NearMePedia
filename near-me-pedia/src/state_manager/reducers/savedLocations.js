const savedLocationsReducer = (state=[], action) => {
    switch(action.type){
        case 'ADD_LOCATION':
            return [...state, action.payload]
        case 'ASSIGN_LOCATIONS':
            return action.payload
        default:
            return state
    }
}

export default savedLocationsReducer