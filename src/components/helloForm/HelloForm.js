import React, {useContext} from 'react'
import './helloForm.scss'
import { FormContent } from './FormContent';
import form from '../../images/form.png'
import { Button } from '../ui/button/Button';
import { MainContext } from '../../context/MainContext';



export const HelloForm = () =>{
    const {state} = useContext(MainContext)

    let formValidator = true

    if(state.formControls.email.valid && state.formControls.name.valid && state.formControls.phone.valid && state.formControls.message.valid && state.formControls.checkBox.checked){
        formValidator = false
    }


    return(
        <div className = 'formWrap'>
            <div className = 'formHead'>
                <h2>Форма с приветами</h2>
            </div>


            <div className = 'formContentWrap'>
            <div className = 'formContentImg'>
                <img src = {form} alt = 'form'/>
            </div>

            <FormContent/>

            <div className = 'formContentBtn'>
                <Button text = {'Отправить сообщение'}
                        classes = 'myBtn'
                        click = {state.sendFormHandler}
                        disabled = {formValidator}
                />
            </div>
            </div>

            

           
        
        
        </div>
    )
}