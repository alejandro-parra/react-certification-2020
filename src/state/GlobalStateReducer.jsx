import { AUTH_USERINFO_KEY, AUTH_FAVORITES_KEY } from '../utils/constants';
import { storage } from '../utils/storage';

export default function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case 'TOGGLE_THEME': {
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    }
    case 'UPDATE_USER_INFO': {
      if (action.payload) {
        const favorites = storage.get(`${AUTH_FAVORITES_KEY}${action.payload.googleId}`);
        if (favorites) {
          return {
            ...state,
            userInfo: {
              ...action.payload,
              favorites,
            },
          };
        }
      }
      return {
        ...state,
        userInfo: action.payload,
      };
    }
    case 'ADD_FAVORITE': {
      const newFavorites = state.userInfo.favorites
        ? [...state.userInfo.favorites, action.payload]
        : [action.payload];
      storage.set(`${AUTH_FAVORITES_KEY}${state.userInfo.googleId}`, newFavorites);
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          favorites: newFavorites,
        },
      };
    }
    case 'REMOVE_FAVORITE': {
      const newFavorites = state.userInfo.favorites.filter(
        (favorite) => favorite.id !== action.payload
      );
      storage.set(`${AUTH_FAVORITES_KEY}${state.userInfo.googleId}`, newFavorites);
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          favorites: newFavorites,
        },
      };
    }
    case 'SET_AUTHENTICATED': {
      if (action.payload) {
        let userInfo = storage.get(AUTH_USERINFO_KEY);
        const favorites = storage.get(`${AUTH_FAVORITES_KEY}${userInfo.googleId}`);
        if (favorites) {
          userInfo = { ...userInfo, favorites };
        }
        return {
          ...state,
          userInfo,
        };
      }
      break;
    }
    default:
      throw new Error('Unkown action');
  }
}
