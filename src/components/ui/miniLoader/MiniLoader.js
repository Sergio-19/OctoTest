import React from 'react'
import './miniLoader.scss'



export const MiniLoader = () =>{

    return(
        <div className = 'miniLoader'>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        
    )
}