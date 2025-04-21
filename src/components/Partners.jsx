import React from 'react';
import { Typography } from '@mui/material';
import { useAtomValue } from 'jotai';
import { themeAtom } from '../jotai/Atoms';

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
  const darkTheme = useAtomValue(themeAtom);

  const bgColor = darkTheme ? "#121212" : "#ffffff";
  const textPrimary = darkTheme ? "#ffffff" : "#1a1a1a";
  const textSecondary = darkTheme ? "#bbbbbb" : "#555555";
  const logoFilter = darkTheme ? 'brightness(0) invert(1)' : 'none';

  return (
    <div style={{
      height: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: bgColor,
      color: textPrimary,
      overflow: 'hidden',
      padding: '40px 20px'
    }}>
      <Typography variant='h4' style={{ textAlign: 'center', color: textPrimary }}>
        Integrated with 100+ partners
      </Typography>
      <Typography variant='h6' style={{
        marginTop: '10px',
        textAlign: 'center',
        color: textSecondary
      }}>
        It’s never been easier to integrate your systems with our solutions.
      </Typography>

      <div style={{
        width: '100%',
        overflow: 'hidden',
        marginTop: '40px',
        position: 'relative'
      }}>
        <div style={{
          display: 'flex',
          gap: '60px',
          animation: 'scrollSlider 30s linear infinite',
          width: 'max-content',
          alignItems: 'center'
        }}>
          {[...partnerLogos, ...partnerLogos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`partner-${i}`}
              style={{
                height: '60px',
                objectFit: 'contain',
                filter: logoFilter,
                opacity: 0.85
              }}
            />
          ))}
        </div>
      </div>

      <Typography variant='h5' style={{
        marginTop: '30px',
        color: textPrimary
      }}>
        Meet our Partners
      </Typography>
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
