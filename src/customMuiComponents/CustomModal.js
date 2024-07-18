import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  bgcolor: "background.paper",
  border: "1px solid #CDCDCD",
  borderRadius: "0.5rem",
  boxShadow: 24,
  px: 2,
  py: 2,
};

const CustomModal = ({ open, onClose, children, ...rest }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        bgcolor: "rgba(0, 0, 0, 0.4)",
      }}
      {...rest}
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

export default CustomModal;
