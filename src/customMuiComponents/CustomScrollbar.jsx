import { styled } from "@mui/material";
import Box from "@mui/material/Box";

const CustomScrollbar = styled(Box, { shouldForwardProp: () => true })(() => ({
  "&::-webkit-scrollbar-track": {
    "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.1)",
    backgroundColor: "#F5F5F5",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar": {
    width: "6px",
    backgroundColor: "#F5F5F5",
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: "10px",
    backgroundColor: "rgba(54, 54, 54, 0.33)",
  },
}));

export default CustomScrollbar;
