import React from 'react';
import join from "../assets/join.jpg";
import { Typography, Card, Button } from '@mui/material';
import { useAtomValue } from 'jotai';
import { themeAtom } from '../jotai/Atoms';

const JoinUs = () => {
    const darkTheme = useAtomValue(themeAtom);

    const cardBg = darkTheme ? '#121212' : '#f9f9f9';
    const textColor = darkTheme ? '#ffffff' : '#1a1a1a';
    const buttonBg = darkTheme ? '#ffffff' : '#000000';
    const buttonColor = darkTheme ? '#000000' : '#ffffff';

    return (
        <div style={{
            height: '60vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'visible',
            marginTop: '100px',
            paddingLeft: '80px',
        }}>
            <img
                src={join}
                alt="join-Img"
                width={850}
                style={{
                    borderRadius: "8px",
                    display: 'block',
                    marginLeft: "400px",
                    height: 'auto',
                }}
            />
            <Card
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '700px',
                    transform: 'translateY(-50%) translateX(60px)',
                    padding: '32px',
                    backgroundColor: cardBg,
                    color: textColor,
                    maxWidth: '400px',
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                    zIndex: 10
                }}
            >
                <div style={{
                    display: 'flex',
                    flexDirection: "column",
                    gap: '16px',
                    height: "200px",
                    width: "400px"
                }}>
                    <Typography variant='h5' sx={{ color: textColor }}>
                        Join us to create more <br /> magic.
                    </Typography>
                    <span style={{ color: '#bb86fc', fontWeight: 600 }}>______</span>
                    <Button variant='contained' style={{
                        backgroundColor: buttonBg,
                        color: buttonColor,
                        borderRadius: "20px",
                        width: "150px",
                        textTransform: 'none'
                    }}>
                        Find out more
                    </Button>
                </div>
            </Card>
        </div>
    );
}

export default JoinUs;
