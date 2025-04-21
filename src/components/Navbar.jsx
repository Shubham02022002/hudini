import React, { useState, useEffect } from "react";
import { Button, Grid, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import connect from "../../src/assets/connect_link.jpg";
import elevate from "../../src/assets/elevate_link.jpg";
import gx from "../../src/assets/gx_link.jpg";
import CloseIcon from '@mui/icons-material/Close';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import { atom, useAtom } from "jotai";
import { themeAtom } from "../jotai/Atoms";
function Navbar() {
  const [darkTheme, setDarkTheme] = useAtom(themeAtom);
  console.log(darkTheme);
  const [isOpen, setIsOpen] = useState(false); // for bruger-menu

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#aab4be',
          ...theme.applyStyles('dark', {
            backgroundColor: '#8796A5',
          }),
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: '#001e3c',
      width: 32,
      height: 32,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
      ...theme.applyStyles('dark', {
        backgroundColor: '#003892',
      }),
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: '#aab4be',
      borderRadius: 20 / 2,
      ...theme.applyStyles('dark', {
        backgroundColor: '#8796A5',
      }),
    },
  }));
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
        backgroundColor: darkTheme ? "black" : "white",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "10px 30px",
        boxSizing: "border-box",
      }}
    >
      {isOpen && <RenderComponent darkTheme={darkTheme} isOpen={isOpen} setIsOpen={setIsOpen} />}
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
          width: "340px"
        }}>
          <FormGroup>
            <FormControlLabel
              control={<MaterialUISwitch sx={{ m: 1 }} size={"small"}
                value={darkTheme}
                defaultChecked={darkTheme}
                onChange={() => {
                  setDarkTheme(!darkTheme);
                  console.log(darkTheme);
                }} />}
            />
          </FormGroup>
          <HomeIcon fontSize="large" style={{
            color: darkTheme ? "black" : "white"
          }} />
          <Button style={{
            borderRadius: "20px",
            backgroundColor: darkTheme ? 'black' : 'white',
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


const RenderComponent = ({ isOpen, setIsOpen, darkTheme }) => {
  return (
    <div id="renderComponent" style={{
      backgroundColor: darkTheme ? "black" : "white",
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

