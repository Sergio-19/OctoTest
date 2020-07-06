import { ALL_GALLERY, NOT_GALLERY, SHOW_BIG_PHOTO, HIDE_BIG_PHOTO } from "../actionTypes";

export function showAllPhoto(){
    return{
        type: ALL_GALLERY
    }
}

export function hideAllPhoto(){
    return{
        type: NOT_GALLERY
    }
}


export function showBigPhoto(id){
    return{
        type: SHOW_BIG_PHOTO,
        payload: id
    }
}

export function hideBigPhoto(){
    return{
        type: HIDE_BIG_PHOTO
    }
}