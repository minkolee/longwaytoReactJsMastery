import React from 'react';
import {
    Box,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

class LoginPage extends React.Component {

    handleRemember = (e) => {
        this.setState({
            remember: e.target.checked,
        })
    }

    handleUsernameChange = (e) => {
        this.setState((state, props) => ({
            username: e.target.value,
            userValid: this.isValid(e.target.value)
        }))
    }

    handlePasswordChange = (e) => {
        this.setState((state, props) => ({
            password: e.target.value,
            passwordValid: this.isValid(e.target.value)
        }))
    }


    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            remember: false,
            userValid: true,
            passwordValid: true,
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let {username, password, remember} = this.state;
        if (this.state.userValid && this.state.passwordValid && this.state.username.length !== 0 && this.state.password.length !== 0) {
            console.log("验证通过，已发送");
        } else {
            console.log("验证未通过，不发送");
            this.setState((state, props) => ({
                userValid: this.isValid(state.username),
                passwordValid: this.isValid(state.password),
            }))
        }
        console.log({username,password, remember});
    }


    isValid = (text) => {
        return !(text.length === 0 || text.includes(" "))
    }


    render() {
        return (
            <Container maxWidth="xs">
                <CssBaseline>
                    <Box sx={{display: "flex", flexDirection: "column", height: "100vh"}}>
                        <Typography align="center" mt={8}>
                            <AccountCircleOutlinedIcon color="success" fontSize="large"/>
                        </Typography>
                        <Typography align="center" variant="h6" sx={{marginBottom: "8px"}}>请登录</Typography>
                        <Box sx={{textAlign: "center"}}>
                            <TextField fullWidth error={!this.state.userValid}
                                       id="outlined-username-input"
                                       label="Username"
                                       type="text"
                                       autoComplete="current-password"
                                       onChange={this.handleUsernameChange}
                            />
                        </Box>
                        <Box sx={{textAlign: "center", marginTop: "16px"}}>
                            <TextField fullWidth error={!this.state.passwordValid}
                                       id="outlined-password-input"
                                       label="Password"
                                       type="password"
                                       autoComplete="current-password"
                                       onChange={this.handlePasswordChange}
                            />
                        </Box>
                        <Box>
                            <FormControlLabel
                                label="记住我"
                                control={<Checkbox onChange={this.handleRemember}/>}
                            />
                        </Box>
                        <Grid container>
                            <Grid item xs={12} md>
                                <Link href="#" variant="body2">
                                    忘记密码
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    注册新账户
                                </Link>
                            </Grid>
                        </Grid>
                        <Box sx={{textAlign: "center", marginTop: "16px"}}>
                            <Button fullWidth variant="contained" onClick={this.handleSubmit}>Sign In</Button>
                        </Box>

                    </Box>
                </CssBaseline>
            </Container>
        );
    }
}

export default LoginPage;

