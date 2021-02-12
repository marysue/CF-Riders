import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';  //set font-size to medium or large
import Badge from '@material-ui/core/Badge';
import HomeIcon from '@material-ui/icons/Home';
import { } from './store/authentication';
import { setSelectedProductType } from './store/selectedProduct';

// import { createMuiTheme } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/styles';
// import { purple } from '@material-ui/core/colors';
// import imgSrc from './images/girl1.png';
import { TOKEN_KEY, removeToken, setUserId, getAvatarURL, setAvatarURL, removeAvatarURL, getUserName, setUserName, removeUserName, removeUserId, removeUserEmail, removeBadgeCount, setBadgeCount, getBadgeCount } from './store/authentication';


const NavBar = () => {
    const dispatch = useDispatch();

    // const name = useSelector(state => state.authentication.name);
    const avatarURL = useSelector(state => state.authentication.avatarURL);
    const token = useSelector(state => state.authentication.token);
    const userId = useSelector(state => state.authentication.userId);
    const name = useSelector(state => state.authentication.name);
    const badgeCount = useSelector(state => state.authentication.badgeCount);
    const history = useHistory();
    console.log("Hit navbar...badgeCount is: ", badgeCount);

    useEffect( () => {
        if (!userId) {
            const uid = window.localStorage.getItem("userId");
            console.log("NavBar:  no userID.  Getting it from local storage:  ", uid);
            dispatch(setUserId(uid));
        }



        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId] )


useEffect( () => {
    (async() => {
        if (userId) {
            let bc = await getBadgeCount(userId);
            dispatch(setBadgeCount(bc));
            console.log("New badge count is:  ", bc);
        }
    })();
}, [badgeCount, dispatch, userId]);

useEffect( () => {
    if (userId) {
    (async() => {
        if (userId) {
            let url = await getAvatarURL(userId);
            dispatch(setAvatarURL(url));
            console.log("NavBar:  recalling avatarURL and setting in redux store:  ", url);
        }
    })();
} else {
    console.log("NavBar:  No userId!");
}

}, [userId, avatarURL, dispatch]);

useEffect( () => {
    console.log("NavBar: useEffect:  Getting username!");
    if (userId) {
    (async() => {
        if (userId) {
            let name = await getUserName(userId);
            dispatch(setUserName(name));
            console.log("NavBar:  recalling userName and setting in redux store:  ", name);
        }
    })();
} else {
    console.log("NavBar:  No userId!");
}

}, [userId, name, dispatch]);

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
            dispatch(removeBadgeCount());

            window.localStorage.removeItem(TOKEN_KEY);
            window.localStorage.removeItem("userId");

            history.push('/');
        }
    }


    const handleHomeClick = (e) => {
        e.preventDefault();
        console.log("NavBar:  Clicked home button...resetting productType to null");

        setSelectedProductType('');
        history.push('/');
    }


    return (
        <div style={{display:"inline-flex", justifyContent:"space-between", width:"100%", borderBottom:"2px solid white"}}>
            {/* <Container style={{display:"flex", flexDirection: "row", justifyContent:"space-between"}}> */}

                    <div className="homeShoppingCartIcon" >
                        <HomeIcon className="homeIcon"  onClick={handleHomeClick}style={{margin:"10px", color: "white", fontSize:"40px"}}></HomeIcon>
                        <Badge badgeContent={badgeCount} color="secondary" >
                            <ShoppingCartIcon style={{ color: "white", fontSize:"40px"}}></ShoppingCartIcon>
                        </Badge>
                    </div>
                    <div style={{width:"30%"}}>
                        <label className="logoFont" >CF Riders</label>
                    </div>
                    <div className="avatar-container">
                         <button className="signInButton"  onClick={handleSignIn}>{token ? "SignOut" : "SignIn"}</button>
                        { avatarURL ?
                            <img src={avatarURL} className="main-profile-img avatar" alt="avatar"/> :  <img src={"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"} className="main-profile-img avatar" alt="avatar"/> }
                            {/* <i className="fa"></i>{name} */}
                        <div style={{display:"block"}}>
                        { name ? <h4 style={{marginBottom: "0"}}>Welcome</h4> : <h4>Welcome!</h4> }
                        { name ? <h4 style={{marginTop: "0"}}>{name}</h4> : null }
                        </div>
                    </div>
            </div>
    )
                        }



export default NavBar;
