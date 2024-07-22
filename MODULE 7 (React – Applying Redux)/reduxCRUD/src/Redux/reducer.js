import { CREATE_DATA, DELETE_DATA, UPDATE_DATA } from "./action"

const initialState = { data: [] };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_DATA: return { ...state, data: [...state.data, action.payload] }


        case UPDATE_DATA: return {
            ...state, data: state.data.map((i) => i.id === action.payload.id ? action.payload : i)
        };

        case DELETE_DATA: return { ...state, data: state.data.filter((i) => { return i.id != action.payload }) }

        default: return state;
    }
}

export default reducer