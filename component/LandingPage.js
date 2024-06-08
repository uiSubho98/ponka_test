// "use client";
import React from "react";
import { Box, Container, Typography, Grid, CardContent,Button } from "@mui/material";
// import Navbar from "./Navbar";
import imag from "../public/bannerImg.png";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import founder from "../public/ami-dror.svg";
import icon from "../public/coma.png";
import pencil from "../public/Vector.png";
import Magnet from "../public/megnet.png";
import Audio from "../public/audio.png";
import Globe from "../public/globe.png";
import group from "../public/Group.png";
// import Video from "../../../public/cartoon.mp4"
import CardMedia from "@mui/material/CardMedia";
import { Video } from "@mui/material";
import CardCover from "@mui/joy/CardCover";
import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import Mbanner from "../public/Mbanner.png";
import youtube from '../public/youtube.png';
import mobileyoutube from '../public/mobileyoutube.png';
import Link from "next/link";
import { Icon } from "@iconify/react";
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import Myoutube from '../public/Myoutube.png'

const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    // autoplay: 1,
  },
};

function LandingPage(isDarkMode) {
  const [windowSize, setWindowSize] = useState({
    innerWidth: getWindowSize(),
    innerHeight: getWindowSize(),
  });

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    // console.log("size", windowSize.innerWidth);

    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      {/* banner image part */}
      <div className={isDarkMode ? "light-mode" : "light-mode"}>
        {windowSize.innerWidth > 1900 ? (
          <Box>
            <Box sx={{ position: "relative" }}>
              <Image style={{ height: "100vh", width: "100%" }} src={imag} />
              <Typography
                variant="h2"
                sx={{
                  position: "absolute",
                  color: "white",
                  top: "72%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  textAlign: "center",
                }}
              >
              Elevating Businesses, Empowering Lives

              </Typography>
              {/* <Typography
                variant="body"
                sx={{
                  position: "absolute",
                  color: "white",
                  top: "77%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "50px",
                  textAlign: "center",
                }}
              >
                Build your own off-shore team at a fraction of the cost
              </Typography> */}
            </Box>
          </Box>
        ) : (
          <Box sx={{pt:10}}>
            
            <Box sx={{ position: "relative" }}>
            {windowSize.innerWidth > 375 ? (
              <Image style={{ height: "75vh", width: "100%" }} src={imag} />
            ) : (
              <Image style={{ height: "75vh", width: "100%" }} src={Mbanner} />
            )}

            <Typography
              variant="body"
              sx={{
                fontFamily: "Poppins",
                fontSize: { xs: "24px", md: "40px", xl: "55px" },
                position: "absolute",
                color: "white",
                textAlign: "center",

                "@media(min-Width: 375px)": {
                  top: "70%",
                  left: "3%",
                  transform: "translate(0%)",
                  lineHeight: "38px",
                },
                "@media(min-Width: 750px)": {
                  top: "78%",
                  left: "50%",
                  transform: "translateX(-50%)",
                },
                "@media(min-Width: 900px)": {
                  top: "62%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  lineHeight: "55px",
                },
                "@media(min-Width: 1050px)": {
                  top: "62%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  lineHeight: "55px",
                },
                "@media(min-Width: 1440px)": {
                  top: "65%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  lineHeight: "65px",
                },
              }}
            >
              Elevating Businesses, Empowering Lives
            </Typography>
           
          </Box>

          </Box>
         
        )}

        {/* 2nd section card */}

        {windowSize.innerWidth > 1900 ?(
          <Box  sx={{mt:5}}> 
          <Box sx={{ mt: 6, mb: 5 }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{ display: "flex" }}
            >
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "end" },
                }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    backgroundColor: "#FCF9F9",
                    borderRadius: 3,
                    "@media(min-Width: 375px)": {
                      height: "135px",
                      width: "425px",
                      px: 2,
                    
                    
                    },

                    "@media(min-Width: 750px)": {
                      height: "205px",
                      width: "430px",
                      px: 8,
                    },
                    "@media(min-Width: 950px)": {
                      height: "195px",
                      width: "302px",
                      px: 5,
                      p: 0,
                    },
                    "@media(min-Width: 1050px)": {
                      height: "185px",
                      width: "340px",
                      px: "18px",
                      p: 0,
                    },
                    "@media(min-Width: 1440px)": {
                      height: "160px",
                      width: "400px",
                      px: 8,
                      p: 0,
                    },
                  }}
                >
                  <CardContent sx={{ mt: { xs: 1, md: 2 } }}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        textAlign: { xs: "start", md: "center" },
                        fontWeight: "bold",
                        "@media(min-Width: 375px)": {
                          fontSize: "18px",

                        },
                        "@media(min-Width: 750px)": {
                          fontSize: "20px",
                          fontWeight: 20,
                        },
                        "@media(min-Width: 950px)": {
                          fontSize: "18px",
                          fontWeight: "bold",
                        },
                        "@media(min-Width: 1050px)": {
                          fontSize: "20px",
                          fontWeight: "bold",
                        },
                        "@media(min-Width: 1440px)": {
                          fontSize: "20px",
                          fontWeight: "bold",
                        },
                      }}
                    >
                      Build your Off-shore Team
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",

                        textAlign: "start",
                        "@media(min-Width: 375px)": {
                          fontSize: "18px",
                        },
                        "@media(min-Width: 750px)": {
                          fontSize: "20px",
                          px: 2,
                        },
                        "@media(min-Width: 950px)": {
                          fontSize: "18px",
                          px: 3,
                        },
                        "@media(min-Width: 1050px)": {
                          fontSize: "20px",
                          px: "16px",
                        },
                        "@media(min-Width: 1440px)": {
                          fontSize: "20px",
                          px: '45px',
                        },
                      }}
                    >
                      Reliable and scalable manpower
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid
                item
                xs={12}
                md={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    backgroundColor: "#FCF9F9",
                    borderRadius: 3,
                    textAlign: { xs: "start", md: "center" },
                    "@media(min-Width: 375px)": {
                      height: "135px",
                      width: "425px",
                      px: 2,
                    },
                    "@media(min-Width: 750px)": {
                      height: "205px",
                      width: "430px",
                      px: 8,
                    },
                    "@media(min-Width: 950px)": {
                      height: "195px",
                      width: "302px",
                      px: 5,
                      p: 0,
                    },
                    "@media(min-Width: 1050px)": {
                      height: "185px",
                      width: "340px",
                      px: 5,
                      p: 0,
                    },
                    "@media(min-Width: 1440px)": {
                      height: "160px",
                      width: "400px",
                      px: 6,
                      p: 0,
                    },
                  }}
                >
                  <CardContent sx={{ mt: { xs: 1, md: 2 } }}>
                    <Typography
                      sx={{
                        textAlign: { xs: "start", md: "center" },
                        fontFamily: "Poppins",

                        color: "background: #0B0706",
                        fontWeight: "bold",
                        "@media(min-Width: 375px)": {
                          fontSize: "18px",
                        },
                        "@media(min-Width: 750px)": {
                          fontSize: "20px",
                        },
                        "@media(min-Width: 950px)": {
                          fontSize: "18px",
                        },
                        "@media(min-Width: 1050px)": {
                          fontSize: "20px",
                        },
                        "@media(min-Width: 1440px)": {
                          fontSize: "20px",
                        },
                      }}
                    >
                      Save on Operations Costs
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        textAlign: { xs: "start", md: "start" },

                        "@media(min-Width: 375px)": {
                          fontSize: "18px",
                        },

                        "@media(min-Width: 750px)": {
                          fontSize: "20px",
                          px: 1,
                        },
                        "@media(min-Width: 950px)": {
                          fontSize: "18px",
                          px: 3,
                        },
                        "@media(min-Width: 1050px)": {
                          fontSize: "20px",
                          px: "23px",
                        },
                        "@media(min-Width: 1440px)": {
                          fontSize: "20px",
                          px: '50px',
                        },
                      }}
                    >
                      Technical operations by trained staff
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "start" },
                }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    backgroundColor: "#FCF9F9",
                    borderRadius: 3,
                    textAlign: { xs: "start", md: "center" },
                    "@media(min-Width: 375px)": {
                      height: "135px",
                      width: "425px",
                      px: 2,
                    },
                    "@media(min-Width: 750px)": {
                      height: "205px",
                      width: "430px",
                      px: 8,
                    },
                    "@media(min-Width: 950px)": {
                      height: "195px",
                      width: "302px",
                      px: 5,
                      p: 0,
                    },
                    "@media(min-Width: 1050px)": {
                      height: "185px",
                      width: "340px",
                      px: "43px",
                      p: 0,
                    },
                    "@media(min-Width: 1440px)": {
                      height: "160px",
                      width: "400px",
                      px: 8,
                      p: 0,
                    },
                  }}
                >
                  <CardContent sx={{ mt: { xs: 1, md: 2 } }}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",

                        color: "background: #0B0706",
                        fontWeight: "bold",
                        // mt: 1,
                        "@media(min-Width: 375px)": {
                          fontSize: "18px",
                        },
                        "@media(min-Width: 750px)": {
                          fontSize: "20px",
                        },
                        "@media(min-Width: 950px)": {
                          fontSize: "18px",
                        },
                        "@media(min-Width: 1050px)": {
                          fontSize: "20px",
                        },
                        "@media(min-Width: 1440px)": {
                          fontSize: "20px",
                          paddingRight: 8,
                        },
                      }}
                    >
                      Make a Social Impact
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        textAlign: { xs: "start", md: "start" },

                        "@media(min-Width: 375px)": {
                          fontSize: "18px",
                        },

                        "@media(min-Width: 750px)": {
                          fontSize: "20px",
                          px: 4,
                        },
                        "@media(min-Width: 950px)": {
                          fontSize: "18px",
                          px: 5,
                        },
                        "@media(min-Width: 1050px)": {
                          fontSize: "20px",
                          px: "40px",
                        },
                        "@media(min-Width: 1440px)": {
                          fontSize: "20px",
                          px: 5,
                        },
                      }}
                    >
                      Helping families of one of the poorest countries
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
        ) : <Container  sx={{mt:5}}> 
          <Box sx={{ mt: 6, mb: 5 }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{ display: "flex" }}
            >
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "end" },
                }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    backgroundColor: "#FCF9F9",
                    borderRadius: 3,
                    "@media(min-Width: 375px)": {
                      height: "135px",
                      width: "425px",
                      px: 2,
                    
                    
                    },

                    "@media(min-Width: 750px)": {
                      height: "205px",
                      width: "430px",
                      px: 8,
                    },
                    "@media(min-Width: 950px)": {
                      height: "195px",
                      width: "302px",
                      px: 5,
                      p: 0,
                    },
                    "@media(min-Width: 1050px)": {
                      height: "185px",
                      width: "340px",
                      px: "18px",
                      p: 0,
                    },
                    "@media(min-Width: 1440px)": {
                      height: "160px",
                      width: "400px",
                      px: 8,
                      p: 0,
                    },
                  }}
                >
                  <CardContent sx={{ mt: { xs: 1, md: 2 } }}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        textAlign: { xs: "start", md: "center" },
                        fontWeight: "bold",
                        "@media(min-Width: 375px)": {
                          fontSize: "18px",

                        },
                        "@media(min-Width: 750px)": {
                          fontSize: "20px",
                          fontWeight: 20,
                        },
                        "@media(min-Width: 950px)": {
                          fontSize: "18px",
                          fontWeight: "bold",
                        },
                        "@media(min-Width: 1050px)": {
                          fontSize: "20px",
                          fontWeight: "bold",
                        },
                        "@media(min-Width: 1440px)": {
                          fontSize: "20px",
                          fontWeight: "bold",
                        },
                      }}
                    >
                      Build your Off-shore Team
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",

                        textAlign: "start",
                        "@media(min-Width: 375px)": {
                          fontSize: "18px",
                        },
                        "@media(min-Width: 750px)": {
                          fontSize: "20px",
                          px: 2,
                        },
                        "@media(min-Width: 950px)": {
                          fontSize: "18px",
                          px: 3,
                        },
                        "@media(min-Width: 1050px)": {
                          fontSize: "20px",
                          px: "16px",
                        },
                        "@media(min-Width: 1440px)": {
                          fontSize: "20px",
                          px: '45px',
                        },
                      }}
                    >
                      Reliable and scalable manpower
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid
                item
                xs={12}
                md={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    backgroundColor: "#FCF9F9",
                    borderRadius: 3,
                    textAlign: { xs: "start", md: "center" },
                    "@media(min-Width: 375px)": {
                      height: "135px",
                      width: "425px",
                      px: 2,
                    },
                    "@media(min-Width: 750px)": {
                      height: "205px",
                      width: "430px",
                      px: 8,
                    },
                    "@media(min-Width: 950px)": {
                      height: "195px",
                      width: "302px",
                      px: 5,
                      p: 0,
                    },
                    "@media(min-Width: 1050px)": {
                      height: "185px",
                      width: "340px",
                      px: 5,
                      p: 0,
                    },
                    "@media(min-Width: 1440px)": {
                      height: "160px",
                      width: "400px",
                      px: 6,
                      p: 0,
                    },
                  }}
                >
                  <CardContent sx={{ mt: { xs: 1, md: 2 } }}>
                    <Typography
                      sx={{
                        textAlign: { xs: "start", md: "center" },
                        fontFamily: "Poppins",

                        color: "background: #0B0706",
                        fontWeight: "bold",
                        "@media(min-Width: 375px)": {
                          fontSize: "18px",
                        },
                        "@media(min-Width: 750px)": {
                          fontSize: "20px",
                        },
                        "@media(min-Width: 950px)": {
                          fontSize: "18px",
                        },
                        "@media(min-Width: 1050px)": {
                          fontSize: "20px",
                        },
                        "@media(min-Width: 1440px)": {
                          fontSize: "20px",
                        },
                      }}
                    >
                      Save on Operations Costs
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        textAlign: { xs: "start", md: "start" },

                        "@media(min-Width: 375px)": {
                          fontSize: "18px",
                        },

                        "@media(min-Width: 750px)": {
                          fontSize: "20px",
                          px: 1,
                        },
                        "@media(min-Width: 950px)": {
                          fontSize: "18px",
                          px: 3,
                        },
                        "@media(min-Width: 1050px)": {
                          fontSize: "20px",
                          px: "23px",
                        },
                        "@media(min-Width: 1440px)": {
                          fontSize: "20px",
                          px: '50px',
                        },
                      }}
                    >
                      Technical operations by trained staff
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "start" },
                }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    backgroundColor: "#FCF9F9",
                    borderRadius: 3,
                    textAlign: { xs: "start", md: "center" },
                    "@media(min-Width: 375px)": {
                      height: "135px",
                      width: "425px",
                      px: 2,
                    },
                    "@media(min-Width: 750px)": {
                      height: "205px",
                      width: "430px",
                      px: 8,
                    },
                    "@media(min-Width: 950px)": {
                      height: "195px",
                      width: "302px",
                      px: 5,
                      p: 0,
                    },
                    "@media(min-Width: 1050px)": {
                      height: "185px",
                      width: "340px",
                      px: "43px",
                      p: 0,
                    },
                    "@media(min-Width: 1440px)": {
                      height: "160px",
                      width: "400px",
                      px: 8,
                      p: 0,
                    },
                  }}
                >
                  <CardContent sx={{ mt: { xs: 1, md: 2 } }}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",

                        color: "background: #0B0706",
                        fontWeight: "bold",
                        // mt: 1,
                        "@media(min-Width: 375px)": {
                          fontSize: "18px",
                        },
                        "@media(min-Width: 750px)": {
                          fontSize: "20px",
                        },
                        "@media(min-Width: 950px)": {
                          fontSize: "18px",
                        },
                        "@media(min-Width: 1050px)": {
                          fontSize: "20px",
                        },
                        "@media(min-Width: 1440px)": {
                          fontSize: "20px",
                          paddingRight: 8,
                        },
                      }}
                    >
                      Make a Social Impact
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        textAlign: { xs: "start", md: "start" },

                        "@media(min-Width: 375px)": {
                          fontSize: "18px",
                        },

                        "@media(min-Width: 750px)": {
                          fontSize: "20px",
                          px: 4,
                        },
                        "@media(min-Width: 950px)": {
                          fontSize: "18px",
                          px: 5,
                        },
                        "@media(min-Width: 1050px)": {
                          fontSize: "20px",
                          px: "40px",
                        },
                        "@media(min-Width: 1440px)": {
                          fontSize: "20px",
                          px: 5,
                        },
                      }}
                    >
                      Helping families of one of the poorest countries
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>}

        {/*3ed section founder  */}

        {windowSize.innerWidth > 1900 ? (
          <Box >
            <Box sx={{ backgroundColor: "#FCF9F9" }}>
              <Container maxWidth="xl" sx={{border:"1px solid red"}}>
                <Image src={founder} />
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "35px",
                    color: "#012F6B",
                    marginLeft: "10rem",
                    mt: -6,
                  }}
                >
                  Ami Dror, Founder
                </Typography>

                <Box sx={{border:"1px solid red", display: "flex", justifyContent: "space-evenly" }}>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",

                      fontSize: "36px",
                      mt: 5,

                      textAlign: "start",
                    }}
                  >
                    We totally changed Ponka from an extreme hunger
                    <br />
                    society to a functional & professional community and
                    <br />
                    we are always looking to connect with partners who are
                    <br />
                    Leaders that believe that everything is possible.
                  </Typography>
                  <Box
                    sx={{ textAlign: "start", mt: 25, marginLeft: "-300px" }}
                  >
                    <Image src={icon} />
                  </Box>
                </Box>
              </Container>
            </Box>
          </Box>
        ) : (
          <>
          <Box>
          <Box sx={{ backgroundColor: "#FCF9F9", mt: 8}}>
              <Container maxWidth="xl">
                <Box
                  sx={{ paddingTop: "40px", paddingLeft: { xs: "9px", md: 9 } }}
                >
                  <Image src={founder} />
                </Box>

                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: { xs: "20px", md: "35px" },
                    color: "#012F6B",
                    marginLeft: { xs: "170px", md: "230px" },
                    mt: -5,
                  }}
                >
                  Ami Dror, Founder
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "space-evenly"}}>
                  <Typography
                    variant="body"
                    sx={{
                      fontFamily: "Poppins",
                      mt: { xs: 3, md: 5 },
                      // px: 3,
                      textAlign: "start",
                      "@media(min-Width: 375px)": {
                        fontSize: "20px",
                        paddingLeft:'11px',
                        paddingRight:'40px'
                      },
                      "@media(min-Width: 1440px)": {
                        fontSize: "35px",
                        px: 2,
                        mb:'8rem'
                      },
                    }}
                  >
                    We totally changed Ponka from an extreme hunger
                    {windowSize.innerWidth > 425 ? <br /> : <span> </span>}
                    society to a functional & professional community and
                    {windowSize.innerWidth > 425 ? <br /> : <span> </span>}
                    we are always looking to connect with partners who are
                    {windowSize.innerWidth > 425 ? <br /> : <span> </span>}
                    Leaders that believe that everything is possible.
                  </Typography>

                  <Box
                    sx={{
                      // textAlign: "start",
                      // mt: { xs: "168px", md: 20 },
                      "@media(min-Width: 375px)": {
                        marginLeft: "-189px",
                        marginTop: "168px",
                      },
                      "@media(min-Width: 750px)": {
                        marginLeft: "-320px",
                        marginTop: "168px",
                      },
                      "@media(min-Width: 900px)": {
                        marginLeft: "-280px",
                        marginTop: "100px",
                      },
                      "@media(min-Width: 1050px)": {
                        marginLeft: "-360px",
                        marginTop: "100px",
                      },
                      "@media(min-Width: 1440px)": {
                        marginLeft: "-350px",
                        marginTop: 24,
                      },
                    }}
                  >
                    <Image
                      src={icon}
                      style={{ width: { xs: "20px", md: "50px" } }}
                    />
                  </Box>
                </Box>
              </Container>
            </Box>
          </Box>
           
          </>
        )}

        {/* 4th section services */}
        {windowSize.innerWidth > 1900 ? (
          <Box >
            <Box sx={{ mt: 5 }}>
              <Typography
                variant="h2"
                sx={{
                  textAlign: "center",
                  fontFamily: "Poppins",

                  fontSize: "64px",
                  color: "#0B0706",
                }}
              >
                Among our Diverse Services
              </Typography>

              {/* first grid */}

              <Grid container spacing={2} sx={{ mt: 5 }}>
                <Grid
                  xs={9}
                  sx={{
                    backgroundColor: "#C7DCE8",
                    border: 0,
                    borderRadius: "0 50px 50px 0",
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "end", py: 2 }}>
                    <Image src={pencil} />
                    <Typography
                      sx={{ color: "black", px: 4, fontFamily: "Poppins" }}
                    >
                      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                        Image Labeling, Data Annotation, and Database Management
                      </span>
                      <br />
                      We enhance accuracy and usability by organizing and
                      optimizing various
                      <br />
                      data sets.
                    </Typography>
                  </Box>
                </Grid>
                <Grid xs={3}></Grid>
              </Grid>
              {/* seccond grid */}

              <Grid container spacing={2} sx={{ mt: 5 }}>
                <Grid xs={9}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      paddingRight: 4,
                    }}
                  >
                    <Image src={Magnet} />
                    <Typography
                      sx={{ color: "black", px: 5, fontFamily: "Poppins" }}
                    >
                      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                        Lead Generation and Pre-sales Assistance
                      </span>
                      <br />
                      We engage with new prospects, nurture leads, and ensure
                      your sales team
                      <br />
                      stays focused on closing deals.
                    </Typography>
                  </Box>
                </Grid>
                <Grid xs={3}></Grid>
              </Grid>

              {/* third grid */}
              <Grid container spacing={2} sx={{ mt: 5 }}>
                <Grid xs={2}></Grid>
                <Grid
                  xs={12}
                  md={10}
                  sx={{
                    backgroundColor: "#C7DCE8",
                    border: 0,
                    borderRadius: "50px 0 0 50px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      paddingLeft: 10,
                      py: 2,
                      
                    }}
                  >
                    <Image src={Audio} style={{ paddingTop: '10px'}} />
                    <Typography
                      sx={{ color: "black", px: 4, fontFamily: "Poppins" }}
                    >
                      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                        Audio and Video Processing
                      </span>
                      <br />
                      From remote monitoring to comprehensive analysis, we
                      handle all aspects
                      <br />
                      of audio and video data processing.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              {/* fourth grid */}
              <Grid container spacing={2} sx={{ mt: 5 }}>
                <Grid xs={9}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      paddingRight: 6,
                    }}
                  >
                    <Image src={Globe} />
                    <Typography
                      sx={{
                        color: "black",
                        px: 5,

                        fontFamily: "Poppins",
                      }}
                    >
                      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                        Staff Augmentation
                      </span>
                      <br />
                      Expand workforce with skilled external personnel to manage
                      projects and
                      <br />
                      boost organizational capacity.
                    </Typography>
                  </Box>
                </Grid>
                <Grid xs={3}></Grid>
              </Grid>

              {/* fifth grid */}
              <Grid container spacing={2} sx={{ mt: 5 }}>
                <Grid
                  xs={9}
                  sx={{
                    backgroundColor: "#C7DCE8",
                    border: 0,
                    borderRadius: "0 50px 50px 0",
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "end", py: 3 }}>
                    <Image src={group} />
                    <Typography
                      sx={{ color: "black", px: 4, fontFamily: "Poppins" }}
                    >
                      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                        Offshore Solutions
                      </span>
                      <br />
                      Tailored offshore teams built to suit your specific
                      workflow and operational needs.
                    </Typography>
                  </Box>
                </Grid>
                <Grid xs={3}></Grid>
              </Grid>
            </Box>
          </Box>
        ) : (
          <Box minWidth="xl">
<Box sx={{ mt: 10 }}>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                color: "#0B0706",
                // fontWeight: "bold",
                fontFamily: "Poppins",
                "@media(min-Width: 375px)": {
                  fontSize: "24px",
                },
                "@media(min-Width: 1050px)": {
                  fontSize: "45px",
                },
                "@media(min-Width: 1440px)": {
                  fontSize: "65px",
                },
              }}
            >
              Among our Diverse Services
            </Typography>

            {/* first grid */}

            <Grid container spacing={2} sx={{ mt: 5 }}>
              <Grid
                xs={12}
                
                md={12}
                sx={{
                  backgroundColor: "#C7DCE8",
                  border: 0,
                  borderRadius: "0 50px 50px 0",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { md: "center", xs: "center" },
                    py: 2,
                    paddingLeft: {xs:5,md:6},
                  }}
                >
                  <Box sx={{ paddingTop: "7px" }}>
                    <Image src={pencil} />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      color: "black",
                      "@media(min-Width: 375px)": {
                        fontSize: "10px",
                        px: '18px',
                      },
                      "@media(min-Width: 900px)": {
                       p:0
                      },
                      "@media(min-Width: 1050px)": {
                        paddingLeft: "26px",
                        paddingRight: "57px",
                      },
                      "@media(min-Width: 1250px)": {
                        fontSize: "18px",
                        px: 0,
                      },
                      
                      "@media(min-Width: 1440px)": {
                        fontSize: "18px",
                        px: 5,
                      },
                      "@media(min-Width: 2560)": {
                        fontSize: "18px",
                        px: 5,
                      },
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>
                      Image Labeling, Data Annotation, and Database Management
                    </span>
                    <br />
                    We enhance accuracy and usability by organizing and
                    optimizing various
                    {windowSize.innerWidth > 425 ? <br /> : <span> </span>}
                    data sets.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            {/* seccond grid */}

            <Grid container spacing={2} sx={{ mt: 5 }}>
              <Grid xs={12} md={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { md: "center", xs: "center" },
                    paddingLeft: 4,
                  }}
                >
                  <Box sx={{ paddingTop: "10px" }}>
                    <Image src={Magnet} />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      color: "black",
                      "@media(min-Width: 375px)": {
                        fontSize: "10px",
                        px: '30px',
                      },
                      "@media(min-Width: 1050px)": {
                        paddingLeft: "23px",
                        paddingRight: "53px",
                      },
                      "@media(min-Width: 1440px)": {
                        fontSize: "18px",
                        px: 4,
                      },
                      "@media(min-Width: 2560px)": {
                        fontSize: "18px",
                        px: 4,
                      },
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>
                      Lead Generation and Pre-sales Assistance
                    </span>
                    <br />
                    We engage with new prospects, nurture leads, and ensure your
                    sales team
                    {windowSize.innerWidth > 425 ? <br /> : <span> </span>}
                    stays focused on closing deals.
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            {/* third grid */}
            <Grid container spacing={2} sx={{ mt: 5 }}>
              <Grid
                xs={12}
                md={12}
                sx={{
                  backgroundColor: "#C7DCE8",
                  border: 0,
                  borderRadius: "50px 0 0 50px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    py: 2,
                    "@media(min-Width: 375px)": {
                      paddingLeft: '30px',
                    },

                    "@media(min-Width: 750px)": {
                      paddingLeft: 5,
                    },
                    "@media(min-Width: 900px)": {
                      paddingLeft: 1,
                    },
                    "@media(min-Width: 1050px)": {
                      px: "65px",
                    },
                   
                    "@media(min-Width: 1250px)": {
                      paddingLeft: 0,
                    },
                    "@media(min-Width: 1440px)": {
                      paddingLeft: 9,
                    },
                
                    "@media(min-Width: 2560px)": {
                      paddingLeft: 12,
                    },
                  }}
                >
                  <Box >
                    <Image src={Audio} />
                  </Box>
                  <Typography
                    sx={{
                      color: "black",
                      fontFamily: "Poppins",
                      "@media(min-Width: 375px)": {
                        fontSize: "10px",
                        px: 3,
                      },
                      "@media(min-Width: 1440px)": {
                        fontSize: "18px",
                        px: 2,
                        paddingLeft: 5,
                      },
                      "@media(min-Width: 2560px)": {
                        fontSize: "18px",
                        px: 4,
                        paddingLeft: 5,
                      },
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>
                      Audio and Video Processing
                    </span>
                    <br />
                    From remote monitoring to comprehensive analysis, we handle
                    all aspects
                    {windowSize.innerWidth > 425 ? <br /> : <span> </span>}
                    of audio and video data processing.
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            {/* fourth grid */}
            <Grid container spacing={2} sx={{ mt: 5 }}>
              <Grid xs={12} md={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingLeft: 5,
                  }}
                >
                  <Box sx={{ paddingTop: "10px" }}>
                    <Image src={Globe} />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      color: "black",
                      "@media(min-Width: 375px)": {
                        fontSize: "11px",
                        paddingLeft: "25px",
                      },
                      "@media(min-Width: 750px)": {
                        fontSize: "11px",
                        px: 2,
                      },
                      "@media(min-Width: 900px)": {
                        fontSize: "11px",
                        px: 0,
                        paddingLeft: 2,
                      },
                      "@media(min-Width: 1050px)": {
                        px: "22px",
                      },
                      "@media(min-Width: 1440px)": {
                        fontSize: "18px",
                        px: 5,
                      },
                      "@media(min-Width: 2560px)": {
                        fontSize: "18px",
                        px: 5,
                      },
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>
                      Staff Augmentation
                    </span>
                    <br />
                    Expand workforce with skilled external personnel to manage
                    projects and
                    {windowSize.innerWidth > 425 ? <br /> : <span> </span>}
                    boost organizational capacity.
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            {/* fifth grid */}
            <Grid container spacing={2} sx={{ mt: 5 }}>
              <Grid
                xs={12}
                md={12}
                sx={{
                  backgroundColor: "#C7DCE8",
                  border: 0,
                  borderRadius: "0 50px 50px 0",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    py: 2,
                    paddingLeft: 4,
                  }}
                >
                  <Box sx={{ paddingTop: {xs:0,md:"10px" }}}>
                    <Image src={group} />
                  </Box>
                  <Typography
                    sx={{
                      color: "black",
                      fontFamily: "Poppins",

                      "@media(min-Width: 375px)": {
                        fontSize: "10px",
                        px: 2,
                      },
                      "@media(min-Width: 750px)": {
                        fontSize: "10px",
                        px: 4,
                      },
                      "@media(min-Width: 900px)": {
                        fontSize: "11px",
                        px: 0,
                        paddingLeft: "10px",
                      },
                      "@media(min-Width: 1050px)": {
                        paddingLeft: "10px",
                        px: "13px",
                      },
                      "@media(min-Width: 1440px)": {
                        fontSize: "18px",
                        px: 4,
                      },
                      "@media(min-Width: 2560px)": {
                        fontSize: "18px",
                        px: 4,
                      },
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>
                      Offshore Solutions
                    </span>
                    <br />
                    Tailored offshore teams built to suit your specific workflow
                    and operational
                    {windowSize.innerWidth > 425 ? <br /> : <span> </span>}
                    needs.              <Grid xs={3}></Grid>

                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          </Box>
          
        )}

        {/* Fifth section */}
        <Container maxWidth="xl">
          <Box sx={{ mt: 10 }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Poppins",
                textAlign: "center",
                // fontWeight: "bold",
                color: "#0B0706",
                "@media(min-Width: 375px)": {
                  fontSize: "24px",
                },

                "@media(min-Width: 750px)": {
                  fontSize: "50px",
                },
                "@media(min-Width: 1440px)": {
                  fontSize: "64px",
                },
              }}
            >
              How We Work
            </Typography>

            <Box sx={{ mt: 5, mb: 10 }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{ display: "flex" }}
              >
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{ display: "flex", justifyContent: "end" }}
                >
                  <Card
                    variant="outlined"
                    sx={{
                      fontFamily: "Poppins",

                      backgroundColor: "#FCF9F9",
                      borderRadius: 3,
                      "@media(min-Width: 750px)": {
                        width: "300px",
                        height: "180px",
                      },
                      "@media(min-Width: 1440px)": {
                        height: "220px",
                        width: "400px",
                      },
                    }}
                  >
                    <CardContent sx={{mt:2}}>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",

                          fontSize: "20px",
                          color: "background: #0B0706",
                          fontWeight: "bold",
                          "@media(min-Width: 375px)": {

                            fontSize: "18px",
                          },
                          "@media(min-Width: 750px)": {

                            fontSize: "16px",
                            paddingLeft: 4.5,
                          },
                          "@media(min-Width: 1050px)": {
                            fontSize: "16px",
                            paddingLeft: 4,
                          },
                          "@media(min-Width: 1440px)": {
                            fontSize: "20px",
                            paddingLeft: 4,
                          },
                        }}
                      >
                        Identify Your Requirements
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          "@media(min-Width: 375px)": {
                            fontSize: "18px",
                          },
                          "@media(min-Width: 750px)": {
                            fontSize: "15px",
                            px: 5,
                          },
                          "@media(min-Width: 1050px)": {
                            fontSize: "16px",
                            px: 4,
                          },
                          "@media(min-Width: 1440px)": {
                            fontSize: "20px",
                            px: 4,
                          },
                        }}
                      >
                        Clarify your needs and objectives to guide our
                        collaborative efforts effectively.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Card
                    variant="outlined"
                    sx={{
                      backgroundColor: "#FCF9F9",
                      borderRadius: 3,
                      "@media(min-Width: 750px)": {
                        width: "300px",
                        height: "180px",
                      },
                      
                      "@media(min-Width: 1440px)": {
                        height: "220px",
                        width: "400px",
                      },
                    }}
                  >
                    <CardContent sx={{ mt: 2 }}>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",

                          fontSize: "20px",
                          color: "background: #0B0706",
                          fontWeight: "bold",
                          "@media(min-Width: 375px)": {
                            fontSize: "18px",
                          },
                          "@media(min-Width: 750px)": {
                            fontSize: "16px",
                            paddingLeft: 4.5,
                          },
                          "@media(min-Width: 1050px)": {
                            fontSize: "16px",
                            paddingLeft: 5,
                          },
                          "@media(min-Width: 1440px)": {
                            fontSize: "20px",
                            paddingLeft: 7,
                          },
                        }}
                      >
                        Tailored Solutions
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          "@media(min-Width: 375px)": {
                            fontSize: "18px",
                          },
                          "@media(min-Width: 750px)": {
                            fontSize: "15px",
                            px: 5,
                          },
                          "@media(min-Width: 1050px)": {
                            fontSize: "16px",
                            px: 5,
                          },
                          "@media(min-Width: 1440px)": {
                            fontSize: "20px",
                            px: 7,
                          },
                        }}
                      >
                        We'll craft customized solutions to address your
                        specific challenges and goals.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{ display: "flex", justifyContent: "start" }}
                >
                  <Card
                    variant="outlined"
                    sx={{
                      backgroundColor: "#FCF9F9",
                      borderRadius: 3,
                      "@media(min-Width: 750px)": {
                        width: "300px",
                        height: "180px",
                      },
                      "@media(min-Width: 1440px)": {
                        height: "220px",
                        width: "400px",
                      },
                    }}
                  >
                    <CardContent sx={{ mt: 2 }}>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",

                          fontSize: "20px",
                          color: "background: #0B0706",
                          fontWeight: "bold",
                          "@media(min-Width: 375px)": {
                            fontSize: "18px",
                          },
                          "@media(min-Width: 750px)": {
                            fontSize: "16px",
                            paddingLeft: 4.5,
                          },
                          "@media(min-Width: 1050px)": {
                            fontSize: "16px",
                            paddingLeft: 4,
                          },
                          "@media(min-Width: 1440px)": {
                            fontSize: "20px",
                            paddingLeft: 6,
                          },
                        }}
                      >
                        Continuous Refinement
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          "@media(min-Width: 375px)": {
                            fontSize: "18px",
                          },
                          "@media(min-Width: 750px)": {
                            fontSize: "15px",
                            px: 5,
                          },
                          "@media(min-Width: 1050px)": {
                            fontSize: "16px",
                            px: 4,
                            paddingRight: 1,
                          },
                          "@media(min-Width: 1440px)": {
                            fontSize: "20px",
                            px: 6,
                            paddingRight: 1,
                          },
                        }}
                      >
                        Through rigorous testing and ongoing refinement, we
                        enhance our methods to ensure optimal results.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>

        {/* 6th section */}

        {windowSize.innerWidth > 1900 ? (
          <Container fluid maxWidth="xl">
             <Box sx={{ position: "relative" }}>
            {windowSize.innerWidth > 425 ? (
              <Image src={youtube} width={1500} />
            ) : (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Image src={mobileyoutube} />
              </Box>
            )}
            <Link
              target="_blank"
              href={
                "https://www.youtube.com/watch?v=-Mo69AWbayM"
              }
            >
               <PlayCircleFilledWhiteOutlinedIcon sx={{position: "absolute",
               backgroundColor: "transparent",
               color: "white",
                  top: "38%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width:'500px',
                  height:'5rem'
                  }}/>
            </Link>
          </Box>
          </Container>
        ) : (
          <Box sx={{ position: "relative" }}>
            {windowSize.innerWidth > 375 ? (
              <Image style={{width: "100%" ,height:300}} src={youtube}  />
            ) : (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Image src={Myoutube} />
              </Box>
            )}
            <Link
              target="_blank"
              href={
                "https://www.youtube.com/watch?v=-Mo69AWbayM"
              }
            >
             
              <PlayCircleFilledWhiteOutlinedIcon sx={{position: "absolute",
               backgroundColor: "transparent",
               color: "white",
                  top: "38%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width:'500px',
                  height:'5rem'
                  }}/>
            </Link>
          </Box>
        )}
      </div>
    </>
  );
}

export default LandingPage;

function getWindowSize() {
  if (typeof window !== "undefined") {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
}

// We'll craft customized solutions to address your specific challenges and goals.
