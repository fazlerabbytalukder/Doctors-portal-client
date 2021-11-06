import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography, Container, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import time from '../../../images/clock.png';
import area from '../../../images/pin.png';
import phone from '../../../images/telephone-call.png';



const bannerBg = {
    background: `url(${bg})`,
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,
    backgroundSize: 'cover',
    backgroundRepeat: 'noRepeat'
}

const flexItem = {
    display: 'flex',
    alignItems: 'center'
}

const Banner = () => {
    return (
        <>
            <Container style={bannerBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid style={{ ...verticalCenter, textAlign: 'left' }} item xs={12} md={6}>
                        <Box>
                            <Typography variant='h3'>
                                Your New Smile <br />Starts Here
                            </Typography>
                            <Typography variant='h6' sx={{ my: 3, fontSize: 13, color: 'gray', fontWeight: 300 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis corrupti est velit cupiditate officia impedit autem soluta quam tempore?
                            </Typography>
                            <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Get Appointment</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} style={verticalCenter}>
                        <img style={{ width: '350px' }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>


            <Box sx={{ flexGrow: 1, paddingRight:'90px', paddingLeft:'90px' }}>
                <Grid style={{marginTop: '-50px'}} container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ minWidth: 275, backgroundColor: '#5CE7ED' }}>
                            <CardContent>
                                <Box style={flexItem}>
                                    <img style={{ width: '50px', marginRight: '10px' }} src={time} alt="" />
                                    <Box>
                                        <Typography variant='h4' sx={{  fontSize: 17, color: 'white', fontWeight: 500, textAlign: 'left' }}>
                                            Opening Hours
                                        </Typography>
                                        <Typography variant='h6' sx={{ fontSize: 13, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                                            Lorem ipsum dolor sit amet consectetur
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <Card sx={{ minWidth: 275, backgroundColor: 'gray' }}>
                            <CardContent>
                                <Box style={flexItem}>
                                    <img style={{ width: '50px', marginRight: '10px' }} src={area} alt="" />
                                    <Box>
                                        <Typography variant='h4' sx={{fontSize: 17, color: 'white', fontWeight: 500, textAlign: 'left' }}>
                                            Our Location
                                        </Typography>
                                        <Typography variant='h6' sx={{ fontSize: 13, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                                            Lorem ipsum dolor sit amet consectetur
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <Card sx={{ minWidth: 275, backgroundColor: '#5CE7ED' }}>
                            <CardContent>
                                <Box style={flexItem}>
                                    <img style={{ width: '50px', marginRight: '10px' }} src={phone} alt="" />
                                    <Box>
                                        <Typography variant='h4' sx={{fontSize: 17, color: 'white', fontWeight: 500, textAlign: 'left' }}>
                                            Call Us
                                        </Typography>
                                        <Typography variant='h6' sx={{ fontSize: 13, color: 'white', fontWeight: 300, textAlign: 'left' }}>
                                            Lorem ipsum dolor sit amet consectetur
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Banner;