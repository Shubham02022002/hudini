import { Typography, Box, IconButton } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import gxImg from '../assets/gx-1.jpg';
import connectImg from '../assets/connect-1.jpg';
import elevateImg from '../assets/elevate-1.jpg';

const Products = () => {
    const products = [
        {
            image: gxImg,
            title: "The guest experience app that elevates every stay",
        },
        {
            image: connectImg,
            title: "The AI-powered tool that enhances operations",
        },
        {
            image: elevateImg,
            title: "Synchronize all of your systems into one place",
        }
    ];

    return (
        <Box
            className='product-wrapper'
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#121212',
                color: '#f1f1f1'
            }}
        >
            <Typography textTransform="uppercase" variant="h4" mb={5} sx={{ color: '#bb86fc' }}>
                Products
            </Typography>

            <Box sx={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center', overflow:"hidden", marginTop:'20px' }}>
                {products.map((product, idx) => (
                    <Box key={idx} sx={{ width: 350, transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.01)' } }}>
                        <img src={product.image} alt={`product-${idx}`} width="100%" style={{ borderRadius: '10px' }} />
                        <Typography
                            variant="h6"
                            sx={{ mt: 2, mb: 2, fontWeight: 600, color: '#e0e0e0', textAlign: 'left', lineHeight: 1.4 }}
                        >
                            {product.title}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', cursor: 'pointer' }}>
                            <Typography sx={{ fontWeight: 500, color: '#90caf9' }}>View Detail</Typography>
                            <IconButton sx={{ color: '#90caf9', p: 0 }}>
                                <ArrowForwardIcon />
                            </IconButton>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Products;
