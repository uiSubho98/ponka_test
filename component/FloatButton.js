import React from 'react';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';
import support from '../public/handpic.png'
import Image from "next/image";

function FloatButton(props) {
  
    return (
        <>
        <Button
      variant="contained"
    
    //   onClick={handleClick}
      style={{
        backgroundColor:'#1eb53a',
        position: 'fixed',
        bottom: '228px',
        right: '30px',
        zIndex: 1000, // Adjust as needed\\\
        borderRadius:'1550px',
      }}
    >
      <Link href='/support'>
      <Image src={support} style={{width:50,height:50}}/>
      </Link>
    </Button>
        </>
    );
}

export default FloatButton;