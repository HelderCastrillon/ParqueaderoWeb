
import {createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
const theme = createMuiTheme({
    palette: {
      primary: { main: blue[700] }, // Purple and green play nicely together.
      secondary: { main: red[500] }, // This is just green.A700 as hex.
    },
    typography: { useNextVariants: true },
    title:{
        textAlign:'center'
    },
    content:{
        background:grey[100]
    }
  });
 
  export default Object.assign({}, theme, {
      forms: {
          minWidth: 350,
          maxWidth: 750,
      },
      formInput: {
          fontWeight: 100,
      },
  });
  