import React from 'react';
import { Typography } from '@mui/material';

import Adyan from "../assets/partners/Adyan.png";
import Book4Time from '../assets/partners/Book4Time.png';
import Discovery from '../assets/partners/Discovery.png';
import HoistGroup from '../assets/partners/HoistGroup.png';
import Incode from '../assets/partners/Incode.png';
import LG from '../assets/partners/LG.png';
import Opera from '../assets/partners/Opera.png';
import Orracle from '../assets/partners/Orracle.png';
import Philips from '../assets/partners/Philips.png';
import SPAsoft from '../assets/partners/SPAsoft.png';
import VDA from '../assets/partners/VDA.png';
import Zenoti from '../assets/partners/Zenoti.png';

const partnerLogos = [
    Adyan, Book4Time, Discovery, HoistGroup, Incode, LG,
    Opera, Orracle, Philips, SPAsoft, VDA, Zenoti
];

const Partners = () => {
    return (
        <div className='partner-wrapper'
            style={{
                height: '50vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#121212',
                color: '#fff',
                overflow: 'hidden',
                padding: '40px 20px'
            }}>
            <Typography variant='h4' textAlign={'center'}>
                Integrated with 100+ partners
            </Typography>
            <Typography
                variant='h6'
                style={{ marginTop: '10px', textAlign: 'center', color: '#ccc' }}
            >
                It’s never been easier to integrate your systems with our solutions.
            </Typography>
            <div style={{
                width: '100%',
                overflow: 'hidden',
                marginTop: '40px'
            }}>
                <div
                    style={{
                        display: 'flex',
                        gap: '60px',
                        animation: 'scrollSlider 30s linear infinite',
                        width: 'max-content',
                        alignItems: 'center',
                    }}
                >
                    {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                        <img
                            key={i}
                            src={logo}
                            alt={`partner-${i}`}
                            style={{
                                height: '60px',
                                objectFit: 'contain',
                                filter: 'brightness(0) invert(1)',
                                opacity: 0.8
                            }}
                        />
                    ))}
                </div>
            </div>
            <Typography variant='h5' style={{
                marginTop: '30px'
            }}>Meet our Partners</Typography>
            <style>
                {`
                    @keyframes scrollSlider {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                `}
            </style>
        </div>
    );
};

export default Partners;
