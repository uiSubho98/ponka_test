// "use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Image from "next/image";

import Logo from "../public/Logo.png";
import Link from "next/link";
import LogoNew from '../public/LogoNew.png'

// const pages = ["About Us", "Our Service", "Support", "Contact Us"];
const pages = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/ourservices",
  },
  {
    name: "Support",
    path: "/support",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

function Navbar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <AppBar sx={{ backgroundColor: "#FCF9F9" }}>
        <Container minWidth="xll" sx={{py:1}}>
          <Toolbar disableGutters>
            
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                // width: 300,
              }}
            >
              <Link href="/">
                <Image src={LogoNew} />
              </Link>
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="#0B0706"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link href={page.path}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                flexGrow: 1,

                fontWeight: 700,
                color: "black",
                textDecoration: "none",
              }}
            >
              <Link href="/">
                <Image src={LogoNew} />
              </Link>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                color: "black",
                justifyContent: "space-evenly",
                flexGrow: 2,
                fontSize: "20px",
              }}
            >
              <Link href="/about"> About </Link>
              <Link href="/ourservices">Service</Link>

              <Link href="/support"> Support</Link>

              <Link href="/contact"> Contact</Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Navbar;
