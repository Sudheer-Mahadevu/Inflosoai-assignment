import { Button, Stack, TextField, Typography,InputAdornment,IconButton, OutlinedInput,InputLabel, FormControl, Checkbox } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as React from 'react';

export default function SignupForm(){

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return(
        <Stack alignItems={"center"} spacing={3}>
        <Typography variant="h3" sx={{fontFamily:"cursive",color:"#5ff241" ,marginBottom:2}}>
            Signup
        </Typography>
        
        <TextField required sx={{width:400}} label="Email"/> 
        <FormControl>
        <InputLabel htmlFor="outlined-adornment-password">Password *</InputLabel>
        <OutlinedInput
            // input
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            sx={{width:400}}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password *"
          />
          </FormControl>
        <TextField required type="password" sx={{width:400}} label="confirm password"/>
        <Button variant="contained" sx={{color : "#5ff241"}}>Signup</Button>
        </Stack>
    )
}