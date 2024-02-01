import React from 'react'
import { AppBar, Container, Toolbar, Grid, Typography } from "@mui/material";
import { Link } from 'react-router-dom';



function TopBar() {
        return (
            <div>
            <AppBar position='fixed'>
                <Container>
                    <Toolbar>
                        <Grid container alignItems='center'>
                            <Grid item xs={3} md={1} lg={2}>
                                <Link to='/Home' style={{ color: 'inherit', textDecoration: 'none' }}>
                                    <Typography color='secondary'>Home</Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={3} md={1} lg={2}>
                                <Link to='/Coments' style={{ color: 'inherit', textDecoration: 'none' }}>
                                    <Typography color='secondary'>Coments</Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={3} md={1} lg={3}>
                                <Link to='/Info' style={{ color: 'inherit', textDecoration: 'none' }}>
                                    <Typography color='secondary'>Info</Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
            </div>
        );
}

export default TopBar;
