import React, {useContext, useState} from 'react'
import './bigGallery.scss'
import { MainContext } from '../../context/MainContext';
import { Controls } from './Controls';
import { RenderBigPhoto } from './RenderBigPhoto';



export const BigGallery = () =>{
    const {state} = useContext(MainContext)

    const [value, setValue] = useState(0)


    function countPlus(gallery){
        setValue(value >= gallery.length ? value : value + 1)
       
    }

    function countMinus(){
        setValue(value < 1 ? value : value - 1)
       
    }

    function countZero(){
        setValue(0)
    }
   

   

    
    return(
        <div className = 'bigGalleryWrap' 
             style = {{display: state.showBigPhoto ? 'block' : 'none'}}
        >

       <Controls countPlus = {countPlus} countMinus = {countMinus} count = {value} countZero = {countZero}/>
        <RenderBigPhoto count = {value}/>
        </div>
    )
} 