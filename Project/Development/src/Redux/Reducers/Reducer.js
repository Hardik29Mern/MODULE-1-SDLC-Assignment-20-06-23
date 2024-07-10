const Initial_State= {
    User_data : []
}

export const todoreducers = (state = Initial_State ,action)=> {
    switch (action.type){
        case "ADD_DATA": 

        return {
            ...state,
            User_data : [...state.User_data,action.payload]
        }

        case "RMV_DATA":

        const dltData = state.User_data.filter((ele,k)=> k !== action.payload)

        return{
            ...state,
            User_data : dltData
        }

        case "UPDATE_DATA":
        const updateData = state.User_data.map((ele,k)=> k == action.d ?  action.payload : ele)

        return{
            ...state,
            User_data : updateData
        }

        default:
        return state
    }
}