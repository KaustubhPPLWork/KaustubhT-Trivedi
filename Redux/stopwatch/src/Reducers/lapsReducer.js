const initialState = {
    laps: [],
}

const lapReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                laps: [...state.laps, action.payload]
            }
        case 'DROP':
            return {
                ...state,
                laps: []
            }
        default: return state;
    }
}

export default lapReducer