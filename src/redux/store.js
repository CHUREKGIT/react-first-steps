import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchFraze }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchFraze ));
//export const getAllColumns = (column) => column;
export const getListById = ({lists}, listId) => lists.find(list => list.id === listId);
export const getFilteredColumns = ({columns}, listId) => columns
  .filter(column => column.listId === listId);
export const getAllLists = ({lists}) => lists;
export const getSearchForm = ({searchFraze}) => searchFraze

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload});
export const addSearch = payload => ({type: 'ADD_SEARCH', payload})
export const addList = payload => ({type: 'ADD_LIST', payload})

const reducer = (state, action) => {
    switch (action.type){
        case 'ADD_COLUMN':
            return { ...state, columns: [...state.columns, {id: shortid(), title: action.payload.title, icon: action.payload.icon, listId: action.payload.listId}]};
        case 'ADD_CARD':
            return { ...state, cards: [...state.cards, { id: shortid(), columnId: action.payload.columnId, title: action.payload.title }]}
        case 'ADD_SEARCH':
            return {...state, searchFraze : action.payload.search}
        case 'ADD_LIST':
            return { ...state, lists: [...state.lists, { id: shortid(), title: action.payload.title, description: action.payload.description }]}
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