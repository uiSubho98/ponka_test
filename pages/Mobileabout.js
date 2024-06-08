import { Container, Grid, Typography, Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import village from "../public/Village.png";
import education from "../public/Education.png";
import mobilevillage from "../public/mobilevillage.png"
import mobileeducation from "../public/mobileeducation.png"

import farm from "../public/Farm.png";

function mobileabout(props) {
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6}  sx={{ mt:{xs:15,md:30} }}>
           
          <Typography
              variant="h2"
              sx={{ fontFamily:'Poppins', fontSize:'24px', fontWeight: 600 ,mt:2}}
            >
              Our Story
            </Typography>
            <Box sx={{ mt: 5 }}>
              <Typography
                variant="body"
                sx={{
                  fontFamily:'Poppins',
                fontSize:'16px',
                lineHeight:'30px'
                }}
                
              >
                Born in a village, thriving globally. Empowering communities
                through opportunity.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ paddingTop:15 }}>
              <Image src={mobilevillage} />
            </Box>
          </Grid>
        </Grid>
        
            <Box sx={{ mt: 5 }}>
              <Typography
                variant="body"
                sx={{
                  fontFamily:'Poppins',
                  fontSize: "11px",
                  fontWeight: "300px",
                  lineHeight: "15px",
                }}
              >
                Ponka was founded in a village in the middle of a jungle in
                Sierra Leone in 2018 with the aim to increase the employment of
                the people in the village and help better the living standards
                of the people of one of the poorest communities in the world.
                Most of our employees grew up in Sierra Leone during the 1991
                civil war and their employment is the most critical path for
                social change in the 5th poorest country on earth. The people
                here are very talented but do not get to showcase it because of
                the limited number of resources available.
              </Typography>
            </Box>
      </Container>

      <Box sx={{ backgroundColor: "#FCF9F9",mt:5 }}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid
              item
              xs={6}
              md={6}
              sx={{ display: "flex", justifyContent: "end" }}
            >
              <Image src={mobileeducation} />
            </Grid>
            <Grid item xs={6} md={6}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily:'Poppins',
                    fontSize: "24px",
                    fontWeight: 600,
                  }}
                >
                  How do we work?
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 3,
                  paddingRight: 5,
                }}
              >
                <Typography
                  variant="body"
                  sx={{
                    fontFamily:'Poppins',
                    fontSize: "10px",
                    fontWeight: "300px",
                    lineHeight: "21px",
                    // px:2,
                  }}
                >
                  Most tech companies need low-cost human intelligence services.
                  Normally the companies have a few in-house people and in other
                  cases they are using massive outsourcing companies costing
                  them a lot. 
                </Typography>
              </Box>
             
            </Grid>
          </Grid>
          <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 3,
                  // paddingLeft: 5,
                }}
              >
                <Typography
                  variant="body"
                  sx={{
                    fontFamily:'Poppins',
                    fontSize: "10px",
                    fontWeight: "300px",
                    lineHeight: "15px",
                    px: 2,
                  }}
                >
                  Ponka offers better pricing, high quality work,
                  and more than anything - the ability to help one of the
                  poorest communities on earth.
                  Ponka is proud to be the first tech company in Sierra Leone
                  and as a social impact enterprise, 100% of the profits accrued
                  from our projects are used to support the local community and
                  to the development of the village.
                </Typography>
              </Box>
        </Container>
      </Box>
      
      
     <Box
        sx={{
          position:'relative',
         backgroundImage: `url('/mobileFarm.png')`,
         backgroundRepeat: `no-repeat`,
         backgroundSize: 'cover',
          height: "70vh",
          width:"100%",
          mt:5
              }}>
      </Box>
  
        <Box
        sx={{
          position: "absolute",
          top: "175%",
          left: "28%",
          transform: "translateX(-25%)",
        }}
        >
         
        <Typography  sx={{  fontFamily:'Poppins',fontSize: "24px", fontWeight: 550}}>
          Why choose Ponka?
        </Typography>

        <Typography
              variant="body"
              sx={{
                fontFamily:'Poppins',
                fontSize: "10px",
                fontWeight: "400px",
                display: "flex",
                justifyContent: "center",
                mt:2,
                // px: 5,
              }}
            >
              Receive a skilled team that is tailored to your needs. More focus
              on your core business activities. Flexibility in adapting to
              changes that occur. Round the clock work shifts. Increase
              efficiency in your tasks. Participation in a significant social
              impact.
            </Typography>
        </Box>
      
    
    </>
  );
}

export default mobileabout;
