import React from "react";
import { Button, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <div
      style={{
        position: "fixed",
        height: "10vh",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        backdropFilter: "blur(1px)",
        backgroundColor: "rgba(0, 0, 0,0.1)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "10px 30px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
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
            backgroundColor:'black'
          }} color="inherit" variant="contained">Request a Demo</Button>
          <MenuIcon fontSize="large" />
        </div>


      </div>
    </div>
  );
}

export default Navbar;
