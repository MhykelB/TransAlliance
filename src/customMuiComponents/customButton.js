import React from "react";
import Button from "@mui/material/Button";

const CustomButton = ({ onClick, label, sx, ...rest }) => {
  return (
    <Button onClick={onClick} variant="contained" sx={sx} {...rest}>
      {label}
    </Button>
  );
};

export default CustomButton;
