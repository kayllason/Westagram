import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
    const navigate = useNavigate();

    const goToMain = () => {
        if (true) {
            navigate('/main');
        } else {
            
        }
    };

    return (
        <main className="loginMain">
            <article>
                <div className="topContainer">
                    <p className="logo">Westagram</p>
                    <div id="userInput">
                        <input type="text" id="userId" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                        <input type="password" id="password" placeholder="비밀번호"/>
                    </div>
                    <button id="loginBtn" onClick={goToMain}>로그인</button>
                </div>
                <a className="forgotPassword" href>비밀번호를 잊으셨나요?</a>
            </article>
        </main>
    );
};

export default Login;