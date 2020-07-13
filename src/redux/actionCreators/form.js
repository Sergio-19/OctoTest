import { CHANGE_INPUT, CHECK_BOX, WRITE_MESSAGE, CLEAR_FORM, SEND_FORM} from "../actionTypes";


export function onChangeHandler(event, control){
   return (dispatch)=>{
    // console.log(control, ': ', event.target.value)
    dispatch(getInput(event.target.value, control))
   }

}



export function getInput(value, control){
  

    return{
       type: CHANGE_INPUT, 
       payload: value,
       name: control
    }
}


export function textChangeHandler(event){
    return (dispatch)=>{
        dispatch(textChange(event.target.value))
    }

}

export function textChange(value){
    return {
        type: WRITE_MESSAGE,
        payload: value
    }
}




export function checkHandler(){
    return{
        type: CHECK_BOX
    }
}


export function sendFormHandler(){
    return{
        type: SEND_FORM
    }
}

export function clearFormHandler(){
    return{
        type: CLEAR_FORM
    }
}

