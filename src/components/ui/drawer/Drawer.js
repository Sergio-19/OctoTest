import React, {useContext} from 'react'
import './drawer.scss'
import {MainContext} from '../../../context/MainContext'


export const Drawer = () =>{
    const {state} = useContext(MainContext)


    return(
        <div className = 'drawer'
             style = {{display: state.showBigPhoto || state.formControls.ready ? 'block' : 'none'}}   
        ></div>
    )
}