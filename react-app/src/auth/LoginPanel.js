import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { baseUrl } from '../config';
import { TOKEN_KEY, setUserName, setAvatarURL, setToken, setUserId } from '../store/authentication';

const LoginPanel = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setUserToken] = useState('');

    const dispatch = useDispatch();

    const loginDemo = async (e) => {
        setEmail("demouser@demouser.com");
        setPassword("password");
        e.preventDefault();

        const response = await fetch(`${baseUrl}/users/login`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ emailAddress: "demouser@demouser.com", password: "password" }),
          });

        if (response.ok) {
                const { token, user } = await response.json();
                window.localStorage.setItem(TOKEN_KEY, token);
                window.localStorage.setItem("userId", user.id);
                dispatch(setToken(token));
                dispatch(setUserName(user.name.split(" ")[0]));
                dispatch(setAvatarURL(user.avatarURL));
                dispatch(setUserId(user.id));
                setUserToken(token);
          }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${baseUrl}/users/login`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ emailAddress: email, password }),
          });
          if (response.ok) {
            const { token, user } = await response.json();
            window.localStorage.setItem(TOKEN_KEY, token);
            dispatch(setToken(token));
            dispatch(setUserName(user.name.split(" ")[0]));
            dispatch(setAvatarURL(user.avatarURL));
            dispatch(setUserId(user.id));
            setUserToken(token);
          }
    }

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    if (token) {
        return <Redirect to="/" />;
    }

    return (
        <div>
            <form className="loginForm">
                <div className="loginInput">
                    <div >
                        <label>Email :           </label>
                    </div>
                <input
                    className="inputBox"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={updateEmail}
                    />
               </div>
               <div className="loginInput">
                   <div >
                        <label>Password : </label>
                   </div>
                <input
                    className="inputBox"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={updatePassword}
                />
               </div>

                <button style={{width: "100px", backgroundColor: "white", color: "grey", borderColor:"black"}}onClick={handleSubmit}>Login</button>
                <button style={{width: "100px", backgroundColor: "white", color: "grey", borderColor:"black"}} onClick={loginDemo}>Login Demo</button>
            </form>
        </div>

    )
}

export default LoginPanel;
