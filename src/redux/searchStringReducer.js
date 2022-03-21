//selectors
export const getSearchForm = ({searchFraze}) => searchFraze

//actions
const createActionName = actionName => `app/searchFraze/${actionName}`;
const ADD_SEARCH = createActionName('ADD_SEARCH');

export const addSearch = payload => ({type: ADD_SEARCH, payload});

const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case ADD_SEARCH:
        return action.payload.search
      default:
        return statePart;
    }
  }
export default searchStringReducer