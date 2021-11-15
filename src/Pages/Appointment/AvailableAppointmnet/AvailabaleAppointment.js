import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const AvailabaleAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);

    const bookings = [
        {
            id: 1,
            name: 'Teeth Orthodoics',
            time: '08.00 AM - 09.00 AM',
            price:20,
            space: 10,
        },
        {
            id: 2,
            name: 'Cosmetic Orthodocts',
            time: '09.00 AM - 10.00 AM',
            price:30,
            space: 8,
        },
        {
            id: 3,
            name: 'Teeth Cleaning',
            time: '10.00 AM - 11.00 AM',
            price:40,
            space: 9,
        },
        {
            id: 4,
            name: 'Cavity Protection',
            time: '11.00 AM - 12.00 AM',
            price:50,
            space: 5,
        },
        {
            id: 5,
            name: 'Pediatric Dental',
            time: '06.00 PM - 07.00 PM',
            price:60,
            space: 10,
        },
        {
            id: 6,
            name: 'Oral Surgery',
            time: '06.00 PM - 08.00 PM',
            price:70,
            space: 10,
        }
    ]
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', mb: 2 }}>avaliavle appointment on {date.toDateString()}</Typography>
            {setBookingSuccess && <Alert severity="success">booking success</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailabaleAppointment;