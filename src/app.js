//React Library
import React from 'react';
import ReactDOM from 'react-dom';
//Materials Components
import { MuiThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//My Components
import Registro from './components/Registro';
import theme from './theme'

function App() {
  //title variable
  const title = <h1>Sistema de Parquadero</h1>;
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Grid container>
          <Grid item xs={3} sm={3}>
          </Grid>
          <Grid item xs={6} sm={6}>
            <div style={theme.title}>{title}</div>
          </Grid>
          <Grid item xs={3} sm={3}>
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={3} sm={3}>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Paper >
              <Registro style={theme.content} subtitle={"Estimado usuario por favor diligencie todos los campos del formulario"} />
              <br/>
            </Paper>
          </Grid>
          <Grid item xs={3} sm={3}>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));