import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import people1 from '../../../images/people-1.png'
import people2 from '../../../images/people-2.png'
import people3 from '../../../images/people-3.png'
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';

const testimonialData = [
    {
        id:1,
        name: "Wilson Herry",
        country: "California",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At odio fugit voluptatibus optio reiciendis iste unde voluptate dolorum error nesciunt, et maiores corrupti praesentium voluptatem?",
        img: people1
    },
    {
        id:2,
        name: "Wilson Herry",
        country: "California",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At odio fugit voluptatibus optio reiciendis iste unde voluptate dolorum error nesciunt, et maiores corrupti praesentium voluptatem?",
        img: people2
    },
    {
        id:3,
        name: "Wilson Herry",
        country: "California",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At odio fugit voluptatibus optio reiciendis iste unde voluptate dolorum error nesciunt, et maiores corrupti praesentium voluptatem?",
        img: people3
    }
]

const Testimonial = () => {
    return (
        <Container>
            
            {/* card header part */}
            <Box sx={{ flexGrow: 1, my:8 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                        <Typography variant='h6' sx={{ fontSize: 15, color: '#5CE7ED', fontWeight: 500, textAlign: 'left' }}>
                            TESTIMONIAL
                        </Typography>
                        <Typography variant='h4' sx={{ textAlign: 'left', fontWeight: 400 }}>
                            What's Our Patients <br /> Says
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={4}>

                    </Grid>
                </Grid>
            </Box>



            {/* card component part */}

            <Box sx={{ flexGrow: 1, mb:4 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        testimonialData.map(testimonial => <SingleTestimonial
                        
                            key={testimonial.id}
                            testimonial={testimonial}
                        
                        
                        ></SingleTestimonial>)
                    }
                </Grid>
            </Box>



        </Container>
    );
};

export default Testimonial;