import { Container, Grid, Typography, Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import village from "../public/Village.png";
import education from "../public/Education.png";
import farm from "../public/Farm.png";
import Mobileabout from "./Mobileabout";
import { useState, useEffect } from "react";

function about(isDarkMode) {

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
    <div className={isDarkMode? 'light-mode' : 'light-mode'}>
    {windowSize.innerWidth>425?
    <>
     <Container maxWidth='xl'>
     <Grid container spacing={2}>
       <Grid item xs={12} md={6} sx={{ mt:{xs:15,md:22},textAlign:'start' }}>
         <Typography
           variant="h2"
           sx={{ fontFamily:'Poppins', fontSize: {xs:'24px',md:'64px'}, fontWeight: 600 }}
         >
           Our Story
         </Typography>

         <Box sx={{ mt: 10 }}>
           <Typography
             variant="body"
             sx={{
               fontFamily:'Poppins',
             
               "@media(min-Width: 375px)": {
                 fontSize: "36px",
                 lineHeight: "54px",
               },
               "@media(min-Width: 1440px)": {
                 fontSize: "36px",
                 lineHeight: "54px",
               },
             }}
           >
             Born in a village, thriving globally. Empowering communities
             through opportunity.
           </Typography>
         </Box>

         <Box sx={{ mt: 10 }}>
           <Typography
             variant="body"
             sx={{
               fontFamily:'Poppins',
               fontSize: "20px",
               fontWeight: "300px",
               lineHeight: "30px",
             }}
           >
           PONKA is a social impact outsourcing/offshoring enterprise committed to uplifting the village of Ponka in Sierra Leone. 
           Our focus on youth employment fosters improved living standards in one of the world's most economically disadvantaged communities. 
           Despite abundant talent, limited resources hinder local residents from showcasing their potential. 
           For tech companies seeking cost-effective human intelligence services, Ponka provides competitive pricing, top-tier quality, 
           and the invaluable opportunity to support underprivileged communities.
           </Typography>
         </Box>
       </Grid>
       <Grid item xs={12} md={6}>
         <Box sx={{ padding: 18 }}>
           <Image src={village} />
         </Box>
       </Grid>
     </Grid>
   </Container>

   <Box sx={{ backgroundColor: "#FCF9F9" }}>
     <Container maxWidth='xl'>
       <Grid container spacing={2}>
         <Grid
           item
           xs={12}
           md={6}
           sx={{ display: "flex", justifyContent: "start" }}
         >
           <Image src={education} />
         </Grid>
         <Grid item xs={12} md={6}>
           <Box sx={{ display: "flex", justifyContent: "start",mt:8}}>
             <Typography
               variant="h2"
               sx={{
                 fontFamily:'Poppins',
                 fontSize: "64px",
                 fontWeight: 600,
                 
               }}
             >
               How do we work?
             </Typography>
           </Box>
           <Box
             sx={{
               display: "flex",
               justifyContent: "start",
              
             }}
           >
             <Typography
               variant="body"
               sx={{
                fontFamily:'Poppins',
               
              
               "@media (min-Width: 765px)": {
                 fontSize: "16px",
                 fontWeight: "300px",
                 lineHeight: "30px",
                 px:5,
                 mt: 2,

               },  "@media (min-Width: 900px)": {
                 fontSize: "15px",
                 fontWeight: "300px",
                 lineHeight: "30px",
               },  "@media (min-Width: 1025px)": {
                 fontSize: "20px",
                 fontWeight: "300px",
                 lineHeight: "30px",
                 mt: 4,

               },  "@media (min-Width: 1440px)": {
                 fontSize: "20px",
                 fontWeight: "300px",
                 lineHeight: "30px",
                 mt: 8,

               },
              }}
             >
               Most tech companies need low-cost human intelligence services.
               Normally the companies have a few in-house people and in other
               cases they are using massive outsourcing companies costing
               them a lot. Ponka offers better pricing, high quality work,
               and more than anything - the ability to help one of the
               poorest communities on earth.
             </Typography>
           </Box>
           <Box
             sx={{
               display: "flex",
               justifyContent: "center",
             }}
           >
             <Typography
               sx={{
                 fontFamily:'Poppins',
                
               
                "@media (min-Width: 765px)": {
                  fontSize: "16px",
                  fontWeight: "300px",
                  lineHeight: "30px",
                  px:5,
                  mt: 2,

                },  "@media (min-Width: 900px)": {
                  fontSize: "15px",
                  fontWeight: "300px",
                  lineHeight: "30px",
                },  "@media (min-Width: 1025px)": {
                  fontSize: "20px",
                  fontWeight: "300px",
                  lineHeight: "30px",
                },  "@media (min-Width: 1440px)": {
                  fontSize: "20px",
                  fontWeight: "300px",
                  lineHeight: "30px",
                  mt: 5,

                },
               }}
             >
               Ponka is proud to be the first tech company in Sierra Leone
               and as a social impact enterprise, 100% of the profits accrued
               from our projects are used to support the local community and
               to the development of the village.
             </Typography>
           </Box>
         </Grid>
       </Grid>
     </Container>
   </Box>
   
   <Container maxWidth='xl'>
   <Box
     sx={{
       position:'relative',
      backgroundImage: `url('/Farm.png')`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: 'cover',
       height: "100vh",
       width:"100%",
       backgroundPosition: '50% 50%',
    
           }}>
 
   <Container
     maxWidth="xl"
  
   >
    <Box sx={{paddingTop:'60px'}}>

    <Typography  sx={{  fontFamily:'Poppins',fontSize: "60px", fontWeight: 550}}>
       Why choose Ponka?
     </Typography>
      </Box>


     <Grid container spacing={2} sx={{ mt: 1}}>
       <Grid item xs={12} md={12}>
         <Typography
           variant="body"
           sx={{
           
            //  px: 10,
            "@media only screen and(min-Width: 775px)": {
              fontFamily:'Poppins',
              fontSize: "16px",
              fontWeight: "400px",
              display: "flex",
              justifyContent: "center",
            },
            "@media only screen and(min-Width: 900px)": {
              fontFamily:'Poppins',
              fontSize: "20px",
              fontWeight: "400px",
              display: "flex",
              justifyContent: "center",
            },"@media only screen and(min-Width: 1025px)": {
              fontFamily:'Poppins',
              fontSize: "25px",
              fontWeight: "400px",
              display: "flex",
              justifyContent: "center",
            },"@media (min-Width: 1440px)": {
              fontFamily:'Poppins',
              fontSize: "36px",
              fontWeight: "400px",
              display: "flex",
              justifyContent: "center",
            },
            "@media (min-Width: 1250px)": {
              fontFamily:'Poppins',
              fontSize: "25px",
              fontWeight: "400px",
              display: "flex",
              justifyContent: "center",
            },
            
           }}
         >
          Get a specialized team customized to your requirements, freeing up your time to concentrate on core business functions. Enjoy the adaptability to seamlessly adjust to evolving demands, with round-the-clock work shifts ensuring continuous support. Boost productivity and efficiency in your operations while also contributing to meaningful social impact.
         </Typography>
       </Grid>
      
     </Grid>
   </Container>
   </Box>
   </Container>
  
   </>:
<Mobileabout/>
  }
    </div> 
    </>
  );
}

export default about;
function getWindowSize() {
  if (typeof window !== "undefined") {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
}