
import {combineReducers} from 'redux'
import {main} from './main'
import {gallery} from './gallery'
import {form} from './form'



export default combineReducers({
   main, gallery, form
})