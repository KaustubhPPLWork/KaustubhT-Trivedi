export const updateTime = (value) => {
    return {
        type: 'UPDATE',
        payload: value,
    }
}
export const resetTime = () => {
    return {
        type: 'RESET'
    }
}
export const addLap = (lap) => {
    return {
        type: 'ADD',
        payload: lap,
    }
}

export const dropLaps = () => {
    return {
        type: 'DROP',
    }
}