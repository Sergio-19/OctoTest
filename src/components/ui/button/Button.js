import React from 'react'
import './button.scss'



export const Button = (props) =>{

    const cls = ['btn', `${props.classes}`]
    if(props.disabled){
        cls.push('btnDesabled')
    }
    
    return(
        <button className = {cls.join(' ')}
                onClick = {props.click}
                disabled = {props.disabled}
        >
        {props.text}
        </button>
    )
}