import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { Button, Typography } from "@mui/material";
import React from "react";

const BackButton = ({ onClick, label = "Go up", size = "medium" }) => {
  return (
    <Button
      variant={"text"}
      size={size}
      sx={{
        textAlign: "left",
        fontSize: "1.1rem",
        color: "inherit",
        // mb: { xs: 1.5, sm: 1.5 },
        mt: { xs: "0rem", sm: "0rem" },
        pl: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textTransform: "none",
      }}
      onClick={onClick}
    >
      <KeyboardBackspaceRoundedIcon sx={{ color: "#6A6A6A" }} /> {label}
    </Button>
  );
};

export default BackButton;
