import { Box, Typography, Paper } from '@mui/material';
import React from 'react';
import { useAtomValue } from 'jotai';
import { themeAtom } from '../jotai/Atoms';

const Fame = () => {
    const darkTheme = useAtomValue(themeAtom);

    return (
        <Box className="fame-wrapper" sx={{
            height: "40vh",
            marginTop: "100px",
            backgroundColor: darkTheme ? '#121212' : "white",
            padding: '50px 0',
            overflow: 'hidden',
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: "center",
                alignItems: 'center',
                marginTop: "50px",
                gap: 6,
                maxWidth: '1200px',
                height: '300px',
                margin: '0 auto',
                overflow: 'hidden',
            }}>
                {['360', '4X', '45%'].map((title, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: '30%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '30px',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                zIndex: 1,
                            }
                        }}
                    >
                        <Paper
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: darkTheme ? '#1f1f1f' : 'white',
                                borderRadius: '10px',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                                textAlign: 'center',
                                width: '100%',
                                padding: '30px',
                            }}
                        >
                            <Typography variant="h4" sx={{ fontWeight: 700, color: '#bb86fc' }}>
                                {title === '360' ? (
                                    <span>360<sup style={{ color: "#bb86fc" }}>o</sup></span>
                                ) : title}
                            </Typography>
                            <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 600, color: '#e0e0e0' }}>
                                {index === 0 ? 'Guest engagement' : index === 1 ? 'Increased revenue' : 'Improved staff efficiency'}
                            </Typography>
                            <Typography sx={{
                                marginTop: 2,
                                color: '#b0b0b0',
                                fontSize: '0.95rem',
                                lineHeight: 1.6,
                            }}>
                                {index === 0
                                    ? 'Stay connected with your guests throughout every touchpoint of their stay using our omni-channel platform.'
                                    : index === 1
                                        ? 'Leverage AI and data to offer guests exactly what they’re looking for, precisely when and where they need it.'
                                        : 'Achieve better communication and coordination with centralized dashboards and task automation software.'}
                            </Typography>
                        </Paper>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Fame;
