import React from 'react';
import './app.scss';
import {connect} from 'react-redux'
import Layout from './layout/Layout';
import {MainContext} from './context/MainContext'
import { getMain, getWidth } from './redux/actionCreators/main';


const width = document.body.clientWidth > 1320 ? 1320 : document.body.clientWidth

class App extends React.Component{




componentDidMount(){
  this.props.getMain()
  this.props.getWidth(width)
}




  render(){

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
    width: state.main.width
   
   


  }
}

function mapDispatchToProps(dispatch){
  return{

    getMain: ()=> dispatch(getMain()),
    getWidth: (width)=> dispatch(getWidth(width))
 

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)

