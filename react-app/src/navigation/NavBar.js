import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';  //set font-size to medium or large
import Badge from '@material-ui/core/Badge';
import HomeIcon from '@material-ui/icons/Home';
import { setSelectedProductType } from '../store/selectedProduct';
import { TOKEN_KEY, removeToken, setUserId, getAvatarURL, setAvatarURL, removeAvatarURL, getUserName, setUserName, removeUserName, removeUserId, removeUserEmail, removeBadgeCount, setBadgeCount, getBadgeCount } from '../store/authentication';

const NavBar = () => {
    const dispatch = useDispatch();

    // const name = useSelector(state => state.authentication.name);
    const avatarURL = useSelector(state => state.authentication.avatarURL);
    const token = useSelector(state => state.authentication.token);
    const userId = useSelector(state => state.authentication.userId);
    const name = useSelector(state => state.authentication.name);
    const badgeCount = useSelector(state => state.authentication.badgeCount);
    const history = useHistory();


    useEffect( () => {
        if (!userId) {
            const uid = window.localStorage.getItem("userId");
            dispatch(setUserId(uid));
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId] )


useEffect( () => {
    (async() => {
        if (userId) {
            let bc = await getBadgeCount(userId);
            dispatch(setBadgeCount(bc));
        }
    })();
}, [badgeCount, dispatch, userId]);

useEffect( () => {
    if (userId) {
    (async() => {
        if (userId) {
            let url = await getAvatarURL(userId);
            dispatch(setAvatarURL(url));
        }
    })();
} else {
    console.log("NavBar:  Error:  No userId!");
}

}, [userId, avatarURL, dispatch]);

useEffect( () => {
    if (userId) {
    (async() => {
        if (userId) {
            let name = await getUserName(userId);
            dispatch(setUserName(name));
        }
    })();
} else {
    console.log("NavBar:  Error:  No userId!");
}

}, [userId, name, dispatch]);

    const handleSignIn = (e) => {
        if (!token) {
            e.preventDefault();
            history.push('/users/logInOrSignUp');
        } else {

            dispatch(removeToken());
            dispatch(removeAvatarURL());
            dispatch(removeUserName());
            dispatch(removeUserEmail());
            dispatch(removeUserId());
            dispatch(removeBadgeCount());

            window.localStorage.removeItem(TOKEN_KEY);
            window.localStorage.removeItem("userId");
            window.localStorage.removeItem("/user/authentication/token");
            history.push('/');
        }
    }

    const handleHomeClick = (e) => {
        e.preventDefault();
        setSelectedProductType('');
        history.push('/');
    }

    const handleCartClick = (e) => {
        e.preventDefault();
        history.push('/cartForm');
    }

    return (
        <div style={{display:"inline-flex", justifyContent:"space-between", width:"100%", borderBottom:"2px solid white"}}>
             <div className="homeShoppingCartIcon" >
                        <HomeIcon className="homeIcon"  onClick={handleHomeClick}style={{margin:"10px", color: "white", fontSize:"40px"}}></HomeIcon>
                        <Badge className={"shoppingCartIcon"} onClick={handleCartClick} badgeContent={badgeCount} color="secondary" >
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
                        <div style={{display:"block"}}>
                        { name ? <h4 style={{marginBottom: "0"}}>Welcome</h4> : null }
                        { name ? <h4 style={{marginTop: "0"}}>{name}!</h4> : null }
                        </div>
                    </div>
            </div>
    )
                        }



export default NavBar;
