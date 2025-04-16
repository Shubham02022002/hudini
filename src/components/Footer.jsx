import React from 'react';
import {
  Box, Container, Typography, TextField, Button, Divider, Stack
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import hudiniLogo from "../assets/hudini-logo.png";
import evaReady from "../assets/evaReady.png";

const footerLinks = [
  { title: "Company", items: ["About Us", "Careers", "Contact us"] },
  { title: "Resources", items: ["Experiences", "Partners", "Blog"] },
  { title: "Media", items: ["Case Studies", "Press"] }
];

const Footer = () => (
  <Box sx={{ backgroundColor: '#121212', color: '#fff', py: 6 }}>
    <Container maxWidth="lg">

      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2, mb: 4 }}>
        <Box>
          <Box component="img" src={hudiniLogo} alt="Hudini" sx={{ height: '60px' }} />
          <Typography variant="h6" sx={{ color: '#aaa' }}>Engage, Elevate.</Typography>
        </Box>
        <Box component="img" src={evaReady} alt="Eva Ready" sx={{ height: '50px' }} />
      </Box>

      <Divider sx={{ borderColor: '#333', mb: 5 }} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4, mb: 5 }}>
        <Box sx={{ display: 'flex', gap: { xs: 4, md: 8 }, flexWrap: 'wrap' }}>
          {footerLinks.map(section => (
            <Box key={section.title}>
              <Typography sx={{ mb: 2, fontWeight: 600 }}>{section.title}</Typography>
              <Stack spacing={1.5}>
                {section.items.map(item => (
                  <Button key={item} sx={{ p: 0, color: '#ccc', textTransform: 'none', '&:hover': { color: '#fff' } }}>
                    {item}
                  </Button>
                ))}
              </Stack>
            </Box>
          ))}
        </Box>

        <Box sx={{ minWidth: { xs: '100%', sm: '300px' }, maxWidth: '400px' }}>
          <Typography sx={{ mb: 2, fontWeight: 600 }}>Join our mailing list</Typography>
          <Stack spacing={2}>
            <TextField placeholder="Enter your email" size="small" fullWidth
              sx={{
                input: { color: '#fff' },
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#1e1e1e',
                  '& fieldset': { borderColor: '#333' },
                  '&:hover fieldset': { borderColor: '#555' },
                  '&.Mui-focused fieldset': { borderColor: '#666' }
                }
              }} />
            <Button variant="contained" sx={{ backgroundColor: 'black', borderRadius: '20px', px: 4 }}>
              Subscribe
            </Button>
          </Stack>
        </Box>
      </Box>

      <Divider sx={{ borderColor: '#333', mb: 3 }} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
        <Typography sx={{ color: '#aaa', fontSize: '0.85rem' }}>
          Hudini © 2025. All Rights Reserved. Privacy & Terms.
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LinkedInIcon sx={{ color: '#aaa', fontSize: '1.2rem' }} />
          <Typography sx={{ color: '#aaa', fontSize: '0.85rem' }}>LinkedIn</Typography>
        </Box>
      </Box>

    </Container>
  </Box>
);

export default Footer;
