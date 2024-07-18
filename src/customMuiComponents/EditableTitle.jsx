import { Input, styled, TextField } from "@mui/material";

export const EditableTitle = styled(TextField)(() => ({
  marginBottom: "-3px",

  " input": {
    padding: "4px 8px",
    color: "#1958B8",
    fontSize: "1.1rem",
  },

  "&:not(:focus-within) fieldset": {
    border: "none",
  },
}));
