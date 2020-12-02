import React, { useState } from 'react'
import ImgLog from '../../img/log.svg';
import ImgRegister from '../../img/register.svg';
import Forms from './Forms';

import './styles.css';

const SingInUp = () => {
  const [singIn, setSingIn] = useState(true);

  const onClickBtnSingIn = () => setSingIn(prevState => !prevState);

  let contexto
  { singIn ? contexto = "container" : contexto = "container sign-up-mode" }

  return (
    <>
      <div className={contexto} >

          <Forms />

          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>Novo por aqui ?</h3>
                <p>
                  Clique no botão abaixo para ir para área de registro da aplicação.
              </p>
                <button className="btn transparent" id="sign-up-btn" onClick={onClickBtnSingIn} >
                  Registrar-se
              </button>
              </div>
              <img src={ImgLog} className="image" alt="" />
            </div>

            <div className="panel right-panel">
              <div className="content">
                <h3>Já é registrado ?</h3>
                <p>
                  Clique no botão abaixo para ir para área de login.
              </p>
                <button className="btn transparent" id="sign-in-btn" onClick={onClickBtnSingIn}>
                  Logar-se
              </button>
              </div>
              <img src={ImgRegister} className="image" alt="" />
            </div>
          </div>
        </div>
    </>
  )
}

export default SingInUp;