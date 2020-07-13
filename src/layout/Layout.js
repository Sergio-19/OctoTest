import React, {useContext, Fragment} from 'react'
import './layout.scss'
import { AddClass } from '../hoc/AddClass';
import { Header } from '../components/header/Header';
import { MainContext } from '../context/MainContext';
import { Loader } from '../components/ui/loader/Loader';
import { TestTask } from '../components/testTask/TestTask';
import { Block } from '../components/block/Block';
import { Gallery } from '../components/gallery/Gallery';
import { BigGallery } from '../components/bigGallery/BigGallery';
import { Drawer } from '../components/ui/drawer/Drawer';
import { HelloForm } from '../components/helloForm/HelloForm';
import { Modal } from '../components/ui/modal/Modal';
import { Hr } from '../components/ui/hr/Hr';
import { Footer } from '../components/footer/Footer';





 const Layout = () =>{

    const {state} = useContext(MainContext)

    return(
        <div>
                <div className = 'container'>
               

                {state.loading ? 
                <Fragment>
                    <Modal/>
                    <BigGallery/>
                    <Drawer/>
                     <Header/>
                     <TestTask/>
                     <Block />
                     <Gallery />
                     <BigGallery/>
                     <HelloForm/>
                     <Hr color = '#ADADAD'/>
                     <Footer />
                     <Hr color = '#128ACE'/>
                     
                </Fragment>        

                     :
                     <Loader/>
                    }


                




                     
                </div>

        </div>
    )
}



export default AddClass(Layout, 'layout')