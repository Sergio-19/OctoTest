import React from 'react'
import './checkBox.scss'



export const CheckBox = (props) =>{

    const cls = ['check']
    if(props.checked){
        cls.push('checkActive')
    }

    return(
        <div className = 'checkBox' 
             onClick = {props.click}
        >
            <div className = {cls.join(' ')}>
                <i className = 'fa fa-check'/>
            </div>
            <p>{props.text}</p>
        </div>
    )
}