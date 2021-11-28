import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import AccountBalanceWalletSharpIcon from '@mui/icons-material/AccountBalanceWalletSharp';

const styleBottom = {"verticalAlign": "bottom"};

function App() {
  return (
    <div>
      <ul>
        <li >Filled: <AccountBalanceWalletIcon  color="primary" fontSize="small" style={styleBottom}/></li>
        <li>Outlined: <AccountBalanceWalletOutlinedIcon color="secondary" style={styleBottom}/></li>
        <li>Rounded: <AccountBalanceWalletRoundedIcon color="success" fontSize="large" style={styleBottom}/></li>
        <li>TwoTone: <AccountBalanceWalletTwoToneIcon color="action" style={styleBottom}/></li>
        <li>Sharp: <AccountBalanceWalletSharpIcon color="disabled" sx={{fontSize:40}} style={styleBottom}/></li>
      </ul>
   </div>
  );
}

export default App;
