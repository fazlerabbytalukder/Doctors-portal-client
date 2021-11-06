import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import featureImg from '../../../images/treatment.png'
import { Button, Container, Typography } from '@mui/material';


const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
}
const verticalleft = {
    display: 'flex',
    alignItems: 'left',
}

const Feature = () => {
    return (
        <Container sx={{ flexGrow: 1,mt:10 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '350px' }} src={featureImg} alt="" />
                </Grid>
                <Grid style={{...verticalCenter}} item xs={12} md={6}>
                    <Box>
                    <Typography variant='h4' sx={{textAlign:'left', fontWeight: 400}}>
                        Exceptional Dental <br /> Care, on Your Terms
                    </Typography>
                    <Typography variant='h6' sx={{ my: 3, fontSize: 15, color: 'gray', fontWeight: 300,textAlign:'left' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis corrupti est velit cupiditate officia impedit autem soluta quam tempore?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa delectus ipsum omnis ipsa nostrum blanditiis rerum dolores cum aut impedit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis corrupti est velit cupiditate officia impedit autem soluta quam tempore?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa delectus ipsum omnis ipsa nostrum blanditiis rerum dolores cum aut impedit!
                        </Typography>
                        <Button  variant="contained" style={{ backgroundColor: '#5CE7ED',...verticalleft }}>Get Appointment</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Feature;