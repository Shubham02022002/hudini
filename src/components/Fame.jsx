import { Box, Typography, Paper } from '@mui/material';
import React from 'react';

const Fame = () => {
    return (
        <Box className="fame-wrapper" sx={{
            height: "40vh",
            marginTop: "100px",
            backgroundColor: '#121212',
            padding: '50px 0',
            overflow: 'hidden'
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: "center",
                alignItems: 'center',
                marginTop:"50px",
                gap: 6,
                maxWidth: '1200px',
                margin: '0 auto',
                overflow: 'hidden'
            }}>
                <Paper sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#1f1f1f',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                    textAlign: 'center',
                    width: '30%',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 8px 40px rgba(0, 0, 0, 0.3)',
                    }
                }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: '#bb86fc' }}>
                        360<sup style={{ color: "#bb86fc" }}>o</sup>
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 600, color: '#e0e0e0' }}>
                        Guest engagement
                    </Typography>
                    <Typography sx={{
                        marginTop: 2,
                        color: '#b0b0b0',
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                    }}>
                        Stay connected with your guests throughout every touchpoint of their stay using our omni-channel platform.
                    </Typography>
                </Paper>

                <Paper sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#1f1f1f',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                    textAlign: 'center',
                    width: '30%',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 8px 40px rgba(0, 0, 0, 0.3)',
                    }
                }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: '#bb86fc' }}>
                        4X
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 600, color: '#e0e0e0' }}>
                        Increased revenue
                    </Typography>
                    <Typography sx={{
                        marginTop: 2,
                        color: '#b0b0b0',
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                    }}>
                        Leverage AI and data to offer guests exactly what they’re looking for, precisely when and where they need it.
                    </Typography>
                </Paper>

                <Paper sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#1f1f1f',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                    textAlign: 'center',
                    width: '30%',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 8px 40px rgba(0, 0, 0, 0.3)',
                    }
                }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: '#bb86fc' }}>
                        45%
                    </Typography>
                    <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 600, color: '#e0e0e0' }}>
                        Improved staff efficiency
                    </Typography>
                    <Typography sx={{
                        marginTop: 2,
                        color: '#b0b0b0',
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                    }}>
                        Achieve better communication and coordination with centralized dashboards and task automation software.
                    </Typography>
                </Paper>
            </Box>
        </Box>
    );
};

export default Fame;
