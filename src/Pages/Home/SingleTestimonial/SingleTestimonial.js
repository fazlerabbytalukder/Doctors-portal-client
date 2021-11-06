import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia, Grid } from '@mui/material';
import { Box } from '@mui/system';

const verticalAlign = {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center'
}

const SingleTestimonial = (props) => {
    const { name, description, country, img } = props.testimonial;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 2 }}>
                <CardContent>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
                        {description}
                    </Typography>
                </CardContent>
                <Box style={{...verticalAlign,textAlign: 'left', marginTop:'25px', marginBottom:'25px'}}>
                    <CardMedia
                        component="img"
                        style={{ width: '50px' }}
                        image={img}
                        alt="Paella dish"
                    />
                    <Box sx={{ml:2}}>
                        <Typography variant="body2" sx={{fontSize: 17, color: '#5CE7ED',fontWeight: 500}} >
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {country}
                        </Typography>
                    </Box>
                </Box>
            </Card>
        </Grid>
    );
};

export default SingleTestimonial;