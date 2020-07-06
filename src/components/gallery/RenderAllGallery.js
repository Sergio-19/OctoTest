
import React, {useContext} from 'react'
import './gallery.scss'
import { MainContext } from '../../context/MainContext';



export const RenderAllGallery = () =>{

    const {state} = useContext(MainContext)
    const content = state.gallery

    function renderPhoto(content){
        const renderArr = []

        for(let key of content){
           renderArr.push(key.image)
        }
        return renderArr
    }

 

    return(
        <div className = 'fullGallery'>
        {renderPhoto(content).map((item, i)=>{
            return(
                <div className = 'galleryItem' key = {item} onClick = {()=> state.showBigPhotoHandler(item)}>
                    <img src = {item} alt = {item}/>
                </div>
            )
        })}
        
        
        </div>
    )
}