"use client";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  const year: number = new Date().getFullYear();
  return (
    <Box className="py-5 mb-1">
      <Typography className="text-neutral-500 text-center">
        &copy; Copyright {year}
      </Typography>
    </Box>
  );
};

export default Footer;
