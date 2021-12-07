import {connect} from "react-redux";
import TodoList from "../component/TodoList";
import {fetchTodos, toggleTodo} from "../actions";

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'all':
            return todos;

        case 'active':
            return todos.filter(item => !item.completed);
        case 'completed':
            return todos.filter(item => item.completed);
        default:
            return new Error("Unknown filter:" + filter);
    }
};

//const {todos, toggleTodo} = this.props;

// TodoList 组件中使用了todos和toggleTodo这两个props中传入的属性
//将state中的属性映射为props属性，其实就是将state（这里是全局state)中的todos映射到props.todos
const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos.data, state.filter),
});

//将dispatch TOGGLETODO 这个action的动作，映射为toggleTodo这个属性，id如何传入呢
const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    fetchTodos: () => dispatch(fetchTodos()),
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
