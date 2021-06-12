import { AUTH_FAVORITES_KEY } from '../utils/constants';
import { storage } from '../utils/storage';

export default function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    }
    case 'SET_SEARCH_FUNCTION': {
      return {
        ...state,
        setSearch: action.payload,
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
      const favorites = state.userInfo ? state.userInfo.favorites || [] : [];
      const newFavorites = [...favorites, { ...action.payload, favorited: true }];
      storage.set(`${AUTH_FAVORITES_KEY}${state.userInfo.googleId}`, newFavorites);
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          favorites: [...newFavorites],
        },
      };
    }
    case 'REMOVE_FAVORITE': {
      const favorites = state.userInfo ? state.userInfo.favorites || [] : [];
      const newFavorites = favorites.filter((favorite) => favorite.id !== action.payload);
      storage.set(`${AUTH_FAVORITES_KEY}${state.userInfo.googleId}`, newFavorites);
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          favorites: [...newFavorites],
        },
      };
    }
    default:
      throw new Error('Unkown action');
  }
}
