import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import contactBg from '../../../images/bg.png';

const contactBackground = {
    background: `url(${contactBg})`,
    backgroundColor: 'rgba(45,58,74,0.9)',
    backgroundBlendMode: 'darken, luminosity',
    paddingTop:'10px',
    paddingBottom:'40px'
}

const ContactUs = () => {
    return (
        <Container style={contactBackground}>
            <Box>
                <Box sx={{my:5}}>
                    <Typography variant='h6' sx={{ fontSize: 15, color: '#5CE7ED', fontWeight: 500 }}>
                        CONTACT US
                    </Typography>
                    <Typography variant='h4' sx={{ fontWeight: 400, color: 'white' }}>
                        Always Contact With us
                    </Typography>
                </Box>


                <form>
                    <TextField
                        sx={{ width: '50%', m: 1, backgroundColor: "white" }}
                        id="filled-size-small"
                        defaultValue="Email Address*"
                        size="small"
                    />
                    <TextField
                        sx={{ width: '50%', m: 1, backgroundColor: "white" }}
                        id="filled-size-small"
                        defaultValue="Subject"
                        size="small"
                    />
                    <br />
                    <TextareaAutosize
                        style={{ width: '49.3%', borderRadius: '3px', borderColor: 'gray', paddingBottom: '25px', marginBottom: '20px', marginTop:'8px' }}
                        aria-label="minimum height"
                        minRows={3}
                        defaultValue="Your Message"
                    />
                    <br />
                    <Button type="submit" variant="contained">Submit</Button>
                </form>

            </Box>
        </Container>
    );
};

export default ContactUs;