import React, {useContext} from 'react'
import './bigGallery.scss'
import { MainContext } from '../../context/MainContext';
import { MiniLoader } from '../ui/miniLoader/MiniLoader';



export const RenderBigPhoto = (props) =>{

const {state} = useContext(MainContext)


 function getRenderArr(gallery, id){
    const renderArr = []
    for(let key of gallery){
        if(key.image === id){
            renderArr[0] = key.image
        }else{
          renderArr.push(key.image)  
        }
        
    }

    return renderArr
 } 

 const renderArr = getRenderArr(state.gallery, state.photoId)


    return(
        state.photoId !== '' ? <img src = {renderArr[props.count]} alt = {renderArr[props.count] || 'bigPhoto'}/> : <MiniLoader/>
    )
}