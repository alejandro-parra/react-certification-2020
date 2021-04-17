export default function reducer(state, action) {
  console.log('reducer called');
  switch (action.type) {
    case 'CHANGE_SEARCH': {
      return {
        ...state,
        searchTerm: action.payload,
      };
    }
    case 'TOGGLE_THEME': {
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    }
    default:
      throw new Error('Unkown action');
  }
}
