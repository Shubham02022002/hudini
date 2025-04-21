import React from 'react';
import { Typography, Card, Button } from "@mui/material";
import featureImg from "../assets/feature-img.jpg";
import { useAtomValue } from 'jotai';
import { themeAtom } from '../jotai/Atoms';

const Features = () => {
    const darkTheme = useAtomValue(themeAtom);

    const textColor = darkTheme ? "#ffffff" : "#121212";
    const cardBg = darkTheme ? "#121212" : "#ffffff";
    const highlight = "#bb86fc";

    return (
        <div
            style={{
                height: "100vh",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                marginTop: '100px',
                paddingLeft: '80px',
                backgroundColor: darkTheme ? "#121212" : "#fff",
                overflow: 'visible'
            }}
        >
            <img
                src={featureImg}
                alt="feature-Img"
                style={{
                    borderRadius: "8px",
                    display: 'block',
                    width: '850px',
                    height: 'auto',
                    marginLeft: 'auto',
                    marginRight: '80px',
                }}
            />
            <Card
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '100px',
                    transform: 'translateY(-50%)',
                    padding: '32px',
                    backgroundColor: cardBg,
                    color: textColor,
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
                    <div style={{
                        height: '4px',
                        width: '60px',
                        backgroundColor: highlight,
                        borderRadius: '4px'
                    }} />
                    <Typography variant="body1" style={{ color: darkTheme ? "#ccc" : "#444" }}>
                        Make every stay as unique as your guests, from <br />
                        check-in to check-out.
                    </Typography>
                    <Button
                        variant='contained'
                        style={{
                            borderRadius: '20px',
                            alignSelf: 'start',
                            backgroundColor: darkTheme ? "#000" : "#f0f0f0",
                            color: darkTheme ? "#fff" : "#000",
                            fontWeight: 500
                        }}
                    >
                        View Details
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default Features;
