import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Container, CssBaseline, Link} from "@mui/material";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            filter: 'all',
        }

        this.nextTodoId = 0;
    }


    render() {

        const todos = this.getVisibleTodos();
        const {filter} = this.state;

        return (
            <div>
                <AddTodo addTodo={this.addTodo}/>
                <TodoList todos={todos} toggleTodo={this.toggleTodo}/>
                <Footer filter={filter} setVisibilityFilter={this.setVisibilityFilter}/>
            </div>
        );
    }

    getVisibleTodos = () => {
        const currentFilter = this.state.filter;
        return this.state.todos.filter((item) => {
            if (currentFilter === "active") {
                return !item.completed;
            } else if (currentFilter === "completed") {
                return item.completed;
            } else {
                return true;
            }
        })
    };

    addTodo = text => {
        const todo = {
            id: this.nextTodoId++,
            text: text,
            completed: false,
        }

        const todos = [todo, ...this.state.todos]

        this.setState((state, props) => (
            {
                todos: todos
            }
        ))
    };

    toggleTodo  = id =>{
        const newTodos = this.state.todos.map(item => {
            return item.id === id ? {...item, completed: !item.completed} : item;
        });

        this.setState({
            todos:newTodos,
        })
    }

    setVisibilityFilter = filter =>{
        this.setState({
            filter: filter
        })
    }

}

export default App;
