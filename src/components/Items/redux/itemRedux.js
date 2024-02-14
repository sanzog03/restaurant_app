// ACTION_TYPE DEFINATIONS

export const Resources = {
    getItems: {
      url: 'http://stream-restaurant-menu-svc.herokuapp.com/item?category=',
      asyncActions: {
        init: "ITEMS_INIT",
        success: "ITEMS_SUCCESS",
        error: "ITEMS_ERROR"
      },
    },
  };
  
// FUNCTIONAL STATE

const initialState = {
    items: [],
};

// FUNCTIONAL REDUCERS

export function itemsReducer(state = initialState, action = {}) {
    const {init, success, error} = Resources.getItems.asyncActions;

    switch (action.type) {
        case init: {
            return {...state};
        }

        case success: {
            return {
                ...state,
                items: action.payload,
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
    const {itemsReducer: {items}} = state;

    const {categoriesReducer: {selectedCategory}} = state;
    
    return {
        items,
        selectedCategory
    };
};

// action dispatchers

export const GetAllItems = (category) => {
    const {url} = Resources.getItems;
    const {success, error} = Resources.getItems.asyncActions;
    return async (dispatch, getState) => {
        // api call using url
        try {
            let urlWithQueryParam = url + category
            let response = await fetch(urlWithQueryParam);
            let data = await response.json()
            // then dispatch
            dispatch({type: success, payload: data});    
        } catch {
            dispatch({type: error});    
        }
    }
}

export const mapDispatcherToProps = {
    GetAllItems
}