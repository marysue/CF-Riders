import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';  //set font-size to medium or large
import Badge from '@material-ui/core/Badge';
import HomeIcon from '@material-ui/icons/Home';
import Container from '@material-ui/core/Container';
import { baseUrl } from './config';

// import { createMuiTheme } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/styles';
// import { purple } from '@material-ui/core/colors';
// import imgSrc from './images/girl1.png';
import { TOKEN_KEY, removeToken, removeAvatarURL, removeUserName, removeUserEmail, removeUserId } from './store/authentication';


const SearchBar = (props) => {
    const dispatch = useDispatch();
    let searchString = '';
    // const name = useSelector(state => state.authentication.name);
    const avatarURL = useSelector(state => state.authentication.avatarURL);
    const token = useSelector(state => state.authentication.token);
    const userId = useSelector(state => state.authentication.userId);
    const name = useSelector(state => state.authentication.name);
    const [badgeCount, setBadgeCount] = useState(null);


    useEffect( () => {
        if (userId) {
            getBadgeCount();
        } else {
            setBadgeCount(null);
        }
        console.log("Getting badge count.");
    }, [userId] )

    const getBadgeCount = async() => {
        if (userId) {
            console.log("UserId:  ", userId);
            const response = await fetch(`${baseUrl}/carts/cartItems/${userId}`, {
                method: 'get',
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {

                const resp = await response.json();
                const cartItems = resp.cartItems;
                console.log("Got cartItems:  ", cartItems.cartItems);
                if (cartItems > 0) {
                    console.log("Badge count:  ", cartItems);
                    setBadgeCount(cartItems);
                    return cartItems;
                } else {
                    setBadgeCount(null);
                    return null;
                }
            } else {
                console.log("Failed to get badgeCount.");
            }
        } else {
            return null;
        }
};

    const handleSignIn = (e) => {
        if (!token) {
            e.preventDefault();
            console.log("Need to redirect to signin page...");
            //return <Redirect to='/users/login' />;
            //we are rendering ... and rendering React expects in the
            //main return statement.  use window.location here
            // window.location.href ='/users/login';
            window.location.href = '/users/logInOrSignUp';
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

    const handleHomeClick = (e) => {
        e.preventDefault();
        console.log("Clicked home button...");
        window.location.href ='/';
    }

    return (
            <Container style={{display:"flex", justifyContent:"space-around"}}>
                <div className="topBar">

                    <label className="logoFont" style={{color:"white"}}>CF Riders</label>
                    <form onSubmit={handleSubmit}>
                        <input
                            className="navSearchBar"
                            type="text"
                            name="search"
                            onChange={updateSearchString}
                            placeholder="Start shopping..." />
                    </form>
                    <HomeIcon className="homeIcon"  onClick={handleHomeClick}style={{margin:"10px", color: "white"}}></HomeIcon>
                    <Badge badgeContent={badgeCount} color="secondary" >
                        <ShoppingCartIcon style={{ color: "white" }}></ShoppingCartIcon>
                    </Badge>
                    <button className="signInButton"  onClick={handleSignIn}>{token ? "SignOut" : "SignIn"}</button>
                    <div className="avatar-container">
                        {/* <img className="avatar" alt="avatar" src={avatarURL}/> */}
                        {/* <span className="avatarName" >{name}</span> */}
                        { avatarURL ?
                        <img src={avatarURL} className="main-profile-img avatar" alt="avatar"/> :  <img src={"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} className="main-profile-img avatar" alt="avatar"/> }
                        <i className="fa"></i>{name}
                    </div>
                </div>
            </Container>
    )
}

export default SearchBar;
