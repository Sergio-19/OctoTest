import React from 'react'
import './helloLink.scss'
import hand from '../../images/hand.png'
 

export const HelloLink = () =>{


    function scrollHelloBlockHandler(){
       
        document.querySelector('.formHead').scrollIntoView({block: "start", behavior: "smooth"});
           
        }


    return(
        <div className = 'helloLink'>
            <span onClick = {scrollHelloBlockHandler} style = {{cursor: 'pointer'}}>
                <img src = {hand} alt = "hand"/>
                &nbsp;
                Форма с приветами
            </span>
        </div>
    )
} 