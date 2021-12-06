import {ADD_TODO, TOGGLE_TODO} from "../actions/actionTypes";

// 这个state只是todos的，state是原来state中的todos，也就是一个数组

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {
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

export default todos;