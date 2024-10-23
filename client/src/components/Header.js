import { Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'

export default function Header(){
    return(
        <AppBar position='static' class = 'navbar' >
            <Typography class='logo'
            variant='h1'
            sx={{
                color:"",
                className:"logo",
                fontFamily: "Playwrite GB S, Cursive",
                fontWeight: 700,
            }}>
                MelodyVerse
            </Typography>
        </AppBar>
    )
}