"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import FooterLogo from "../public/Flogo.png";
import Image from "next/image";
import Link from "next/link";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import linkedin from "../public/linkedin.png";
import { Icon } from "@iconify/react";
function Footer(isDarkMode) {
  return (
    <>
      <div className={isDarkMode ? "light-mode" : "light-mode"}>
        <Box
          sx={{
            backgroundColor: "#FCF9F9",
            // marginTop: "calc(5% + 10px)",
            // position: 'fixed',
            bottom: 0,
            width: "100%",
          }}
        >
          <Container maxWidth="xl">
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                md={4}
                sx={{ display: "flex", justifyContent: "center", my: 3 }}
              >
                <Image src={FooterLogo} width={100} height={120} />
              </Grid>

              <Grid item xs={6} md={4}>
                <Box
                  sx={{
                    display: "block",
                    color: "#000000",
                    my: 3,
                    textAlign: "center",
                    borderLeft: { md: 1, xs: "none" },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "12px", md: "20px" },
                    }}
                  >
                    Address:
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "12px", md: "20px" },
                    }}
                  >
                    5-Sesay Street, Tulun Road,
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "12px", md: "20px" },
                    }}
                  >
                    Lungi, Sierra Leone
                  </Typography>
                  <Link href={"https://mail.google.com/mail"}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: { xs: "12px", md: "20px" },
                      }}
                    >
                      sales@ponka.org
                    </Typography>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={6} md={4}>
                <Box
                  sx={{
                    display: "block",
                    color: "#000000",
                    fontSize: "20px",
                    my: 3,
                    textAlign: "center",
                    borderLeft: { md: 1, xs: "none" },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "12px", md: "20px" },
                    }}
                  >
                    <Link href="/about">About </Link>
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "12px", md: "20px" },
                    }}
                  >
                    <Link href="/ourservices"> Services</Link>
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "12px", md: "20px" },
                    }}
                  >
                    <Link href="/contact">Contact </Link>
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: 1,
                      alignItems: "center",
                    }}
                  >
                    <Link
                      href={
                        "https://www.instagram.com/ponka.global?igsh=MWZ3NDRleWV1MzN1MQ%3D%3D&utm_source=qr"
                      }
                    >
                      {/* <InstagramIcon sx={{ width: "40px", height: "27px" }} /> */}
                      <Icon icon="ant-design:instagram-outlined" style={{ width: "40px", height: "27px" }}
/>
                    </Link>
                    <Link href={"https://www.linkedin.com/company/ponka/"}>
                      <Icon
                        icon="ant-design:linkedin-outlined"
                        style={{ width: "40px", height: "27px" }}
                      />
                      {/* <Image src={linkedin} style={{ width: "27px", height: "22px",borderRadius:5 }}/> */}
                    </Link>
                    <Link href={"https://mail.google.com/mail"}>
                      {/* <MailOutlineIcon sx={{ width: "40px", height: "27px" }} /> */}
                      <Icon icon="ant-design:mail-outlined" style={{ width: "40px", height: "27px" }}/>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    </>
  );
}

export default Footer;
