const initialState = {
    time: 0
}

const timer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE':
            return {
                ...state,
                time: state.time + 10
            }
        case 'RESET':
            return {
                ...state,
                time: 0
            }
        default: return state;
    }
}

export default timer;