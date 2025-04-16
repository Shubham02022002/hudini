import React from 'react'
import join from "../assets/join.jpg";
import { Typography, Card, Button } from '@mui/material';
const JoinUs = () => {
    return (
        <div className='joinUs-wrapper' style={{
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
                }} />
            <Card
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '700px',
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
                <div style={{ display: 'flex',
                     flexDirection: "column",
                      gap: '16px',
                       height: "200px",
                       width:"400px" }}>
                    <Typography variant='h5'>Join us to create more <br />
                        magic.</Typography>
                    <span style={{ color: '#bb86fc', fontWeight: 600, }}>______</span>
                    <Button variant='contained' style={{
                        backgroundColor: 'black',
                        borderRadius: "20px",
                        width:"150px"
                    }}>Find out more</Button>
                </div>
            </Card>
        </div>
    )
}

export default JoinUs;