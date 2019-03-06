
import {createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
const theme = createMuiTheme({
    palette: {
      primary: { main: blue[700] }, // Purple and green play nicely together.
      secondary: { main: red[500] }, // This is just green.A700 as hex.
    },
    typography: { useNextVariants: true },
    title:{
        textAling:'center'

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
  