
import React from 'react'
import './block.scss'



export const BlockImages = (props) =>{

    function renderImg(content){

        let renderArr = []
        for(let key in content){
            if(key === 'image1' || key === 'image2' || key === 'image3' || key === 'image4'){
                renderArr.push(content[key])
            }}
            return(
           <div className = 'blockImg'>
               {renderArr.map((item, i)=>{
                   return(
                       <div key = {item}>
                        <img src = {item} alt = {item} />   
                       </div>
                       
                   )
                   })}
           </div>
           )}



    return(
        renderImg(props.content) 
    )
}