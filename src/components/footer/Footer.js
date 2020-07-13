import React from 'react'
import './footer.scss'



export const Footer = () =>{

    function scrollTextBlockHandler(){
       
        document.querySelector('.block').scrollIntoView({block: "start", behavior: "smooth"});
           
        }
    
        function scrollGalleryBlockHandler(){
           
            document.querySelector('.galleryHead').scrollIntoView({block: "start", behavior: "smooth"});
               
            }

            function scrollHelloBlockHandler(){
       
                document.querySelector('.formHead').scrollIntoView({block: "start", behavior: "smooth"});
                   
                }        






    return(
        <footer>
            <div className = 'footerContentWrap'>
                <div className = 'footerContent'>
                    <h3>Санкт-Петербург</h3>
                    <p>Большой Проспект П. С., 18, офис 22</p>
                </div>


                <div className = 'footerContent'>
                    <h3>mail@octoberweb.ru</h3>
                    <p>+7 (981) 131-64-98</p>
                </div>
            
            </div>
            <div className = 'footerSub'>
                <div className = 'navSub'>
                    <ul>
                        <li onClick = {scrollTextBlockHandler} style = {{cursor: 'pointer'}}><span>Текстовые блоки</span></li>
                        <li onClick = {scrollGalleryBlockHandler} style = {{cursor: 'pointer'}}><span>Галерея</span></li>
                        <li onClick = {scrollHelloBlockHandler} style = {{cursor: 'pointer'}}><span>Форма</span></li>
                    </ul>
                </div>
                <div>
                    <p>© 2009-2020 OctoberWeb</p>
                </div>
            </div>
        </footer>
    )
}