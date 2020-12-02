import React from 'react';
import { useHistory } from 'react-router';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { Notify } from '../../components/Notification';
import SocialMedia from '../../components/SocialMedia';

type InputsProps = {
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
};

const schema = yup.object().shape({
    username: yup.string()
        .min(3, 'Minímo 3 caracters.')
        .max(60, 'Máximo 60 caracters.')
        .required('Preencher o campo nome.'),
    email: yup.string()
        .required('Preencher o campo e-mail.')
        .email('Informe um e-mail válido.'),
    password: yup.string()
        .min(6, 'Minímo 6 caracters.')
        .max(10, 'Máximo 10 caracters.')
        .required('Preencher o campo Password.'),
    confirmPassword: yup.string()
        .min(6, 'Minímo 6 caracters.')
        .max(10, 'Máximo 10 caracters.')
        .required('Preencher o campo Password.')
        .test('passwords ok', 'Passwords são diferentes', function (value) {
            return this.parent.password === value;
        }),
});


const FormRegister = () => {
    const history = useHistory();

    const { register, handleSubmit, errors } = useForm<InputsProps>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (dataInput: InputsProps) => {

        axios.post('http://127.0.0.1:3333/user', dataInput)
            .then(resp => {
                const { data } = resp;
                if (data) {
                    localStorage.setItem('app-token', data)
                    history.push('/congratulations')
                }
            })
            .catch((error) => {
                console.log('Error return: ' + error);
                Notify({
                    type: 'danger',
                    title: 'Login',
                    posicao: 'top-center',
                    message: 'Erro ao gravar registro.'
                });
            })
    }

    return (
        <>
            <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="title">Registra-se</h2>
                <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input ref={register} name="username" type="text" placeholder="Username" />
                </div>
                <div className="errors">
                    <ErrorMessage errors={errors} name="username" as="p" />
                </div>

                <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <input ref={register} name="email" type="email" placeholder="Email" />
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

                <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input ref={register} name="confirmPassword" type="confirmPassword" placeholder="Confirme o Password" />
                </div>
                <div className="errors">
                    <ErrorMessage errors={errors} name="confirmPassword" as="p" />
                </div>

                <input type="submit" className="btn" value="Registrar" />

                <p className="social-text">Ou registre-se por uma das redes sociais</p>
                <SocialMedia />
            </form>
        </>
    )
}

export default FormRegister;