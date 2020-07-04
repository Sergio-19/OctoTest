import React from 'react'
import './helloLink.scss'
import hand from '../../images/hand.png'
 

export const HelloLink = () =>{
    return(
        <div className = 'helloLink'>
            <span>
                <img src = {hand} alt = "hand"/>
                &nbsp;
                Форма с приветами
            </span>
        </div>
    )
} 