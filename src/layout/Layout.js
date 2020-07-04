import React, {useContext, Fragment} from 'react'
import './layout.scss'
import { AddClass } from '../hoc/AddClass';
import { Header } from '../components/header/Header';
import { MainContext } from '../context/MainContext';
import { Loader } from '../components/ui/loader/Loader';
import { TestTask } from '../components/testTask/TestTask';
import { Block } from '../components/block/Block';
import { Gallery } from '../components/gallery/Gallery';



 const Layout = () =>{

    const {state} = useContext(MainContext)

    return(
        <div>
                <div className = 'container'>
               

                {state.loading ? 
                <Fragment>
                     <Header/>
                     <TestTask/>
                     <Block />
                     <Gallery />

                </Fragment>        

                     :
                     <Loader/>
                    }


                




                     
                </div>

        </div>
    )
}



export default AddClass(Layout, 'layout')