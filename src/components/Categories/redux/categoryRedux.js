// ACTION_TYPE DEFINATIONS

export const Resources = {
    getCategories: {
      url: 'https://stream-restaurant-menu-svc.herokuapp.com/category',
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
};

// FUNCTIONAL REDUCERS

export function categoriesReducer(state = initialState, action = {}) {
    const {init, success, error} = Resources.getCategories.asyncActions;

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

        default: {
            return {...state};
        }
    }
}
  
// for react - redux connect
export const mapStateToProps = state => {
    const {categoriesReducer: {categories}} = state;

    return {
        categories
    };
};

// action dispatchers

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

export const mapDispatcherToProps = {
    GetAllCategories
}