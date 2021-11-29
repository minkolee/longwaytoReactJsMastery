import {Box, Button, Container, CssBaseline, TextField, Typography} from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const styleBottom = {"verticalAlign": "bottom"};

function App() {
    return (
        <Container maxWidth="xs">
            <CssBaseline>
<Box sx={{display: "flex", flexDirection: "column", height: "100vh", justifyContent: "center"}}>
    <Typography align="center">
        <AccountCircleOutlinedIcon color="primary" fontSize="large"/>
    </Typography>
    <Typography align="center" variant="h6">请登录</Typography>
    <Box sx={{textAlign: "center"}}>
        <TextField fullWidth
                   id="outlined-password-input"
                   label="Username"
                   type="text"
                   autoComplete="current-password"
        />
    </Box>
    <Box sx={{textAlign: "center", marginTop: "16px"}}>
        <TextField fullWidth
                   id="outlined-password-input"
                   label="Password"
                   type="password"
                   autoComplete="current-password"
        />
    </Box>

    <Box sx={{textAlign: "center", marginTop: "16px"}}>
        <Button fullWidth variant="contained">Login</Button>
    </Box>
</Box>
            </CssBaseline>
        </Container>
    );
}

export default App;
