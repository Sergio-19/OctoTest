import { FETCH_MAIN, LOAD_MAIN, NOT_LOAD_MAIN, GET_WIDTH } from "../actionTypes";


export function getMain(){
    return async (dispatch) =>{
        await fetch('https://test.octweb.ru/api/pages/index/')
        .then((response)=>{
            response.json()
            .then((response)=>{
                if(response.slug !== 'index'){
                    dispatch(notLoad())
                }
                
                dispatch(fetchMain(response))
                dispatch(load())
            })
        })
    }

}


export function fetchMain(info){
    return{
        type: FETCH_MAIN,
        payload: info
    }
}

export function load(){
    return{
        type: LOAD_MAIN
    }
}

export function notLoad(){
    return{
        type: NOT_LOAD_MAIN
    }
}

export function getWidth(width){
    return{
        type: GET_WIDTH,
        payload: width
    }
}