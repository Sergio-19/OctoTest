import React from 'react'
import './gallery.scss'

import { RenderGallery } from './RenderGallery';



export const Gallery = () =>{

   


    return(
        <div className = 'galleryWrap'>
        
            <div className = 'galleryHead'>
                <h2>Галерея с изображениями</h2>
            </div>

            <div className = 'galleryTxt'>
            <p>
            Все просто. Выводится столько фотографий сколько влезит на экран. Те что не влезли рассчитываются и выводится их количество над последней фотографией. По клику на эту подпись так же открывается увеличенное версия того изображения, над которым выводится подпись.
            </p>
            </div>

            <RenderGallery/>
        
        </div>
    )
}