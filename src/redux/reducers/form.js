import { CHANGE_INPUT, CHECK_BOX, WRITE_MESSAGE, CLEAR_FORM, SEND_FORM} from "../actionTypes";

const initialState = {
    
            email: {
                value: '',
                type: 'email',
                error: 'Введите корректный Email!',
                placeholder: 'Электронная почта',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }

            },

            name: {
                value: '',
                type: 'text',
                error: 'Введите корректное имя!',
                placeholder: 'Ваше имя',
                valid: false,
                touched: false,
               

            },

            phone: {
                value: '',
                type: 'number',
                error: 'Введите корректный телефон!',
                placeholder: 'Телефон',
                valid: false,
                touched: false,
                

            },

            message: {
                value: '',
                valid: false,
                touched: false,
                error: 'Введите текст сообщения!'
               
            },

            checkBox: {
                checked: false
            },

            ready: false    

    
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

function validator(value, name ){
    let indicator = false
   

    if(name === 'email'){
        if(validateEmail(value)){
            return indicator = true
        }
    }

    if(name === 'phone'){
        if(value.length > 4){
            return indicator = true
        }
    }

    if(name === 'name'){
        if(value.length >= 4){
            return indicator = true
        }
    }


return !!indicator

}

function textValidator(text){
    let indicator = false

    if(text.length >= 2){
        return indicator = true
    }

    return !!indicator
}



export const form = (state = initialState, action) =>{
    switch(action.type){
        case CHANGE_INPUT:    
        return{
            ...state,
           [action.name]: {
               value: action.payload,
               touched: true,
               error: initialState[action.name].error,
               type: initialState[action.name].type,
               valid: validator(action.payload, action.name),
               placeholder: initialState[action.name].placeholder

              
           }

        }

        case CHECK_BOX:
        return{
            ...state,
            checkBox: {
                checked: !state.checkBox.checked
            }
        }

        case WRITE_MESSAGE:
        return{
            ...state,
            message: {
                value: action.payload,
                touched: true,
                valid: textValidator(action.payload),
                error: initialState.message.error,
            }
        }

        case SEND_FORM:
        return{
            ...state,
            ready: true

        }

        case CLEAR_FORM:
        return{
    
            email: {
                value: '',
                type: 'email',
                error: 'Введите корректный Email!',
                placeholder: 'Электронная почта',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }

            },

            name: {
                value: '',
                type: 'text',
                error: 'Введите корректное имя!',
                placeholder: 'Ваше имя',
                valid: false,
                touched: false,
               

            },

            phone: {
                value: '',
                type: 'number',
                error: 'Введите корректный телефон!',
                placeholder: 'Телефон',
                valid: false,
                touched: false,
                

            },

            message: {
                value: '',
                valid: false,
                touched: false,
                error: 'Введите текст сообщения!'
               
            },

            checkBox: {
                checked: false
            },

            ready: false    

    
}

        default:
        return state
    }
}