"use client";
import React from "react";
// import PropTypes from "prop-types";
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  Card,
  CardContent,
} from "@mui/material";

import ShareButtons from "../component/ShareButton";
import Link from "next/link";
import Popover from "@mui/material/Popover";

// page.propTypes = {};

function support(isDarkMode) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const shareUrl = "https://example.com";
  const title = "Example Website";

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <div className={isDarkMode ? "light-mode" : "light-mode"}>
      <Container >
        <Box sx={{ display: "flex", justifyContent: "center", mt: {xs:12,md:10} }}>
          <Typography
            sx={{
              fontSize: {xs:'24px',md:'64px'}, fontWeight: 600 ,
              fontFamily: "Poppins",
              my:7
            }}
          >
            Support Us
          </Typography>
        </Box>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: { xs: "15px", md: "36px" },
            fontWeight: "500px",
            textAlign: "center",
            px: { xs: 5, md: 10},
            // mt:5
          }}
        >
          We welcome your inquiries, contributions, and partnership
          opportunities as we strive to make a meaningful difference in the
          lives of those we serve.
        </Typography>

        <Grid container spacing={2} mt={6}>
          <Grid item xs={12} sx={{display:'flex', justifyContent:'center'}}>
            <Card
              sx={{
                textAlign: "center",
                backgroundColor: "#FCF9F9",
                border: 1,
                borderColor: "#0000001f",
                width: { xs: 345, md: 500 },
                mb:10
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    fontSize: "36px",
                    fontFamily:'Poppins',
                    mt: 2,
                  }}
                >
                  Spread the Word
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs:'15px',md:'20px'},
                    fontWeight: "300px",
                    px: {xs:3,md:10},
                    mt: 2,
                  }}
                >
                  Help us spread awareness by sharing our impactful stories,
                  photos, and videos on your social media platforms.
                </Typography>

                <Button
                  sx={{
                    backgroundColor: "#DAE8F0",
                    color: "#012F6B",
                    width: "150px",
                    mb: 4,
                    mt: 5,
                  }}
                  aria-describedby={id}
                  variant="contained"
                  onClick={handleClick}
                >
                  Share Link
                </Button>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <ShareButtons url={shareUrl} title={title} />
                </Popover>
              </CardContent>
            </Card>
          </Grid>

        
        </Grid>
      </Container>
      </div>
    </>
  );
}

export default support;
