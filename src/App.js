import React from 'react';
import './app.scss';
import {connect} from 'react-redux'
import Layout from './layout/Layout';
import {MainContext} from './context/MainContext'
import { getMain, getWidth } from './redux/actionCreators/main';
import { showAllPhoto, hideAllPhoto, showBigPhoto, hideBigPhoto } from './redux/actionCreators/gallery';
import { onChangeHandler, checkHandler, textChangeHandler, sendFormHandler, clearFormHandler} from './redux/actionCreators/form';


const width = document.body.clientWidth > 1320 ? 1320 : document.body.clientWidth

class App extends React.Component{




componentDidMount(){
  this.props.getMain()
  this.props.getWidth(width)
}




  render(){

    // console.log(this.props.formControls.email.valid)

      return(

        <MainContext.Provider value = {{state: this.props}}>
          <Layout/>
        </MainContext.Provider>
        
      )


  }
}


function mapStateToProps(state){
  return{
    content: state.main.content,
    name: state.main.name,
    gallery: state.main.gallery,
    block: state.main.block,
    loading: state.main.loading,
    width: state.main.width,
    allPhoto: state.gallery.allPhoto,
    showBigPhoto: state.gallery.showBigPhoto,
    photoId: state.gallery.photoId,
    formControls: state.form
   
   


  }
}

function mapDispatchToProps(dispatch){
  return{

    getMain: ()=> dispatch(getMain()),
    getWidth: (width)=> dispatch(getWidth(width)),
    showAllPhoto: ()=> dispatch(showAllPhoto()),
    hideAllPhoto: ()=> dispatch(hideAllPhoto()),
    showBigPhotoHandler: (id)=> dispatch(showBigPhoto(id)),
    hideBigPhotoHandler: ()=> dispatch(hideBigPhoto()),
    onChangeHandler: (event, control)=> dispatch(onChangeHandler(event, control)),
    checkHandler: ()=> dispatch(checkHandler()),
    textChangeHandler: (event)=> dispatch(textChangeHandler(event)),
    sendFormHandler: ()=> dispatch(sendFormHandler()),
    clearFormHandler: ()=> dispatch(clearFormHandler())

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)

