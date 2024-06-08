import React from 'react';
import { Button } from '@mui/material';
import { FacebookShareButton, TwitterShareButton } from 'react-share';

const ShareButtons = ({ url, title }) => {
  return (
    <>
       <FacebookShareButton url={url} quote={title}>
        <Button variant="contained" color="primary">
          Share on Facebook
        </Button>
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        <Button variant="contained" color="primary">
          Share on Twitter
        </Button>
      </TwitterShareButton>
    </>
   
  );
};

export default ShareButtons;