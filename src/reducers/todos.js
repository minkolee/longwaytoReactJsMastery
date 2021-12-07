import {
    ADD_TODO,
    FETCH_TODOS_FAILURE,
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    TOGGLE_TODO
} from "../actions/actionTypes";


const initialState = {
    isFetching: false,
    error: null,
    data: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data,
            };
        case FETCH_TODOS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            }
        default:
            return {
                ...state,
                //调用子reducer
                data: todos(state.data,action),
            }
    }
}


// 这个state只是todos的，state是原来state中的todos，也就是一个数组

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {
                id: action.id,
                text: action.text,
                completed: false,
            }]

        case TOGGLE_TODO:
            return state.map((item) => {
                return item.id === action.id ? {...item, completed: !item.completed} : item;
            })

        default:
            return state;
    }
};

// export default todos;

// 这里需要导出新的reducer，无需导出原来的todos
export default reducer;