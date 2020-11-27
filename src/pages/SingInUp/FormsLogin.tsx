import React from 'react';
import { useHistory } from 'react-router';
import { Notify } from '../../components/Notification';


//import './styles.css';

const FormLogin = () => {
  const history = useHistory();

  const onClickRegister = () => {
    Notify({type:'danger', title:'Register', message:'Dados inválida!', posicao:'top-center'})
  }

  const onClickLogin = () => {
    Notify({type:'danger', title:'Login', message:'Usuário ou senha inválida!', posicao:'bottom-center'})
    //history.push("/main");
  }
  
 
    
  return (
    <>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Logar-se</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" onClick={onClickLogin} />
            <p className="social-text">Ou faça login por uma das redes sociais</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>

          <form action="#" className="sign-up-form">
            <h2 className="title">Registra-se</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Registrar" onClick={onClickRegister}/>
            <p className="social-text">Ou registre-se por uma das redes sociais</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

    </>
  )
};

export default FormLogin;