import React, {useContext} from 'react'
import './bigGallery.scss'
import { MainContext } from '../../context/MainContext';



export const Controls = (props) =>{

    const {state} = useContext(MainContext)

    return(
        <div className= 'controlsWrap'>
            <div className = 'controls'>

                <div className = 'round' onClick = {props.countMinus}>
                    <i className = 'fa fa-arrow-left'/>
                </div>

                <div className = 'round' onClick = {()=>{
                 state.hideBigPhotoHandler()
                 props.countZero()  
                }}>
                    <i className = 'fa fa-times'/>
                </div>

                <div className = 'round' onClick = {()=> props.countPlus(state.gallery)}>
                    <i className = 'fa fa-arrow-right'/>
                </div>


            </div>

            {/* <div className = 'counter'>
                <h3>{props.count === state.gallery.length ? props.count : props.count + 1}/{state.gallery.length}</h3>
            </div> */}

        </div>
        
    )
}