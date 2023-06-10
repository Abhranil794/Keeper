"use client";
import { Box, Typography } from "@mui/material";
import HighlightIcon from "@mui/icons-material/Highlight";

const Nav = () => {
  return (
    <Box className="p-5 flex bg-amber-400 text-white">
      <HighlightIcon className="text-3xl" />
      <Typography className="text-2xl">Keeper</Typography>
    </Box>
  );
};

export default Nav;
