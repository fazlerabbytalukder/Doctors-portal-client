import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import fluride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';

const services = [
    {
        name: 'Fluoride Treatment',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vitae unde consequuntur similique atque deleniti cupiditate vero incidunt ratione velit?",
        img: fluride
    },
    {
        name: 'Cavity Filling',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vitae unde consequuntur similique atque deleniti cupiditate vero incidunt ratione velit?",
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vitae unde consequuntur similique atque deleniti cupiditate vero incidunt ratione velit?",
        img: whitening
    }
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{fontWeight: 500, color: 'success.main', m:2}} variant="h6">
                    Our Services
                </Typography>
                <Typography sx={{fontWeight: 600,m:2}} variant="h4">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}



                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;