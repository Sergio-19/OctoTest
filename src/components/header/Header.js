import React from 'react'
import './header.scss'
import logo from '../../images/Logo.png'
import { Nav } from '../nav/Nav';
import { HelloLink } from '../helloLink/HelloLink';


export const Header = () =>{
    return(
        <header>
            <div className = 'logo'>
                <img src = {logo} alt = 'logo'/>
            </div>

            <Nav/>
            <HelloLink/>
        </header>
    )
}