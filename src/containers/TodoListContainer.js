import {connect} from "react-redux";
import TodoList from "../component/TodoList";
import {fetchTodos, toggleTodo} from "../actions";

import {getVisibleTodos} from "../selectors";

//const {todos, toggleTodo} = this.props;

// TodoList 组件中使用了todos和toggleTodo这两个props中传入的属性
//将state中的属性映射为props属性，其实就是将state（这里是全局state)中的todos映射到props.todos
// 注意，reducer拆分的时候，实际上是将state拆分成了在组合combineReducers对应的各个属性对应的索引

//比如我那里改成mytodo 对应 todos 这个reducer， 相当于将总的state中分出了一块命名为mytodo， 所以下边的代码中的state.mytodo对应的是todos reducer中的自己的state，这个地方终于明白了。
const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state).toJS(),
});

//将dispatch TOGGLETODO 这个action的动作，映射为toggleTodo这个属性，id如何传入呢
const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    fetchTodos: () => dispatch(fetchTodos()),
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
