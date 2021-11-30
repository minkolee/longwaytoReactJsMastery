import {Container, CssBaseline} from "@mui/material";
import React from "react";
import LoginPage from "./component/LoginPage";

class App extends React.Component{

    render() {
        return (
            <Container maxWidth="xs">
                <CssBaseline>
                    <LoginPage/>
                </CssBaseline>
            </Container>
        )
    }
}

export default App;
