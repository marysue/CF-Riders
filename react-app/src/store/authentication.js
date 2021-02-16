import { baseUrl } from '../config';

export const TOKEN_KEY = 'user/authentication/token';
export const SET_TOKEN = 'user/authentication/SET_TOKEN';
export const REMOVE_TOKEN = 'user/authentication/REMOVE_TOKEN';
export const SET_AVATAR_URL = 'user/authentication/SET_AVATAR';
export const REMOVE_AVATAR_URL = 'user/authentication/REMOVE_AVATAR';
export const SET_USER_NAME = 'user/authentication/SET_USER_NAME';
export const REMOVE_USER_NAME = 'user/authentication/REMOVE_USER_NAME';
export const SET_USER_EMAIL = 'user/authentication/SET_USER_EMAIL';
export const REMOVE_USER_EMAIL = 'user/authentication/REMOVE_USER_EMAIL';
export const SET_USER_ID = 'user/authentication/SET_USER_ID';
export const REMOVE_USER_ID = 'user/authentication/REMOVE_USER_ID';
export const SET_BADGE_COUNT = 'user/authentication/SET_BADGE_COUNT';
export const REMOVE_BADGE_COUNT = 'user/authentication/REMOVE_BADGE_COUNT';

//actions
export const removeToken = token => ({ type: REMOVE_TOKEN });
export const setToken = token => ({ type: SET_TOKEN, token });
export const removeAvatarURL = () => ( {type: REMOVE_AVATAR_URL});
export const setAvatarURL = avatarURL => ({ type: SET_AVATAR_URL, avatarURL});
export const removeUserName = () => ({ type: REMOVE_USER_NAME })
export const setUserName = name => ({ type: SET_USER_NAME, name});
export const removeUserEmail = () => ({type: REMOVE_USER_EMAIL});
export const setUserEmail = emailAddress => ({ type: SET_USER_EMAIL, emailAddress});
export const removeUserId = () => ({ type: REMOVE_USER_ID });
export const setUserId = id => ({ type: SET_USER_ID, id});
export const setBadgeCount = count => ({ type: SET_BADGE_COUNT, count});
export const removeBadgeCount = () => ({ type: REMOVE_BADGE_COUNT});

//thunks
export const loadToken = () => async dispatch => {
  const token = window.localStorage.getItem(TOKEN_KEY);
  if (token) {
    dispatch(setToken(token));
  }
};

export const getUserInfo = (emailAddress) => async dispatch => {
  const response = await fetch(`${baseUrl}/users/avatarInfo`, {
       method: 'post',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({emailAddress}),
    });

    if (response.ok) {
        const {avatarURL, name, id} = await response.json();
        if (avatarURL) {
          dispatch(setAvatarURL(avatarURL))
        } else {
          dispatch(setAvatarURL('https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'));
        }
        dispatch(setUserName(name.split(" ")[0]));
        dispatch(setUserId(id));
    }
};

export const logout = () => async (dispatch) => {
    window.localStorage.removeItem(TOKEN_KEY);
    dispatch(removeToken());

}

// just a function
export const getAvatarURL = async(userId) => {
  const response = await fetch(`${baseUrl}/users/avatarURL/${userId}`);
  if (response.ok) {
    const resp = await response.json();
    return resp.avatarURL;
  }
}

export const getUserName = async(userId) => {
  const response = await fetch(`${baseUrl}/users/userName/${userId}`);
  if (response.ok) {
    const resp = await response.json();
    return resp.userName;
  }
}

export const getToken = async (emailAddress, password) => {
   const response = await fetch(`${baseUrl}/users/token`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({emailAddress, password}),
    });

    if (response.ok) {
        const { token } = await response.json();
        window.localStorage.setItem("token", token);
        return token;
    }
};

//reducers
export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    case SET_BADGE_COUNT: {
      const newState = {...state };
      newState.badgeCount = action.count;
      return newState;
    }
    case REMOVE_BADGE_COUNT: {
      const newState = {...state };
      delete newState.badgeCount;
      return newState;
    }

    case REMOVE_TOKEN: {
      const newState = { ...state };
      delete newState.token;
      return newState;
    }

    case SET_AVATAR_URL: {
        const newState = { ...state };
        newState.avatarURL = action.avatarURL;
        return newState;
    }

    case REMOVE_AVATAR_URL: {
      const newState = { ...state};
      delete newState.avatarURL;
      return newState;
    }

    case SET_USER_NAME: {
        const newState = { ...state };
        newState.name = action.name;
        return newState;
    }

    case REMOVE_USER_NAME: {
      const newState = { ...state };
      delete newState.name;
      return newState;
    }

    case SET_USER_EMAIL: {
      const newState = { ...state };
      newState.emailAddress = action.emailAddress;
      return newState;
    }

    case REMOVE_USER_EMAIL: {
      const newState = { ...state};
      delete newState.emailAddress;
      return newState;
    }

    case SET_USER_ID: {
      const newState = { ...state};
      newState.userId = action.id;
      return newState;
    }

    case REMOVE_USER_ID: {
      const newState = { ...state};
      delete newState.userId;
      return newState;
    }

    default: return state;
  }
}

export const getBadgeCount = async(userId) => {
    const response = await fetch(`${baseUrl}/carts/cartItemCount/${userId}`, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        const cartItems = await response.json();
        return cartItems.cartItems;
    } else {
        // console.log("Failed to get badgeCount.");
        return 0;
    }
}
