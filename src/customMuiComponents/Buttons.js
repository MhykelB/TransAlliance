import Button from "@mui/material/Button";
import * as React from "react";
import { CircularProgress } from "@mui/material";

export const ContainedButton = ({
  circleSize,
  isTextEmpty,
  children,
  isLoading,
  sx,
  fullWidth,
  onClick,
  loadingProps,
  ...props
}) => {
  return (
    <Button
      variant={"contained"}
      disabled={isTextEmpty || isLoading}
      sx={{
        borderRadius: "6px",
        minWidth: "80px",
        minHeight: "36px",
        width: fullWidth ? "100%" : "auto",
        textTransform: { xs: "none" },
        fontWeight: { xs: 500 },
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
          ...(sx?.["&:hover"] || {}),
        },
        ...sx,
      }}
      onClick={isLoading ? undefined : onClick}
      {...props}
    >
      {isLoading ? (
        <CircularProgress
          size={circleSize || 24}
          color={"inherit"}
          {...loadingProps}
        />
      ) : (
        children
      )}
    </Button>
  );
};

const OutlinedButton = React.forwardRef(
  (
    { children, isLoading, sx, fullWidth, onClick, loadingProps, ...props },
    ref
  ) => {
    return (
      <Button
        ref={ref}
        variant={"outlined"}
        sx={{
          borderRadius: "6px",
          minWidth: "80px",
          textDecoration: "none",
          minHeight: "36px",
          width: fullWidth ? "100%" : "auto",
          textTransform: { xs: "none" },
          fontWeight: { xs: 500 },
          borderColor: "#1958B8",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
            ...(sx?.["&:hover"] || {}),
          },
          ...sx,
        }}
        onClick={isLoading ? undefined : onClick}
        {...props}
      >
        {isLoading ? (
          <CircularProgress size={24} color={"inherit"} {...loadingProps} />
        ) : (
          children
        )}
      </Button>
    );
  }
);

export default OutlinedButton;
