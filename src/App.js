import React from "react";
import LoginPage from "./component/LoginPage";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Container, CssBaseline, Link} from "@mui/material";

class App extends React.Component {

    render() {
        return (
            <Router>
                <Route exact path="/">
                    <Container maxWidth="lg">
                    <CssBaseline>
                    <div>
                        <h2>Main Page</h2>
                        <Link href="/login" color="primary" sx={{textDecoration:"none"}}>登录</Link>
                    </div>
                    </CssBaseline>
                    </Container>
                </Route>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
            </Router>
        )
    }
}

export default App;
