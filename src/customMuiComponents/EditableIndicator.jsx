import React from "react";
import { IconButton, Typography } from "@mui/material";
import Flex from "./Flex";
import BorderColorIcon from "@mui/icons-material/BorderColor";

export const EditableIndicator = ({ showHelper }) => (
  <IconButton sx={{ p: 0, cursor: "default", m: 0 }}>
    <Flex alignItems={"baseline"}>
      <BorderColorIcon
        color="#787878"
        sx={{
          fontSize: "14px",
        }}
        style={{ cursor: "default" }}
      />
      {showHelper && (
        <Typography component={"span"} fontSize={"14px"} sx={{ ml: "-3px" }}>
          Edit
        </Typography>
      )}
    </Flex>
  </IconButton>
);
