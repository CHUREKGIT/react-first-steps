import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchFraze }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchFraze ));
export const getAllColumns = (column) => column;

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload});
export const addSearch = payload => ({type: 'ADD_SEARCH', payload})

const reducer = (state, action) => {
    switch (action.type){
        case 'ADD_COLUMN':
            return { ...state, columns: [...state.columns, {id: shortid(), title: action.payload.title, icon: action.payload.icon}]};
        case 'ADD_CARD':
            return { ...state, cards: [...state.cards, { id: shortid(), columnId: action.payload.columnId, title: action.payload.title }]}
        case 'ADD_SEARCH':
            return {...state, searchFraze : action.payload.search}
        default:
            return state;
    }
  };
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;