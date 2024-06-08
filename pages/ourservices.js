import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import Image from "next/image";

import React from "react";
import Edesia from "../public/edesia.png";
// import warby from "../public/warby.png";
import mobilewarby from "../public/mobilewarby.png";
import mobileEdecia from "../public/mobileEdecia.png";
import { useState, useEffect } from "react";
import edecia from "../public/edecia.png";
import Warby from "../public/Warby.png";
import coral from "../public/coral.png";
import biscience from "../public/biscience.png";
import mobileCoral from "../public/mobileCoral.png";
import mobileBiscience from "../public/mobileBiscience.png";
const data = [
  { title: "Automobiles", image: "/Automonus.png" },
  { title: "Legal", image: "/Legal.png" },
  { title: "Retail", image: "/Retail.png" },
  { title: "Robotics", image: "/Robotics.png" },
  { title: "Finance", image: "/Finance.png" },
  { title: "Sports & Fitness", image: "/Sports.png" },
  { title: "Agriculture", image: "/Agriculture.png" },
  { title: "Geospatial", image: "/Geospatial.png" },
  { title: "Healthcare", image: "/Healthcare.png" },
  { title: "Conversational AI", image: "/ConversationalAi.png" },
  { title: "Ed-Tech", image: "/EdTech.png" },
  { title: "Softwares", image: "/Software.png" },

  // Add more data as needed
];

const client = [
  { image: "/coraldd.png" },
  { image: "/ann.png" },
  { image: "/Dairycs.png" },
  { image: "/MyCrops.png" },
  { image: "/Pumba.png" },
  { image: "/Knighted.png" },
  { image: "/kemtai-1.png" },
  { image: "/See-Tree.png" },
  { image: "/Leap-Earner.png" },
  { image: "/edesia2.png" },
  { image: "/Fitcam.png" },
  { image: "/BiScience.png" },
];

function ourservices(isDarkMode) {
  const iconData = [{ imageUrl: "", heading: "" }];
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
      <div className={isDarkMode ? "light-mode" : "light-mode"}>
        <Container maxWidth="xl" sx={{ pt: { xs:15,md: 20 } }}>
          
            <Typography
              sx={{
              
                fontFamily: "Poppins",
                fontSize: { xs: "24px", md: "64px" },
                fontWeight: 600,
              }}
            >
              Our Services
            </Typography>
        

          <Typography
            sx={{
              fontFamily: "Poppins",
              mt: { xs: 5, md: 2 },
              fontSize: { xs: "12px", md: "36px" },
              fontWeight: "300px",
            }}
          >
            Choose Ponka for exceptional service excellence and
            innovation-driven solutions, with a track record of delivering
            exceptional results.
          </Typography>
        </Container>

        <Box sx={{ mt: 15 }}>
          <Container maxWidth="xl">
            <Grid
              container
              direction={"row"}
              justifyContent="space-between"
              spacing={10}
              sx={{
                paddingInline: { xs: "15px", md: "115px" },
                paddingInlineStart: { xs: "75px" },
              }}
            >
              {data.map((item) => (
                <Grid
                  xs={6}
                  md={2}
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "end", md: "center" },
                  }}
                >
                  <Card
                    sx={{
                      textAlign: "center",
                      mt: 3,
                      border: 1,
                      borderColor: "#0000001f",
                      borderRadius: "5px",
                      "@media(min-Width: 375px)": {
                        width: "160px",
                        height: "160px",
                      },
                      "@media(min-Width: 1440px)": {
                        width: "200px",
                        height: "183px",
                      },
                    }}
                  >
                    <CardContent sx={{ mt: 3 }}>
                      <Image
                        src={item.image}
                        width={70}
                        height={70}
                        alt={item.title}
                      />
                      <Typography sx={{ mt: 2 }}> {item.title}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Container maxWidth="xl">
          {windowSize.innerWidth > 425 ? (
            <Box sx={{ mt: 15 }}>
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "64px" },
                  lineHeight: "70px",
                  fontFamily: "Poppins",
                }}
              >
                Discover How We Empower Businesses
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",

                  fontSize: "36px",
                  fontWeight: "500px",
                  mt: 5,
                }}
              >
                Our business model is based on recurring business and referral
                from our happy customers. We go that extra mile to ensure
                complete customer satisfaction.
              </Typography>

              <Grid
                container
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Image src={coral} />
              </Grid>

              <Grid
                container
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Image src={biscience} />
              </Grid>

              <Grid
                container
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Image src={edecia} />
              </Grid>

              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  paddingLeft: 2,
                }}
              >
                <Image src={Warby} />
              </Grid>
            </Box>
          ) : (
            <Box sx={{ mt: 10 }}>
              <Typography
                sx={{
                  fontSize: { xs: "24px", md: "64px" },
                  fontWeight: "bold",
                  lineHeight: { xs: "40px", md: "64px" },
                  fontFamily: "Poppins",
                }}
              >
                Discover How We Empowers
                {windowSize.innerWidth > 425 ? <br /> : <span> </span>}
                Businesses
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  fontSize: { xs: "10px", md: "20px" },
                  fontWeight: "500px",
                  fontFamily: "Poppins",
                }}
              >
                Our business model is based on recurring business and referral
                business from our happy customers. We go that extra mile to
                ensure complete customer satisfaction.
              </Typography>
              <Grid
                container
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Image src={mobileCoral} />
              </Grid>
              <Grid
                container
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Image src={mobileBiscience} />
              </Grid>

              <Grid
                container
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Image src={mobileEdecia} />
              </Grid>

              <Grid
                container
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Image src={mobilewarby} />
              </Grid>
            </Box>
          )}

          <Grid
            container
            direction={"row"}
            justifyContent="space-between"
            spacing={10}
            sx={{
              paddingInline: { xs: "15px", md: "150px" },
              paddingInlineStart: { xs: "75px" },
              mt: 10,
              mb: 10,
            }}
          >
            {client.map((item) => (
              <Grid
                xs={6}
                md={2}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Image src={item.image} width={150} height={150} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default ourservices;
function getWindowSize() {
  if (typeof window !== "undefined") {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
}
