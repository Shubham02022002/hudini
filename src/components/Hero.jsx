import { Button, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [current, setCurrent] = useState(0);

    const slides = [
        {
            title: "AI drives real-time conversations and conversions",
            description: "Interact with guests 24/7 on any channel and customize irresistible offers."
        },
        {
            title: "Make more revenue, not more of an effort",
            description: "Improve guest experience, upsell and operations with automated solutions."
        },
        {
            title: "Elevate guest experience and boost revenue by harnessing the power of AI and data",
            description: ""
        },
        {
            title: "Faster, personalized check-ins? Check!",
            description: "Cut check-in times by 80%"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            height: "80vh",
            marginTop: "10vh",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
            width: '100vw',
        }}>
            <div style={{
                height: '60vh',
                width: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {slides.map((slide, index) => (
                    <div key={index}
                        style={{
                            position: 'absolute',
                            opacity: index === current ? 1 : 0,
                            transform: index === current ? 'translateX(0)' : 'translateX(-100%)',
                            transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            width: '100%',
                            padding: '0 2rem'
                        }}
                    >
                        <Typography variant="h4" align="center">{slide.title}</Typography>
                        {slide.description && (
                            <Typography align="center" style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
                                {slide.description}
                            </Typography>
                        )}
                    </div>
                ))}
            </div>

            <Button color='inherit' variant='outlined'>Book a Demo</Button>
        </div>
    );
};

export default Hero;
