import React from "react";
import { Box, IconButton, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Flex from "../customMuiComponents/Flex";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import Grid from "@mui/material/Grid";
export const FourthPage = () => {
  return (
    <Stack pt={12}>
      <Stack gap={2} px={8}>
        <Typography fontSize={38}>Sectors we serve</Typography>;
        <Typography color={"#757575"} fontSize={20} maxWidth={"50rem"} mb={7}>
          We simplify the complexities of cross-border payments in some of the
          world’s most demanding sectors. Learn more about who we serve and how
          we add value below.
        </Typography>
        <Box ml={3.5}>
          <Grid container columnSpacing={22} rowSpacing={8}>
            {SectorTexts.map((sector) => {
              return (
                <Grid item xs={6} key={sector.name}>
                  <SectorImage
                    name={sector.name}
                    text={sector.text}
                    top={sector.top}
                    left={sector.left}
                    bottom={sector.bottom}
                    right={sector.right}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Stack>
      <Footer />
    </Stack>
  );
};

const SectorImage = ({ name, text, top, left, bottom, right }) => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <CardMedia
        style={{ width: "26rem", height: "auto" }}
        component="img"
        image={`/images/${name}.png`}
        alt={`${name}`}
      />

      <Stack
        sx={{
          width: "180px",
          outline: "1.5px solid white",
          background: "rgba(255, 255, 255, 0.7)",
          py: 0.6,
          px: 2,
          borderRadius: 3,
          columnGap: 10,
          position: "absolute",
          top: top,
          left: left,
          bottom: bottom,
          right: right,
          // transform: translate("-50%", "-50%"),
        }}
      >
        <Typography fontWeight={600} fontSize={22}>
          {" "}
          {text}{" "}
        </Typography>
        <Flex>
          <Typography>Learn More</Typography>
          <IconButton
            sx={{
              margin: 0,
              padding: 0,
              color: "#31E876",
              p: 0.3,
              background: "#122038",
              borderRadius: 4,
              "&:hover": {
                opacity: 0.7,
                background: "#122038",
              },
            }}
          >
            {" "}
            <KeyboardArrowRightRoundedIcon />{" "}
          </IconButton>
        </Flex>
      </Stack>
    </Box>
  );
};

const SectorTexts = [
  {
    name: "image44",
    text: "Financial Service",
    bottom: 40,
    right: -55,
  },
  {
    name: "image45",
    text: "iGaming",
    top: 10,
    left: -110,
  },
  {
    name: "image46",
    text: "NGOs",
    top: 40,
    right: -88,
  },
  {
    name: "image47",
    text: "Corporates",

    bottom: -20,
    left: -55,
  },
];

const Footer = () => {
  return (
    <Stack
      gap={4}
      py={8}
      pb={10}
      mt={20}
      alignItems={"center"}
      sx={{
        color: "white",
        background:
          "linear-gradient(to bottom right, rgba(32,103,76,1) 3%, rgba(20,35,60,1) 35%,rgba(20,35,60,1) 55%, rgba(93,103,84,1) 95%)",
        borderBottomRightRadius: "2rem",
        outline: "1px solid green",
      }}
    >
      <Typography fontSize={40}> 2023 Annual Report</Typography>
      <Typography
        color={"rgba(245, 245, 245, 1)"}
        textAlign={"center"}
        fontSize={25}
        maxWidth={"42rem"}
      >
        Click below to read more about Inpay’s impressive year-on-year growth
        and to download the full report.
      </Typography>
    </Stack>
  );
};
