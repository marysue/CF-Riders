import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';  //set font-size to medium or large
import Badge from '@material-ui/core/Badge';
import HomeIcon from '@material-ui/icons/Home';
import Container from '@material-ui/core/Container';
import { setUserId } from './store/authentication';
import { setSelectedProductType } from './store/selectedProduct';

// import { createMuiTheme } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/styles';
// import { purple } from '@material-ui/core/colors';
// import imgSrc from './images/girl1.png';
import { TOKEN_KEY, removeToken, removeAvatarURL, removeUserName, removeUserEmail, removeUserId, setBadgeCount, getBadgeCount } from './store/authentication';


const NavBar = () => {
    const dispatch = useDispatch();
    let searchString = '';
    // const name = useSelector(state => state.authentication.name);
    const avatarURL = useSelector(state => state.authentication.avatarURL);
    const token = useSelector(state => state.authentication.token);
    const userId = useSelector(state => state.authentication.userId);
    const name = useSelector(state => state.authentication.name);
    const badgeCount = useSelector(state => state.authentication.badgeCount);
    const history = useHistory();
    const productType = useSelector(state => state.selectedProduct.productType);

    console.log("Hit navbar...badgeCount is: ", badgeCount);

    useEffect( () => {
        console.log("userId: ", userId);
        const uid = window.localStorage.getItem("userId");
        if (!userId) {
            dispatch(setUserId(uid));
        }
        if (!avatarURL) {

        }
        (async() => {
            if (userId) {
                //console.log("getting the badge count.");
                let bc = await getBadgeCount(userId);
                dispatch(setBadgeCount(bc));
                console.log("Badge count:  ", bc);
            }
        })();

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

useEffect( () => {
    console.log("Badgecount changed: ", badgeCount);
    if (!userId) {
        dispatch(setUserId(window.localStorage.getItem("userId")));
    }
    (async() => {
        if (userId) {
            let bc = await getBadgeCount(userId);
            dispatch(setBadgeCount(bc));
            console.log("New badge count is:  ", bc);
        }
    })();
}, [badgeCount, userId, dispatch]);


    const handleSignIn = (e) => {
        if (!token) {
            e.preventDefault();
            history.push('/users/logInOrSignUp');
        } else {
            alert("NavBar: Line 79:  SIGN IN IS LOGGING OFF!!!");
            console.log("************SIGN IN IS LOGGING OFF!!!*****************");
            dispatch(removeToken());
            dispatch(removeAvatarURL());
            dispatch(removeUserName());
            dispatch(removeUserEmail());
            dispatch(removeUserId());

            window.localStorage.removeItem(TOKEN_KEY);
            window.localStorage.removeItem("userId");

            history.push('/');
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
        console.log("NavBar:  Clicked home button...resetting productType to null");

        setSelectedProductType('');
        history.push('/');
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



export default NavBar;
