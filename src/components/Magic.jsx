import React from 'react';
import atlantis from "../assets/atlantis.jpg";
import sunlife from "../assets/sunlife.jpg";
import { Button, Typography } from "@mui/material";
import { useAtomValue } from 'jotai';
import { themeAtom } from '../jotai/Atoms';

const Magic = () => {
  const darkTheme = useAtomValue(themeAtom);

  const bgColor = darkTheme ? "#121212" : "#f9f9f9";
  const cardColor = darkTheme ? "#1e1e1e" : "#ffffff";
  const primaryText = darkTheme ? "#ffffff" : "#1a1a1a";
  const secondaryText = darkTheme ? "#aaaaaa" : "#555555";
  const buttonBg = darkTheme ? "#000000" : "#000000";
  const buttonText = darkTheme ? "#ffffff" : "#ffffff";

  return (
    <div style={{
      height: "100vh",
      backgroundColor: bgColor,
      color: primaryText
    }}>
      <div style={{
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "20px"
      }}>
        <Typography variant='h5' style={{ color: primaryText }}>
          Hudini makes magic
        </Typography>
        <Typography variant='h6' style={{ color: secondaryText }}>
          Here's how our solutions are helping hotels exceed their goals.
        </Typography>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: "50px",
          gap: 40,
          flexWrap: 'wrap'
        }}>
          {[{
            img: atlantis,
            title: 'Atlantis Dubai',
            desc: 'Atlantis Dubai boosts guest engagement and revenue with...'
          }, {
            img: sunlife,
            title: 'Sunlife Resorts',
            desc: 'Sunlife Resorts\' guest experience app achieves a 65% download...'
          }].map(({ img, title, desc }) => (
            <div key={title} style={{
              display: 'flex',
              justifyContent: "center",
              alignItems: "center",
              flexDirection: 'column',
              backgroundColor: cardColor,
              padding: "20px",
              borderRadius: "12px",
              maxWidth: "350px"
            }}>
              <img src={img} width={350} alt={title} style={{ borderRadius: "8px" }} />
              <div style={{
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                flexDirection: 'column',
                padding: "20px 0"
              }}>
                <Typography style={{
                  color: primaryText,
                  fontWeight: "bold"
                }}>
                  {title}
                </Typography>
                <Typography style={{
                  color: secondaryText,
                  textAlign: 'center',
                  margin: "10px 0"
                }}>
                  {desc}
                </Typography>
                <Button
                  variant='contained'
                  style={{
                    borderRadius: "20px",
                    backgroundColor: buttonBg,
                    color: buttonText,
                    padding: "8px 24px",
                    fontWeight: "bold",
                    textTransform: 'none'
                  }}>
                  Know More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Magic;