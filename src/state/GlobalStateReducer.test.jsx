import reducer from './GlobalStateReducer';

describe('reducer function', () => {
  it('toggles theme', () => {
    const mockState = {
      theme: 'light',
    };
    const mockAction = {
      type: 'TOGGLE_THEME',
    };
    const result = reducer(mockState, mockAction);
    expect(result.theme).toBe('dark');
  });

  it('defines search closure', () => {
    let result = 'fail';
    const mockClosure = () => {
      result = 'success';
    };
    let currentState = {
      setSearch: () => {},
    };
    const mockAction = {
      type: 'SET_SEARCH_FUNCTION',
      payload: mockClosure,
    };
    currentState = reducer(currentState, mockAction);
    currentState.setSearch();
    expect(result).toBe('success');
  });

  it('updates userInfo object', () => {
    const mockState = {
      userInfo: {
        googleId: 'abc',
      },
    };
    const mockAction = {
      type: 'UPDATE_USER_INFO',
      payload: 'success',
    };
    const result = reducer(mockState, mockAction);
    expect(result.userInfo).toBe('success');
  });

  it('adds favorites', () => {
    const mockState = {
      userInfo: {
        googleId: 'abc',
        favorites: [{ name: 'Lebron James', favorited: true }],
      },
    };
    const mockAction = {
      type: 'ADD_FAVORITE',
      payload: [{ name: 'Roger Federer', favorited: true }],
    };
    const result = reducer(mockState, mockAction);
    expect(result.userInfo.favorites.length).toBe(2);
  });

  it('removes a favorite by id', () => {
    const mockState = {
      userInfo: {
        googleId: 'abc',
        favorites: [
          { id: 1, name: 'Lebron James', favorited: true },
          { id: 2, name: 'Roger Federer', favorited: true },
        ],
      },
    };
    const mockAction = {
      type: 'REMOVE_FAVORITE',
      payload: 2,
    };
    const result = reducer(mockState, mockAction);
    expect(result.userInfo.favorites.length).toBe(1);
    expect(result.userInfo.favorites[0].name).toBe('Lebron James');
  });

  it('doesnt remove a favorite if id is not found', () => {
    const mockState = {
      userInfo: {
        googleId: 'abc',
        favorites: [
          { id: 1, name: 'Lebron James', favorited: true },
          { id: 2, name: 'Roger Federer', favorited: true },
        ],
      },
    };
    const mockAction = {
      type: 'REMOVE_FAVORITE',
      payload: 3,
    };
    const result = reducer(mockState, mockAction);
    expect(result.userInfo.favorites.length).toBe(mockState.userInfo.favorites.length);
  });
});
