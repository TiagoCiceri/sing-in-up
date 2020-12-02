import React from 'react';
import { useHistory } from 'react-router';

import ImgCongratulations from '../../img/congratulations.svg';
//import ImgCongratulations2 from '../../img/congratulations2.svg';
import './styles.css';

const Congratulations = () => {
    const history = useHistory();

    const onClick = () => {
        history.push('/')
    }

    return (
        <>
            <div className="container" >
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>Registrado com sucesso!</h3>
                            <p>
                                Clique no botão abaixo para acessar o menu da aplicação.
                            </p>
                            <button className="btn transparent" id="sign-up-btn" onClick={onClick} >
                                Acesso ao Menu
                            </button>
                        </div>
                        <img src={ImgCongratulations} className="image" alt="" />
                    </div>
                </div>
            </div>

        </>

    );
}

export default Congratulations;