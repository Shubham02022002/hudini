import React from 'react';
import {
  Box, Container, Typography, TextField, Button, Divider, Stack
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import hudiniLogo from "../assets/hudini-logo.png";
import evaReady from "../assets/evaReady.png";
import { useAtomValue } from 'jotai';
import { themeAtom } from '../jotai/Atoms';

const footerLinks = [
  { title: "Company", items: ["About Us", "Careers", "Contact us"] },
  { title: "Resources", items: ["Experiences", "Partners", "Blog"] },
  { title: "Media", items: ["Case Studies", "Press"] }
];

const Footer = () => {
  const darkTheme = useAtomValue(themeAtom);
  const colors = {
    bg: darkTheme ? '#121212' : '#f5f5f5',
    text: darkTheme ? '#ffffff' : '#1e1e1e',
    subText: darkTheme ? '#aaa' : '#555',
    mutedText: darkTheme ? '#ccc' : '#777',
    hoverText: darkTheme ? '#fff' : '#111',
    inputBg: darkTheme ? '#1e1e1e' : '#ffffff',
    inputBorder: darkTheme ? '#333' : '#ccc',
    subscribeBg: darkTheme ? '#000' : '#000',
    divider: darkTheme ? '#333' : '#ddd'
  };

  return (
    <Box sx={{ backgroundColor: colors.bg, color: colors.text, py: 6 }}>
      <Container maxWidth="lg">

        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2, mb: 4 }}>
          <Box>
            <Box component="img" src={hudiniLogo} alt="Hudini" sx={{ height: '60px' }} />
            <Typography variant="h6" sx={{ color: colors.subText }}>Engage, Elevate.</Typography>
          </Box>
          <Box component="img" src={evaReady} alt="Eva Ready" sx={{ height: '50px' }} />
        </Box>

        <Divider sx={{ borderColor: colors.divider, mb: 5 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4, mb: 5 }}>
          <Box sx={{ display: 'flex', gap: { xs: 4, md: 8 }, flexWrap: 'wrap' }}>
            {footerLinks.map(section => (
              <Box key={section.title}>
                <Typography sx={{ mb: 2, fontWeight: 600 }}>{section.title}</Typography>
                <Stack spacing={1.5}>
                  {section.items.map(item => (
                    <Button
                      key={item}
                      sx={{
                        p: 0,
                        color: colors.mutedText,
                        textTransform: 'none',
                        '&:hover': { color: colors.hoverText }
                      }}
                    >
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
              <TextField
                placeholder="Enter your email"
                size="small"
                fullWidth
                sx={{
                  input: { color: colors.text },
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: colors.inputBg,
                    '& fieldset': { borderColor: colors.inputBorder },
                    '&:hover fieldset': { borderColor: colors.inputBorder },
                    '&.Mui-focused fieldset': { borderColor: colors.inputBorder }
                  }
                }}
              />
              <Button variant="contained" sx={{ backgroundColor: colors.subscribeBg, color: '#fff', borderRadius: '20px', px: 4 }}>
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ borderColor: colors.divider, mb: 3 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Typography sx={{ color: colors.subText, fontSize: '0.85rem' }}>
            Hudini © 2025. All Rights Reserved. Privacy & Terms.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LinkedInIcon sx={{ color: colors.subText, fontSize: '1.2rem' }} />
            <Typography sx={{ color: colors.subText, fontSize: '0.85rem' }}>LinkedIn</Typography>
          </Box>
        </Box>

      </Container>
    </Box>
  )
}

export default Footer;
