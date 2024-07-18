import { Box } from "@mui/material";
import React from "react";

export const TabPanel = ({ children, value, index }) => {
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ minHeight: "300px" }}>{children}</Box>}
    </div>
  );
};


