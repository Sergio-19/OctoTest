import React, {useContext} from 'react'
import './modal.scss'
import { Button } from '../button/Button';
import { MainContext } from '../../../context/MainContext';


export const Modal = () =>{
    const {state} = useContext(MainContext)

    const cls = ['modalWrap']

        if(state.formControls.ready){
            cls.push('modalShow')
        }
    return(
        <div className = {cls.join(' ')}>
            <div className="card">

  <div className="card-body">
    <h5 className="card-title">Сообщение отправлено!</h5>
    <p className="card-text">Имя:&nbsp;{state.formControls.name.value}</p>
    <p className="card-text">Email:&nbsp;{state.formControls.email.value}</p>
    <p className="card-text">Телефон:&nbsp;{state.formControls.phone.value}</p>
    <p className="card-text">Сообщение:&nbsp;{state.formControls.message.value}</p>
    <div style = {{display: 'flex', justifyContent: 'center'}}>
     <Button text = 'Закрыть' classes = 'myBtn' click = {state.clearFormHandler}/>   
    </div>
    
  </div>
</div>
        </div>
    )
}