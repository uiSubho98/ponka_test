import Navbar from "@/component/Navbar";
import "../styles/globals.css";
import Layout from "@/component/Layout";
import Footer from "@/component/Footer";
import FloatButton from "@/component/FloatButton";
import { useState, useEffect } from "react";
import { Theme } from "@mui/system";
import { styled } from "@mui/material/styles";

import { ThemeProvider } from "@mui/material/styles";
// import theme from "./theme";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Root = styled("div")(({ theme }) => ({
  container: {
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      maxWidth: "100%", // Extra-small devices (phones, less than 600px)
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: 540, // Small devices (landscape phones, 600px and up)
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: 720, // Medium devices (tablets, 960px and up)
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: 960, // Large devices (desktops, 1280px and up)
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: 1140, // Extra large devices (large desktops, 1920px and up)
    },
  },
}));
export default function App({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check user's system preference for dark mode
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkMode);
  }, []);
  return (
    <>
      <Root>
      <div className={isDarkMode?'light-mode':'light-mode'}>
          <main className={poppins.className}>
            <Navbar />
            <Component {...pageProps} isDarkMode={isDarkMode} />
            <FloatButton />
            <Footer />
          </main>
        </div>
      </Root>
    </>
  );
}
