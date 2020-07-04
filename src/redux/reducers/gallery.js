import { ALL_GALLERY } from "../actionTypes";

const initialState = {
    allPhoto: false
}


export const gallery = (state = initialState, action) =>{
    switch(action.type){
            case ALL_GALLERY:
            return{
                ...state,
                allPhoto: true
            }

        default:
        return state
    }
}