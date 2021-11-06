import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import footerBg from '../../../images/footer-bg.png';


const footerBackground = {
    background: `url(${footerBg})`,
    paddingTop:'40px',
    paddingBottom: '40px',
    backgroundSize: 'cover',
    backgroundRepeat:'noRepeat'
}


const Footer = () => {
    return (
        <Box style={footerBackground}>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'gray', fontWeight: 300, textAlign: 'left', paddingTop: 5 }}>
                            Emergency Dental Care
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'gray', fontWeight: 300, textAlign: 'left' }}>
                            Check Up
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'gray', fontWeight: 300, textAlign: 'left' }}>
                            Treatment of personal Disease
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'gray', fontWeight: 300, textAlign: 'left' }}>
                            Tooth Examination
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'gray', fontWeight: 300, textAlign: 'left' }}>
                            Check Up
                        </Typography>
                    </Grid>



                    <Grid item xs={12} md={3}>
                        <Typography variant='h5' sx={{ my: 2, fontSize: 20, color: 'gray', fontWeight: 500, textAlign: 'left', color: '#5CE7ED' }}>
                            Services
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'gray', fontWeight: 300, textAlign: 'left' }}>
                            Emergency Dental Care
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'gray', fontWeight: 300, textAlign: 'left' }}>
                            Check Up
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'gray', fontWeight: 300, textAlign: 'left' }}>
                            Treatment of personal Disease
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'gray', fontWeight: 300, textAlign: 'left' }}>
                            Tooth Examination
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'gray', fontWeight: 300, textAlign: 'left' }}>
                            Check Up
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'gray', fontWeight: 300, textAlign: 'left' }}>
                            Check Up
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'gray', fontWeight: 300, textAlign: 'left' }}>
                            Check Up
                        </Typography>
                    </Grid>



                    <Grid item xs={12} md={3}>
                        <Typography variant='h5' sx={{ my: 2, fontSize: 20, color: 'gray', fontWeight: 500, textAlign: 'left', color: '#5CE7ED' }}>
                            Oral Health
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'gray', fontWeight: 300, textAlign: 'left' }}>
                            Emergency Dental Care
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'gray', fontWeight: 300, textAlign: 'left' }}>
                            Check Up
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'gray', fontWeight: 300, textAlign: 'left' }}>
                            Treatment of personal Disease
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'gray', fontWeight: 300, textAlign: 'left' }}>
                            Tooth Examination
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'gray', fontWeight: 300, textAlign: 'left' }}>
                            Check Up
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'gray', fontWeight: 300, textAlign: 'left' }}>
                            Check Up
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'gray', fontWeight: 300, textAlign: 'left' }}>
                            Check Up
                        </Typography>
                    </Grid>



                    <Grid item xs={12} md={3}>
                        <Typography variant='h5' sx={{ my: 2, fontSize: 20, color: 'gray', fontWeight: 500, textAlign: 'left', color: '#5CE7ED' }}>
                            Our Address
                        </Typography>
                        <Typography variant='h6' sx={{ my: 2, fontSize: 14, color: 'gray', fontWeight: 300, textAlign: 'left' }}>
                            New York - 101010110 Hudson yards
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;