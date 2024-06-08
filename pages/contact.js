"use client";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
} from "@mui/material";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { sendContactForm } from "../lib/api";
import map from "../public/map.png";
import Image from "next/image";
import { Router } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";
import mobileMap from "../public/mobileMap.png";

function contact(isDarkMode) {
  const apiKey = "AIzaSyDmUOSH9TwpoLk8qSm3MYkouyoqxJdb0QA";
  const defaultCenter = {
    lat: 22.695260985150792,
    lng: 75.93430530735863,
    text: "Pearl exotic, H-6, Shreeji Valley Rd, Shreeji Heights, Indore, Madhya Pradesh 452016",
  };

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    massage: "",
  });
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
  
  const mapClick = () => {
    Router.push(
      "https://www.google.com/maps/@22.7429728,75.9129235,14z?authuser=0&entry=ttu"
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    try {
      console.log("function is here");
      await sendContactForm(formData);
    } catch (error) {
      console.log("massage not sent");
    }
  };

  return (
    <>
      <div className={isDarkMode ? "light-mode" : "light-mode"}>
        <Box sx={{ display: "flex", justifyContent: "center", my: 7 }}>
          <Typography
            sx={{
              fontSize: { xs: "24px", md: "64px" },
              fontWeight: 600,
              fontFamily: "Poppins",
              mt: 10,
            }}
          >
            Contact Us
          </Typography>
        </Box>

        <Container maxWidth="xl">
          <Card
            sx={{
              backgroundColor: "#FCF9F9",
              border: 1,
              borderColor: "#0000001f",
              borderRadius: "5px",
              mt: 2,
            }}
          >
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "block",
                    textAlign: "center",
                    justifyContent: "center",
                    mt: { xs: 5, md: 6 },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "36px",
                      // fontWeight: "bold",
                    }}
                  >
                    Collaborate for Impact
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "15px", md: "20px" },
                      px: { xs: 8, md: 20 },
                      mt:5
                    }}
                  >
                    Explore partnership opportunities with Ponka to leverage our
                    expertise, resources, and networks for mutual benefit.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
                <form onSubmit={handleSubmit}>
                  <TextField
                    name="firstName"
                    label="Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    sx={{
                      backgroundColor: "#FFFFFF",
                      width: { xs: 300, md: 450 },

                      "& fieldset": { borderColor: "#C7DCE8" },
                    }}
                  />
                  <TextField
                    name="email"
                    label="E-mail"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    sx={{
                      backgroundColor: "#FFFFFF",
                      width: { xs: 300, md: 450 },
                      "& fieldset": { borderColor: "#C7DCE8" },
                    }}
                  />
                  <TextField
                    name="massage"
                    label="Write Message"
                    value={formData.massage}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    sx={{
                      "& fieldset": { border: "none" },
                      backgroundColor: "#FFFFFF",
                      width: { xs: 300, md: 450 },
                      height: 200,
                      border: 1,
                      borderColor: "#C7DCE8",
                      borderRadius: "5px",
                    }}
                  />
                  <br />
                  <Box sx={{ paddingLeft: { xs: 0, md: 5}, mb: 5, mt: 2 }}>
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        backgroundColor: "#DAE8F0",
                        color: "#012F6B",
                        width: "150px",
                      }}
                    >
                      Send
                    </Button>
                  </Box>
                </form>
              </Grid>
            </Grid>
          </Card>
        </Container>

        <Container maxWidth="xl" sx={{ mt: 8 }}>
          <Box sx={{ position: "relative" ,mb:10}}>
            {windowSize.innerWidth > 425 ? (
              <Image src={map} width={1488} />
            ) : (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Image src={mobileMap} width={350}/>
              </Box>
            )}
            <Link
              target="_blank"
              href={
                "https://www.google.com/maps/place/Ponka,+Sierra+Leone/@9.1518056,-13.1961524,142727m/data=!3m1!1e3!4m6!3m5!1s0xf037b9f8953983f:0x716b978f5f7e516f!8m2!3d9.068133!4d-12.941727!16s%2Fg%2F1tfd3rxx?authuser=0&entry=ttu"
              }
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#DAE8F0",
                  color: "#012F6B",
                  width: { xs: "100px", md: "150px" },
                  height: { xs: "30px", md: "50px" },
                  position: "absolute",
                  fontSize: { xs: "8px", md: "15px" },
                  top: "50%",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                Show On Map
              </Button>
            </Link>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default contact;

function getWindowSize() {
  if (typeof window !== "undefined") {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
}
