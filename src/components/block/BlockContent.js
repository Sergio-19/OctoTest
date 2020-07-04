import React from 'react'
import './block.scss'



export const BlockContent = (props) =>{


function contentGen(content){
let strArr = content.split('')
let str = strArr.filter((item)=> item !== '<' && item !== '>' && item !== 'p' && item !== '/').join('')
return <div className = 'blockContent'><p>{str}</p></div>
} 

    return(
        
        contentGen(props.content)
    )
}