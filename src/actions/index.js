import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_FILTER,
    SET_TODO_TEXT,
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE
} from "./actionTypes";


let nextTodoId = 0;


export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text: text,
})

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id,
})

export const setFilter = filter => ({
    type: SET_FILTER,
    filter,
})

export const setTodoText = text => ({
    type: SET_TODO_TEXT,
    text,
})

// 异步action

const fetchTodosRequest = () => ({
    type: FETCH_TODOS_REQUEST
})

const fetchTodosSuccess = (data) => ({
    type: FETCH_TODOS_SUCCESS,
    data,
})

const fetchTodosFailure = (error) => ({
    type: FETCH_TODOS_FAILURE,
    error,
})

// 这个就是异步action，action正常情况是一个普通的js对象，但这里返回的是一个函数
export const fetchTodos = () => {
    return (dispatch) => {
        dispatch(fetchTodosRequest());
        return fetch("./mock/todos.json").then(
            response => {
                response.json().then(data => {
                        dispatch(fetchTodosSuccess(data))
                    }
                )
            },
            error => {
                dispatch(fetchTodosFailure(error));
                console.log("An error occured: " + error)
            }
        );
    }
}