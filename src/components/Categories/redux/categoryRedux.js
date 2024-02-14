import {GetAllItems} from "../../Items/redux/itemRedux";

// ACTION_TYPE DEFINATIONS

export const Resources = {
    getCategories: {
      url: 'https://stream-restaurant-menu-svc.herokuapp.com/category',
      syncActions: {
        selectCategory: 'SELECTED_CATEGORY',
      },
      asyncActions: {
        init: "CATEGORIES_INIT",
        success: "CATEGORIES_SUCCESS",
        error: "CATEGORIES_ERROR"
      },
    },
  };
  
// FUNCTIONAL STATE

const initialState = {
    categories: [],
    selectedCategory: "SS"
};

// FUNCTIONAL REDUCERS

export function categoriesReducer(state = initialState, action = {}) {
    const {init, success, error} = Resources.getCategories.asyncActions;
    const {selectCategory} = Resources.getCategories.syncActions;

    switch (action.type) {
        case init: {
            return {...state};
        }

        case success: {
            return {
                ...state,
                categories: action.payload,
            };
        }

        case error: {
            return {...state};
        }

        case selectCategory: {
            return {...state, selectedCategory: action.payload}
        }

        default: {
            return {...state};
        }
    }
}
  
// for react - redux connect
export const mapStateToProps = state => {
    const {categoriesReducer: {categories, selectedCategory}} = state;

    return {
        categories,
        selectedCategory
    };
};

// async action dispatchers

const GetAllCategories = () => {
    const {url} = Resources.getCategories;
    const {success, error} = Resources.getCategories.asyncActions;
    return async (dispatch, getState) => {
        // api call using url
        try {
            let response = await fetch(url);
            let data = await response.json()
            // then dispatch
            dispatch({type: success, payload: data});    
        } catch {
            dispatch({type: error});    
        }
    }
}

// sync action dispatchers

const setSelectedCategory = (category) => {
    const {selectCategory} = Resources.getCategories.syncActions;
    return (dispatch, getState) => {
        dispatch({type: selectCategory, payload: category});
    }
}

export const mapDispatcherToProps = {
    GetAllCategories,
    setSelectedCategory,
    GetAllItems
}