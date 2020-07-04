import { FETCH_MAIN, LOAD_MAIN, NOT_LOAD_MAIN, GET_WIDTH } from "../actionTypes";

const initialState = {
    content: '',
    gallery: '',
    name: '',
    block: '',
    loading: false,
    width: ''
}


export const main = (state = initialState, action) =>{
    switch(action.type){
       case FETCH_MAIN:
            return{
                ...state,
                content: action.payload.content || 'нет ключа',
                gallery: action.payload.gallery || 'нет ключа',
                name: action.payload.name || 'нет ключа',
                block: action.payload.static_blocks[0] || 'нет ключа',
            }
        case LOAD_MAIN: 
            return{
                ...state,
                loading: true
            }
        case NOT_LOAD_MAIN:
        return{
            ...state,
            loading: false
        }        
        case GET_WIDTH:
        return{
            ...state,
            width: action.payload

        }

        default:
        return state
    }
}