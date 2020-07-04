import React, {useContext} from 'react'
import './block.scss'
import {MainContext} from '../../context/MainContext'
import { BlockContent } from './BlockContent';
import { BlockImages } from './BlockImages';


export const Block = () =>{

    const {state} = useContext(MainContext)



    return(
        <div className = 'block'>

            <div className = 'blockHead'>
                <h2>
                    {state.block.title}
                </h2>
            </div>
            <BlockContent content = {state.block.content}/>
            <BlockImages content = {state.block}/>

        </div>
    )
}