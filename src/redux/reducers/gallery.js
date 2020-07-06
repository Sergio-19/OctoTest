import { ALL_GALLERY, NOT_GALLERY, SHOW_BIG_PHOTO, HIDE_BIG_PHOTO } from "../actionTypes";

const initialState = {
    allPhoto: false,
    showBigPhoto: false,
    photoId: ''
}


export const gallery = (state = initialState, action) =>{
    switch(action.type){
            case ALL_GALLERY:
            return{
                ...state,
                allPhoto: true
            }
            case NOT_GALLERY:
            return{
                ...state,
                allPhoto: false
            }

            case SHOW_BIG_PHOTO:
            return{
                ...state,
                showBigPhoto: true,
                photoId: action.payload

            }
            case HIDE_BIG_PHOTO:
            return{
                ...state,
                showBigPhoto: false,
                photoId: ''
            }

        default:
        return state
    }
}