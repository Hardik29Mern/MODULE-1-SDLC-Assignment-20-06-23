import * as React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/react-logo.png';


function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="logo" component={Link} to="/">
                    <img src={logo} alt="React Logo" style={{ width: 70, height: 40 }} />
                </IconButton>
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                    <Typography variant="h6" component="div">
                       React CRUD Application & Material UI
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
}



export default Navbar;




