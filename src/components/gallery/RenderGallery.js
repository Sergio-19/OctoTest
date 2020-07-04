import React, {useContext} from 'react'
import './gallery.scss'
import { MainContext } from '../../context/MainContext';




export const RenderGallery = () =>{


    const {state} = useContext(MainContext)

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




    console.log(renderGallery(state.gallery, state.width))


    const renderObj = renderGallery(state.gallery, state.width)


    return(
        <div className = 'gallery'>
        {renderObj.renderArray.map((item, i)=>{
                   return(
                        i === renderObj.renderArray.length - 1 ? 
                         <div key = {item} className = 'galleryItem'>
                           <img src = {item} alt = {item}/>
                           <div className = 'galleryMask'>
                                <h3>ещё {renderObj.num} фото</h3> 
                           </div>
                             
                       </div> :

                      <div key = {item} className = 'galleryItem'>
                           <img src = {item} alt = {item}/>
                             
                       </div>
                      
                   )
               })}
               
        </div>
        
               
       
    )
}