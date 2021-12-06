import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Container, CssBaseline, Link} from "@mui/material";
import AddTodoContainer from "../containers/AddTodoContainer";
import FooterContainer from "../containers/FooterContainer";
import TodoListContainer from "../containers/TodoListContainer";


class App extends React.Component {

    render() {

        return (
            <div>
                <AddTodoContainer />
                <TodoListContainer />
                <FooterContainer />
            </div>
        );
    }

}

export default App;
