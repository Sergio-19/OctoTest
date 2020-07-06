import React, {useContext, useState} from 'react'
import './gallery.scss'
import { MainContext } from '../../context/MainContext';
import { RenderAllGallery } from './RenderAllGallery';
import {MiniLoader} from '../ui/miniLoader/MiniLoader'




export const RenderGallery = () =>{


    const {state} = useContext(MainContext)

    const [value, setValue] = useState(false)

    function renderGallery(gallery, width){

        const renderObj = {
            galleryArray: [],
            renderArray: [],
            num: ''
        }
        
      for(let key in gallery){
          renderObj.galleryArray.push(gallery[key].image)
      }

      renderObj.num = renderObj.galleryArray.length -  Math.floor(width/220)
      renderObj.renderArray = renderObj.galleryArray.slice(0, renderObj.galleryArray.length - renderObj.num)
      return renderObj
    }

    function showPhotoHandler(){
        state.showAllPhoto()
        setTimeout(()=>{
            setValue(true)
        }, 500)
    }





    const renderObj = renderGallery(state.gallery, state.width)



    return(
        state.allPhoto ? value ? <RenderAllGallery/> : <MiniLoader/> : 

        <div className = 'gallery'>
        {renderObj.renderArray.map((item, i)=>{
                   return(
                        i === renderObj.renderArray.length - 1 ? 
                         <div key = {item} className = 'galleryItem'>
                           <img src = {item} alt = {item}/>
                           <div className = 'galleryMask' 
                                onClick = {showPhotoHandler}
                           >
                                <h3>ещё {renderObj.num} фото</h3> 
                           </div>
                             
                       </div> :

                      <div key = {item} 
                           className = 'galleryItem'
                           onClick = {()=> state.showBigPhotoHandler(item)}
                           >
                           <img src = {item} alt = {item}/>
                             
                       </div>
                      
                   )
               })}
               
        </div>
        
               
       
    )
}