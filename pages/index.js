import Head from "next/head";
// import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import LandingPage from "@/component/LandingPage";
import { Box } from "@mui/material";


const inter = Inter({ subsets: ["latin"] });



export default function Home(isDarkMode) {
  
  return (
    <Box sx={{border:"3px solid red"}}>
      <div className={isDarkMode?'light-mode':'light-mode'}>
      <LandingPage/>

      </div>
      {/* </main> */}
    </Box>
  );
}
