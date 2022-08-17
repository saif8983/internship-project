import React from 'react';
import {Box,Container ,Grid,CssBaseline} from '@mui/material'
import { CardMedia,CardContent,Card,CardActionArea, Typography } from '@mui/material';
import { Food, Drinks } from '../utils/Item';
//Homepage commponent 
const Homapage = () => {
  return (
    <>
      <CssBaseline />
{/*Container containe boxes which is maximum width*/}
      <Container maxWidth="100%" style={{ padding: '20px' }}>
        <Box sx={{ bgcolor: '#ffffff', height: '100vh' }} >

          <input className='home-search' type="text" placeholder='Search here...' ></input>

          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            marginTop="30px"
          >
            <div className='home-all-navbar' >All</div>
            <div className='home-navbar' >Food</div>
            <div className='home-navbar'>Drink</div>
            <div className='home-navbar'>Snack</div>
            <div className='home-navbar'>Pakages</div>
          </Grid>
          <hr className='home-hr'></hr>
          <div className='food-title' style={{ marginTop: '30px' }}><h3>Food</h3></div>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {/*Food is array of object which map all data of it in item*/}
            {Food.map((item, index) => (
              <Grid xs={2} sm={4} md={4} key={index}>
                <Card sx={{ maxWidth: '300px' }} style={{ margin: "50px" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="120"
                      image={item.img}
                      alt="No Image"
                    />
                    {/*cardcontent is card detail which have data*/}
                    <CardContent>
                      <Typography gutterBottom  component="div">
                       <div className='card-name-home'>{item.name}</div> 
                      </Typography>
                      <Typography variant="body2" style={{ color: '#42bda1' }}>
                      <div className='card-name-home'>{item.price}</div> 
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
          <div className='drinks-title'><h3>Drinks</h3></div>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Drinks.map((item, index) => (
              <Grid xs={2} sm={4} md={4} key={index}>
                <Card sx={{ maxWidth: '300px' }} style={{ margin: "50px" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="120"
                      image={item.img}
                      alt="No Image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="body2" component="div">
                      <div className='card-name-home'>{item.name}</div> 
                      </Typography>
                      <Typography variant="body2" style={{ color: '#42bda1' }}>
                      <div className='card-name-home'>{item.price}</div> 
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>

        </Box>
      </Container>
    </>
  );
}

export default Homapage;
