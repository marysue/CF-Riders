import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';  //set font-size to medium or large
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import imgSrc from './images/girl1.png';
import { TOKEN_KEY, removeToken, removeAvatarURL, removeUserName, removeUserEmail, removeUserId } from './store/authentication';


const SearchBar = (props) => {
    const dispatch = useDispatch();
    let searchString = '';
    const name = useSelector(state => state.authentication.name);
    const avatarURL = useSelector(state => {
        if (!state.authentication.avatarURL) {
            return imgSrc;
        } else {
            return state.authentication.avatarURL
        }
    });
    const token = useSelector(state => state.authentication.token);


    console.log("AvatarURL:  ", avatarURL);


    const handleSignIn = (e) => {
        if (!token) {
            e.preventDefault();
            console.log("Need to redirect to signin page...");
            //return <Redirect to='/users/login' />;
            //we are rendering ... and rendering React expects in the
            //main return statement.  use window.location here
            window.location.href ='/users/login';
        } else {
            dispatch(removeToken());
            dispatch(removeAvatarURL());
            dispatch(removeUserName());
            dispatch(removeUserEmail());
            dispatch(removeUserId());
            window.localStorage.removeItem(TOKEN_KEY);

        }
    }

    const updateSearchString = (e) => {
        searchString = e.target.value;
        console.log('Search string:  ', searchString);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit handled:  ", searchString);
    }
    return (
            <Container>
                <div className="topBar">

                    <label className="logoFont">CF Riders</label>
                    <form onSubmit={handleSubmit}>
                        <input
                            className="navSearchBar"
                            type="text"
                            name="search"
                            onChange={updateSearchString}
                            placeholder="Start shopping..." />
                    </form>
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCartIcon style={{ color: "grey" }}></ShoppingCartIcon>
                    </Badge>
                    <button className="signInButton"  onClick={handleSignIn}>{token ? "SignOut" : "SignIn"}</button>
                    <div className="avatar-container">
                        <img className="avatar" alt="avatar" src={avatarURL}/>
                        <span className="avatarName" >{name}</span>
                    </div>
                </div>
            </Container>
    )
}

export default SearchBar;
