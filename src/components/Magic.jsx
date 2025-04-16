import React from 'react'
import atlantis from "../assets/atlantis.jpg";
import sunlife from "../assets/sunlife.jpg";
import { Button, Typography } from "@mui/material";

const Magic = () => {
    return (
        <div className='magic-wrapper' style={{
            height: "100vh",
            backgroundColor: "#121212",
            color: "#ffffff"
        }}>
            <div>
                <div style={{
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: "20px"
                }}>
                    <Typography
                        variant='h5'
                        style={{ color: "#ffffff" }}>
                        Hudini makes magic</Typography>
                    <Typography
                        variant='h6'
                        style={{ color: "#aaaaaa" }}>
                        Here's how our solutions are helping hotels exceed their goals.</Typography>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: "50px",
                        gap: 40
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: 'column',
                            backgroundColor: "#1e1e1e",
                            padding: "20px",
                            borderRadius: "12px",
                            maxWidth: "350px"
                        }}>
                            <img src={atlantis} width={350} alt="" style={{ borderRadius: "8px" }} />
                            <div style={{
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: 'column',
                                padding: "20px 0"
                            }}>
                                <Typography
                                    style={{
                                        color: "#ffffff",
                                        fontWeight: "bold"
                                    }}>Atlantis Dubai</Typography>
                                <Typography
                                    style={{
                                        color: "#aaaaaa",
                                        textAlign: 'center',
                                        margin: "10px 0"
                                    }}>
                                    Atlantis Dubai boosts guest engagement and revenue with...
                                </Typography>
                                <Button variant='contained'
                                    style={{
                                        borderRadius: "20px",
                                        backgroundColor: 'black',
                                        color: 'white',
                                        padding: "8px 24px",
                                        fontWeight: "bold"
                                    }}>
                                    Know More
                                </Button>
                            </div>
                        </div>

                        <div style={{
                            display: 'flex',
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: 'column',
                            backgroundColor: "#1e1e1e",
                            padding: "20px",
                            borderRadius: "12px",
                            maxWidth: "350px"
                        }}>
                            <img src={sunlife} width={350} alt="" style={{ borderRadius: "8px" }} />
                            <div style={{
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: 'column',
                                padding: "20px 0"
                            }}>
                                <Typography
                                    style={{
                                        color: "#ffffff",
                                        fontWeight: "bold"
                                    }}>Sunlife Resorts</Typography>
                                <Typography
                                    style={{
                                        color: "#aaaaaa",
                                        textAlign: 'center', margin: "10px 0"
                                    }}>
                                    Sunlife Resorts' guest experience app achieves a 65% download...
                                </Typography>
                                <Button variant='contained'
                                    style={{
                                        borderRadius: "20px",
                                        backgroundColor: 'black',
                                        color: 'white',
                                        padding: "8px 24px",
                                        fontWeight: "bold"
                                    }}>
                                    Know More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Magic;