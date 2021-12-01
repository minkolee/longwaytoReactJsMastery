import {Container, CssBaseline} from "@mui/material";
import React from "react";
import LoginPage from "./component/LoginPage";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

class App extends React.Component {

    render() {

        return (
            <Router>
                <Route exact path="/">
                    <div>
                        <h2>Main Page</h2>
                        <Link to="/login">Login</Link>
                    </div>
                </Route>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
            </Router>
        )
    }
}

export default App;
