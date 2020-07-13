import React from 'react'
import './nav.scss'


export const Nav = () =>{


    function scrollTextBlockHandler(){
       
    document.querySelector('.block').scrollIntoView({block: "start", behavior: "smooth"});
       
    }

    function scrollGalleryBlockHandler(){
       
        document.querySelector('.galleryHead').scrollIntoView({block: "start", behavior: "smooth"});
           
        }


    return(
        <nav>
            <ul>
                <li onClick = {scrollTextBlockHandler} style = {{cursor: 'pointer'}}><span>Текстовые блоки</span></li>
                <li onClick = {scrollGalleryBlockHandler} style = {{cursor: 'pointer'}}><span>Галерея</span></li>
            </ul>
        </nav>
    )
}