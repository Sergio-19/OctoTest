import React, {useContext} from 'react'
import './testTask.scss'
import { MainContext } from '../../context/MainContext';



export const TestTask = () =>{

    const {state} = useContext(MainContext)

    let str = state.content
    

    function getContent(str, on, of){
        let string = str.slice(on, of)

        const strArr = string.split('')
        const strArrFilter = strArr.filter((item)=> item !== 'p' && item !== '>' && item !== '<' && item !== '/').join('').split(' ').map((item, i)=>{
            if(item === 'styled-comonents.'){item = 'scss или less'}
            return item
        })
        

        return (
            <p>
               {strArrFilter.join(" ")} 
            </p>
            
            )
    }






    return(
        <div className = 'testTask'>
            <div className = 'testTaskHead'>
            <h1>{state.name}</h1>
            </div>

            <div className = "testTaskContent">
            <div>
             {getContent(str, str.indexOf('<p>Это') + 3, str.indexOf('API:</p>') + 4)}   
            </div>
            

            <small>Этот блок с описанием тоже нужно сверстать. Специально использовали разные стили и текстовые блоки, даже если они порой неуместны ;)</small>
            </div>


            <div className = 'testTaskCopy'>
            
                <h4>
                    ТЕКСТОВЫЕ БЛОКИ И ИЗОБРАЖЕНИЯ ДЛЯ ГАЛЕРЕИ
                </h4>

                <div>
                    <p>https://test.octweb.ru/api/pages/index/</p>
                    <i className = 'fa fa-clone'/>
                </div>
            
            </div>


        </div>
    )
}