import React from 'react'
import './input.scss'



export const Input = (props) =>{

    
const cls = ['form-control']

if(props.valid && props.touched){
    cls.push('is-valid')
}else if(!props.valid && props.touched){cls.push('is-invalid')}
    
    return(
        <div className = 'form-row'>
                <div className="col-md-6 mb-3">
                <input type= {props.type} 
                       className={cls.join(' ')}
                       onChange = {props.onChange}
                       placeholder={props.placeholder} 
                       value = {props.value}
                       required/>
                <label  style = {{color: 'red', display: !props.valid && !props.touched ? 'none' : props.valid && props.touched ? 'none' : 'block'}}>{props.label}</label>
                </div>
          </div>
    )
}