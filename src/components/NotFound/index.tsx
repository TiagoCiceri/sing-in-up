import React from 'react';
import { useHistory } from 'react-router';

import './styles.css';

const NotFound = () => {
    const history = useHistory();

    const onClickMain = () =>{
        history.push('/main')
    }
    return (
        <>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>Oops!</h1>
                        <h2>404 - Página não encontrada.</h2>
                    </div>
                    <a onClick={onClickMain}>Ir para menu</a>
                </div>
            </div>
        </>
    )
};

export default NotFound;