import React from 'react';
import './Login.css';

function Login () {
    return (
        <>
            <main>
                <div className="topContainer">
                    <p className="logo">Westagram</p>
                    <div id="userInput">
                        <input type="text" id="userId" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                        <input type="password" id="password" placeholder="비밀번호"/>
                    </div>
                    <button id="loginBtn" onclick="alert('로그인 성공!')" disabled>로그인</button>
                </div>
                <a className="forgotPassword" href>비밀번호를 잊으셨나요?</a>
            </main>
        </>
    );
};

export default Login;