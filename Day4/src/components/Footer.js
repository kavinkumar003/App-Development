 import React from 'react';
 import './Footer.css';
 import { Container, Grid, Box, Typography, Link, Button } from '@mui/material';
 import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
 import IconButton from '@mui/material/IconButton';
 const Footer = () => {
   return (

<footer className="footer">
<Container maxWidth="lg">
  <Grid container spacing={10}>
    <Grid item xs={12} sm={4}>
      <Box borderBottom={1}>
        <Typography variant="h6">About Us</Typography>
      </Box>
      <Box>
        <Typography variant="body2">
          Our e-learning platform is dedicated to providing top-notch educational resources to help you achieve your learning goals. We offer a wide range of courses and materials designed by experts in their fields.
        </Typography>
      </Box>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Box borderBottom={1}>
        <Typography variant="h6">Quick Links</Typography>
      </Box>
      <Box><Link to="/" color="inherit" className="footer-link">Home</Link></Box>
      <Box><Link to="" color="inherit" className="footer-link">Courses</Link></Box>
      <Box><Link to="" color="inherit" className="footer-link">Contact</Link></Box>
      <Box><Link to="" color="inherit" className="footer-link">FAQ</Link></Box>
    </Grid>
    <Grid item xs={12} sm={4}>
      <Box borderBottom={1}>
        <Typography variant="h6">Follow Us</Typography>
      </Box>
      <Box>
        <IconButton href="https://www.facebook.com" target="_blank" color="inherit">
          <Facebook />
        </IconButton>
        <IconButton href="https://www.twitter.com" target="_blank" color="inherit">
          <Twitter />
        </IconButton>
        <IconButton href="https://www.instagram.com" target="_blank" color="inherit">
          <Instagram />
        </IconButton>
        <IconButton href="https://www.linkedin.com" target="_blank" color="inherit">
          <LinkedIn />
        </IconButton>
      </Box>
    </Grid>
  </Grid>
  <Box textAlign="center" pt={5} pb={5}>
    <Typography variant="body2" color="textSecondary">
      &copy; {new Date().getFullYear()} E-learning Platform. All rights reserved.
    </Typography>
  </Box>
</Container>
</footer>
  );
 };
 export default Footer;
