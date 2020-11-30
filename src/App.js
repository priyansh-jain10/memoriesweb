import React from 'react';
import Post from './components/Posts';
import Form from './components/Form';
import {Container,Appbar,Typography,Grow,Grid} from '@material-ui/core';
const App = () => {
    const classes =useStyles();

    return ( 
       <Container maxwidth="lg">
            <Appbar className={classes.Appbar} position="static" color="inheit">
            <Typography className={classes.heading} variant="h2" align="center">Memories  </Typography>
            <img src=""> </img>
            </Appbar>
            <Grow in>
                <Container>
                    <Grid Container justify="space-between" alignItems="stretch " Spacing="12" >
                        <Grid item xs={12} sm={7}>
                        <Post/>  
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <Form/> 
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
       </Container>
      

    );
}
export default App;