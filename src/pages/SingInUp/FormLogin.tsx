import React from 'react';
import { useHistory } from 'react-router';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from "@hookform/error-message";
import * as yup from "yup";
import axios from 'axios';
import { Notify } from '../../components/Notification';
import SocialMedia from '../../components/SocialMedia';

type InputsProps = {
    password: string;
    email: string;
};

const schema = yup.object().shape({
    password: yup.string()
        .min(6, 'Mínimo de 6 caracteres.')
        .max(10, 'Máximo 10 caracters.')
        .required('Infome a senha'),
    email: yup.string()
        .required('Infomre o seu e-mail de login.')
        .email('E-mail inválido.'),
});

const FormLogin = () => {
    const history = useHistory();

    const { register, handleSubmit, errors } = useForm<InputsProps>({
        resolver: yupResolver(schema),
    });

    const onSubmitLogin = (dataInput: InputsProps) => {

        axios.post('http://127.0.0.1:3333/login', dataInput)
            .then(resp => {
                const { data } = resp;
                if (data) {
                    localStorage.setItem('app-token', data)
                    history.push('/')
                }
            })
            .catch((error) => {
                Notify({
                    type: 'danger',
                    title: 'Login',
                    posicao: 'top-center',
                    message: 'Usuário ou senha inválida!'
                })
            })
    }

    return (
        <>
            <form className="sign-in-form" onSubmit={handleSubmit(onSubmitLogin)}>
                <h2 className="title">Logar-se</h2>
                <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input ref={register} name="email" type="text" placeholder="E-mail" />
                </div>
                <div className="errors">
                    <ErrorMessage errors={errors} name="email" as="p" />
                </div>

                <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input ref={register} name="password" type="password" placeholder="Password" />
                </div>
                <div className="errors">
                    <ErrorMessage errors={errors} name="password" as="p" />
                </div>

                <input type="submit" value="Login" className="btn solid" />

                <p className="social-text">Ou faça login por uma das redes sociais</p>
                <SocialMedia />
            </form>

        </>
    )
};

export default FormLogin;