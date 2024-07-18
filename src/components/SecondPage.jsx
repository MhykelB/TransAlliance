import React from "react";
import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Flex from "../customMuiComponents/Flex";

export const SecondPage = () => {
  return (
    <Box
      sx={{
        background: "#F6F4F4",
        pt: 18,
        pb: 50,
        px: 12,
        zIndex: 1,
        position: "relative",
      }}
    >
      <SecondPagePartnersIcon />
      <SecondPageText />
    </Box>
  );
};
const IconCard = ({ name, sx }) => {
  return (
    <CardMedia
      sx={{
        ml: -5,
        ...sx,
      }}
      style={{ width: "200px", height: "auto" }}
      component="img"
      image={`/images/${name}.png`}
      alt="name"
    />
  );
};
const SecondPagePartnersIcon = () => {
  return (
    <Stack
      gap={2}
      sx={{
        position: "absolute",
        background: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(10px)",
        top: -150,
        left: 76,
        px: 4,
        py: 4,
        pb: 5,
        borderRadius: 4,
        zIndex: 2,
      }}
    >
      <Typography
        sx={{
          width: "16rem",
          fontWeight: 600,
        }}
      >
        Send and Receive Money from all over with ease.{" "}
      </Typography>
      <Flex
        sx={{
          columnGap: 0,
        }}
      >
        <IconCard name={"danish"} />
        <IconCard name={"888"} />
        <IconCard name={"CIMB"} sx={{ ml: -5 }} />
        <IconCard name={"nuvei"} />
        <IconCard name={"moneygram"} sx={{ ml: 0 }} />
        <IconCard name={"rakbank"} sx={{ ml: 0 }} />
      </Flex>
    </Stack>
  );
};
const SecondPageText = () => {
  return (
    <Flex
      sx={{
        mt: 5,
        columnGap: 45,
        alignItems: "flex-start",
        // justifyContent: "space-between",
        ml: "auto",
        mr: "auto",
      }}
    >
      <Typography fontSize={14} color={"rgba(117, 117, 117, 1)"}>
        ABOUT US
      </Typography>
      <Stack gap={2}>
        <Typography
          sx={{
            width: "450px",
            lineHeight: 1.2,
          }}
          fontSize={35}
        >
          Payment pathways, built for you
        </Typography>
        <Typography
          color={"rgba(117, 117, 117, 1)"}
          fontSize={21}
          sx={{
            width: "580px",
            mr: 3,
          }}
        >
          Transalliance Group. Money Out and Money In solutions give our
          customers the ability to complete cross-border, multi-currency
          transactions securely and at speed. And with a single provider for
          both payouts and pay-ins, say goodbye to the operational headaches of
          multi-supplier management
        </Typography>
      </Stack>
    </Flex>
  );
};
