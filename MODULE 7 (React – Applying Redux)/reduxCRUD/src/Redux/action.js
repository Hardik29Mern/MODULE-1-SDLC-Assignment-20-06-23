export const CREATE_DATA = 'CREATE_DATA';
export const READ_DATA = 'READ_DATA';
export const UPDATE_DATA = 'UPDATE_DATA';
export const DELETE_DATA = 'DELETE_DATA';

export const create_data = (data) => {
    return {
        type: CREATE_DATA,
        payload: data
    }
}

export const read_data = () => {
    return {
        type: READ_DATA
    }
}

export const update_data = (id, newdata) => {
    return {
        type: UPDATE_DATA,
        payload: { id, newdata }
    }
}

export const delete_data = (id) => {
    return {
        type: DELETE_DATA,
        payload: id
    }
}
