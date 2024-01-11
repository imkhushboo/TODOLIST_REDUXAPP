export const addItem = (item) => {
    return (dispatch) => {
        dispatch({
            type: 'addItem',
            payload: item
        });
    }
}
export const deleteItem = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'deleteItem',
            payload: id
        });
    }
}

export const saveItem = (id, text) => {
    return (dispatch) => {
        dispatch({
            type: 'saveItem',
            payload: { id, text }
        });
    }
}

export const currentState = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'currentItem',
            payload: { id }
        });
    }
}
