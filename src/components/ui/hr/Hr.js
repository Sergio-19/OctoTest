import React from 'react'
import './hr.scss'


export const Hr = (props) =>{
    return <hr className = 'hr' style = {{background: props.color}}/>
}