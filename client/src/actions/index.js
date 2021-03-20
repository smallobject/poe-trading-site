import axios from 'axios';

export const fetchLeagueItem = (item) => async (dispatch) => {
  const response = await axios.post(`http://localhost:1443/item/`, {
    item,
  });

  dispatch({ type: 'FETCH_LEAGUE_ITEM', payload: response.data });
};

export const fetchAccountCharacters = (item) => async (dispatch) => {
  const response = await axios.get(`http://localhost:1443/character/${item}`);

  dispatch({ type: 'FETCH_ACCOUNT_CHARACTERS', payload: response.data });
};

export const fetchCharacterItems = (account, character) => async (dispatch) => {
  const response = await axios.get(
    `http://localhost:1443/characteritems/${account}/${character}`
  );

  dispatch({ type: 'FETCH_CHARACTER_ITEMS', payload: response.data });
};

// the idea is to send the item selected here and then render it in the list, we will use a function inside the render

export const selectCurrentItem = (item) => {
  return {
    type: 'SELECT_ITEM',
    payload: item,
  };
};
