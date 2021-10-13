import React from "react";
import { useHistory } from "react-router-dom";

import '../../../scss/pages/login.scss';

const Login: React.FunctionComponent = () => {

    const history = useHistory();
    const handleConnect = () => {
        history.push('/micuenta');
    }

    return <div className={'login'}>
        <section className={`intro intro-small bg-1`}>
            <h1 className={'absolute-centered text-center intro-title'}>Login</h1>
        </section>
        <section className={'section'}>
            <div className={'container'}>
                <form className={'form-login'}>
                    <div className={'mosaic form-line'} data-valign={'center'}>
                        <div className={'mosaic-item'} data-size={20}><label>Login</label></div>
                        <div className={'mosaic-item'} data-amplitud={'grow'}><input id={'login'} className={'input'} type={'text'} /></div>
                    </div>
                    <div className={'mosaic form-line'} data-valign={'center'}>
                        <div className={'mosaic-item'} data-size={20}><label>Password</label></div>
                        <div className={'mosaic-item'} data-amplitud={'grow'}><input id={'password'} className={'input'} type={'password'} /></div>
                    </div>
                    <div className={'mosaic form-line'} data-valign={'center'}>
                        <div className={'mosaic-item'} data-size={20}></div>
                        <div className={'mosaic-item'} data-amplitud={'grow'}><button onClick={handleConnect} className={'w-100'}>Connect</button></div>
                    </div>
                </form>
            </div>
        </section>
    </div>
}

export default Login;