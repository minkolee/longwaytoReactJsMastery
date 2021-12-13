import {
    ADD_TODO,
    FETCH_TODOS_FAILURE,
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    TOGGLE_TODO
} from "../actions/actionTypes";

import Immutable from "immutable";


const initialState = {
    isFetching: false,
    error: null,
    data: [],
};

const reducer = (state = Immutable.fromJS(initialState) , action) => {
    switch (action.type) {
        case FETCH_TODOS_REQUEST:
            return state.set("isFetching", true);
            // return {
            //     ...state,
            //     isFetching: true,
            // };
        case FETCH_TODOS_SUCCESS:
            return state.merge({
                isFetching: false,
                data: Immutable.fromJS(action.data),
            });

            // return {
            //     ...state,
            //     isFetching: false,
            //     data: action.data,
            // };
        case FETCH_TODOS_FAILURE:
            return state.merge({
                isFetching: false,
                // action.error是字符串，本身就是不可变类型，无需再转换
                error: action.error,
            });


            // return {
            //     ...state,
            //     isFetching: false,
            //     error: action.error,
            // }
        default:
            const data = state.get("data");
            return state.set("data", todos(data, action));
            // return {
            //     ...state,
            //     //调用子reducer
            //     data: todos(state.data,action),
            // }
    }
}


// 这个state只是todos的，state是原来state中的todos，也就是一个数组

const todos = (state = state.fromJS([]), action) => {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = Immutable.fromJS(
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                }
            )
            //返回新的不可变对象
            return state.push(newTodo);

        case TOGGLE_TODO:

            return state.map(
                todo => todo.get("id") === action.id ? todo.set("completed", !todo.get("completed")):
                    todo
            );

            // return state.map((item) => {
            //     return item.id === action.id ? {...item, completed: !item.completed} : item;
            // })

        default:
            return state;
    }
};

// export default todos;

// 这里需要导出新的reducer，无需导出原来的todos
export default reducer;