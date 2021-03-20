import { combineReducers } from 'redux';


import leagueItemReducer from './leagueItemReducer';
import accountCharactersReducer from './accountCharactersReducer';
import characterItemsReducer from './characterItemsReducer'
import selectItemReducer from './selectItemReducer'


export default combineReducers({
    leagueItem: leagueItemReducer,
    accountCharacters: accountCharactersReducer,
    characterItems: characterItemsReducer,
    selectedItem: selectItemReducer,
});