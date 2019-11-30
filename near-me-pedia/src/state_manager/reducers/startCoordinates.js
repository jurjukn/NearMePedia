const startCoordinatesReducer = (state={longitude: '0', latitude: '0'}, action) => {
    switch(action.type){
        case 'ASSIGN_COORDINATES':
            return action.payload
        default:
            return state
    }
}

export default startCoordinatesReducer