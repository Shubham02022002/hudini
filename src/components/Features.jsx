import React from 'react';
import { Typography, Card, Button } from "@mui/material";
import featureImg from "../assets/feature-img.jpg";

const Features = () => {
    return (
        <div
            className='feature-wrapper'
            style={{
                height: "100vh",
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'visible',
                marginTop: '100px',
                paddingLeft: '80px',
            }}
        >
            <img
                src={featureImg}
                alt="feature-Img"
                width={850}
                style={{
                    borderRadius: "8px",
                    display: 'block',
                    height: 'auto',
                }}
            />
            <Card
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '700px',
                    transform: 'translateY(-50%) translateX(60px)',
                    padding: '32px',
                    backgroundColor: '#121212',
                    color: '#f5f5f5',
                    maxWidth: '400px',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                    zIndex: 10
                }}
            >
                <div style={{ display: 'flex', flexDirection: "column", gap: '16px' }}>
                    <Typography variant="h5" fontWeight="600">
                        Features to make every <br />
                        touchpoint a WOW moment
                    </Typography>
                    <span style={{ color: '#bb86fc', fontWeight: 600, }}>______</span>
                    <Typography variant="body1">
                        Make every stay as unique as your guests, from <br />
                        check-in to check-out.
                    </Typography>
                    <Button
                        color='inherit'
                        variant='contained'
                        style={{ borderRadius: '20px', alignSelf: 'start', 
                            backgroundColor: "black" }}
                    >
                        View Details
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default Features;
