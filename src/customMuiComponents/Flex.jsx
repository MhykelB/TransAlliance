import { Box } from "@mui/material";
import React from "react";

const Flex = React.forwardRef(
  (
    {
      alignItems = "center",
      justifyContent,
      columnGap = 1,
      styles,
      children,
      sx = {},
      ...props
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        sx={{
          display: "flex",
          alignItems,
          justifyContent,
          columnGap,
          ...sx,
          ...styles,
        }}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

export default Flex;
