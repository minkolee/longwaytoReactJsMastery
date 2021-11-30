import React from 'react';
import {Box, Button, Checkbox, FormControlLabel, Grid, Link, TextField, Typography} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

class LoginPage extends React.Component {

    handleRemember = (e) => {
        console.log(e.target.checked);
        this.setState({remember: e.target.checked})
    }

    handleUsernameChange = (e) =>{
        console.log(e.target );
        this.setState({username: e.target.value})
    }

    handlePasswordChange = (e) =>{
        console.log(e.target );
        this.setState({password: e.target.value})
    }


    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            remember: false,
        }
    }

    render() {
        return (
            <Box sx={{display: "flex", flexDirection: "column", height: "100vh"}}>
                <Typography align="center" mt={8}>
                    <AccountCircleOutlinedIcon color="success" fontSize="large"/>
                </Typography>
                <Typography align="center" variant="h6">请登录</Typography>
                <Box sx={{textAlign: "center"}}>
                    <TextField fullWidth
                               id="outlined-username-input"
                               label="Username"
                               type="text"
                               autoComplete="current-password"
                               onChange={this.handleUsernameChange}
                    />
                </Box>
                <Box sx={{textAlign: "center", marginTop: "16px"}}>
                    <TextField fullWidth
                               id="outlined-password-input"
                               label="Password"
                               type="password"
                               autoComplete="current-password"
                               onChange={this.handlePasswordChange}
                    />
                </Box>
                <Box>
                    <FormControlLabel
                        label="Remember Me"
                        control={<Checkbox onChange={this.handleRemember}/>}
                    />
                </Box>
                <Grid container>
                    <Grid item xs={12} md>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
                <Box sx={{textAlign: "center", marginTop: "16px"}}>
                    <Button fullWidth variant="contained">Sign In</Button>
                </Box>

            </Box>
        );
    }
}

export default LoginPage;

