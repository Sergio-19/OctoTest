import React, {useContext} from 'react'
import './helloForm.scss'
import { Input } from '../ui/input/Input';
import { MainContext } from '../../context/MainContext';
import { CheckBox } from '../ui/checkBox/CheckBox';


export const FormContent = () =>{

      const {state} = useContext(MainContext)
      const txtValid = state.formControls.message.valid
      const txtTouched = state.formControls.message.touched

      const classes = ['form-control']

      if(!txtValid && txtTouched){
            classes.push('is-invalid')
      }else if(txtValid && txtTouched){
            classes.push('is-valid')
      }



    return(
        <div className = 'formContent'>

        <form>
              

              <Input 
                  type = {state.formControls.email.type}
                  placeholder = {state.formControls.email.placeholder}
                  label = {state.formControls.email.error}
                  value = {state.formControls.email.value}
                  valid = {state.formControls.email.valid}
                  touched = {state.formControls.email.touched}
                  onChange = {(event)=> state.onChangeHandler(event, 'email')}
              
              />

              <Input 
                  type = {state.formControls.name.type}
                  placeholder = {state.formControls.name.placeholder}
                  label = {state.formControls.name.error}
                  value = {state.formControls.name.value}
                  valid = {state.formControls.name.valid}
                  touched = {state.formControls.name.touched}
                  onChange = {(event)=> state.onChangeHandler(event, 'name')}
              
              />

              <Input 
                  type = {state.formControls.phone.type}
                  placeholder = {state.formControls.phone.placeholder}
                  label = {state.formControls.phone.error}
                  value = {state.formControls.phone.value}
                  valid = {state.formControls.phone.valid}
                  touched = {state.formControls.phone.touched}
                  onChange = {(event)=> state.onChangeHandler(event, 'phone')}
              
              />
         

          <div className = 'form-row'>
                <div className="col-md-6 mb-3">
                <textarea type="text" 
                          className={classes.join(' ')}
                          placeholder="Сообщение" 
                          value = {state.formControls.message.value}
                          onChange = {(event)=> state.textChangeHandler(event)}
                          required/>
                
                </div>
          </div>
           <CheckBox text = {'Согласен с правилами обработки моих персональных данных'}
                     click = {state.checkHandler}
                     checked = {state.formControls.checkBox.checked}   
           /> 
          
        </form>
        
        </div>
    )
}