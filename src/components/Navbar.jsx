import React, { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import connect from "../../src/assets/connect_link.jpg";
import elevate from "../../src/assets/elevate_link.jpg";
import gx from "../../src/assets/gx_link.jpg";
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      style={{
        position: "fixed",
        height: isOpen ? "45vh" : "11vh",
        scrollBehavior: isOpen ? "none" : 'smooth',
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        backdropFilter: "blur(1px)",
        backgroundColor: isOpen ? "black" : "rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "10px 30px",
        boxSizing: "border-box",
      }}
    >
      {isOpen && <RenderComponent isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div
        style={{
          display: isOpen ? "none" : "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" fontWeight={700}>
          hudini
        </Typography>

        <div style={{
          display: 'flex',
          justifyContent: "space-between",
          alignItems: 'center',
          width: "280px"
        }}>
          <HomeIcon fontSize="large" />
          <Button style={{
            borderRadius: "20px",
            backgroundColor: 'black'
          }} color="inherit" variant="contained">Request a Demo</Button>
          <IconButton onClick={() => {
            setIsOpen(!isOpen);
          }}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


const RenderComponent = ({ isOpen, setIsOpen }) => {
  return (
    <div id="renderComponent" style={{
      height: "41vh",
      marginTop: "5px",
      overflow: 'hidden',
    }}>
      <div style={{
        display: "flex",
        justifyContent: 'space-between',
        alignItems: "center"
      }}>
        <Typography variant="h4">
          Products
        </Typography>
        <IconButton onClick={() => {
          setIsOpen(!isOpen);
        }}>
          <CloseIcon fontSize="large" />
        </IconButton>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column"
          }}>
            <img width="300px" src={gx} alt="" />
            <Typography>HudiniGX</Typography>
            <Typography>The guest experience app <br />
              that elevates hotel stays</Typography>
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column"
          }}>
            <img width="300px" src={connect} alt="" />
            <Typography>Staff Connect</Typography>
            <Typography>The AI-powered assistive tool <br />
              that boosts operations
            </Typography>
          </div>
          <div style={{
            display: "flex",
            flexDirection: "column"
          }}>
            <img width="300px" src={elevate} alt="" />
            <Typography>Hudini Elevate</Typography>
            <Typography>The software system that <br />
              synchronizes all the others</Typography>
          </div>
        </div>

        <div style={{
          display: 'flex', justifyContent: "center",
          gap: 5, alignItems: "center", width: "300px",
        }}>
          <div>
            <Typography style={{ textDecoration: 'none' }}>Experience</Typography>
            <Typography style={{ textDecoration: 'none' }}>Partners</Typography>
            <Typography style={{ textDecoration: 'none' }}>About us</Typography>
            <Typography style={{ textDecoration: 'none' }}>Case Studies</Typography>
          </div>
          <div>
            <Typography style={{ textDecoration: 'none' }}>Press</Typography>
            <Typography style={{ textDecoration: 'none' }}>Blog</Typography>
            <Typography style={{ textDecoration: 'none' }}>Careers</Typography>
            <Typography style={{ textDecoration: 'none' }}>Contact us</Typography>
          </div>
        </div>
      </div>
    </div>
  )
}
