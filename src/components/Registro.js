import React from 'react';
//Material Components
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import theme from '../theme';
//Datos
import tiposVehiculos from '../data/tipoVehiculos'
import vehiculos from '../data/vehiculos.json';
/**
 * This class shows the interface to capture
 * information necesary to park system
 */
class Registro extends React.Component {
    listItem(){
        return tiposVehiculos.tipos.map(function(item){
            return(
                <MenuItem value={item.tipo}>{item.tipo}</MenuItem>
            )
        });
    }
    render() {
        //console.log(tiposVehiculos.tipos);

        return (
            <div>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                            id="NombreApellido"
                            label="Nombre y apellidos"
                            placeholder="Ejem: Helder Castrillón"
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="Identificacion"
                            label="identificación"
                            placeholder="Ejem: 12345678"
                            margin="normal"
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <FormControl>
                            <InputLabel>Tipo de Vehículo</InputLabel>
                            <Select>
                                   {
                                       this.listItem()
                                   }

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="date"
                            label="Fecha de ingreso"
                            type="date"
                            defaultValue="2017-05-24"
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                            id="date"
                            label="hora de entrada"
                            type="time"
                            defaultValue="07:30"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="date"
                            label="hora de salida"
                            type="time"
                            defaultValue="08:30"
                        />
                    </Grid>
                </Grid>
                <br/>
                <Grid container style={theme.title}>
                    <Grid item xs={12}>
                        <Button variant="contained" color="secondary">
                            Guardar
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default Registro;