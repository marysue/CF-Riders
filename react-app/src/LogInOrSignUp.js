import React from 'react';
import {useHistory} from 'react-router-dom';
const LogInOrSignUp = ({props}) => {
    const history = useHistory();
    const handleLogin = (e) => {
        e.preventDefault();
        // console.log("Handle login ...");
        history.push({pathname: '/users/login'});
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        // console.log("Handle signIn...");
        history.push({pathname: '/users/signup'});

    }

    return(
        <>
            <div className="centerDiv" >
                <form className="loginOrSignUp" >
                    <h3>Already have an account? </h3>
                    <button id="login" onClick={handleLogin}>Login</button>

                    <h3>Sign up?</h3>
                    <button id="signUp" onClick={handleSignUp}>SignUp</button>
                </form>
            </div>

        </>
    )
};


export default LogInOrSignUp;
