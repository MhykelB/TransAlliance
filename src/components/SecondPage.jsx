import React from "react";
import { Box, IconButton, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Flex from "../customMuiComponents/Flex";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const SecondPage = () => {
  return (
    <Box
      sx={{
        background: "#F6F4F4",
        pt: 18,
        // px: 12,
        zIndex: 1,
        position: "relative",
        border: "5px solid black",
      }}
    >
      <SecondPagePartnersIcon />
      <SecondPageText />
      <PictureLine1 />
      <Footer />
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
            width: "600px",
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
const PictureLine1 = () => {
  return (
    <Flex mt={-7}>
      <Stack gap={5}>
        <Flex sx={{ ...buttonProps }}>
          <Typography alignSelf={"flex-end"} fontWeight={"bold"} fontSize={20}>
            Money out
          </Typography>
          <KeyboardArrowRightIcon
            sx={{
              p: 0.3,
              background: "black",
              color: "#5AAF87",
              borderRadius: 4,
              "&:hover": {
                opacity: 0.6,
                cursor: "pointer",
              },
            }}
          />
        </Flex>
        <PersonCardImage
          textsx={{
            px: 2,
            py: 1,
          }}
          textWidth={"fit-content"}
          width={"300px"}
          name={"SEPA1"}
          text={"SEPA Instant SEPA & SWIFT"}
        />
      </Stack>
      <PersonCardImage
        sx={{
          ml: "auto",
          width: "400px",
          background: "black",
          mt: 8,
        }}
        textWidth={"350px"}
        width={"500px"}
        name={"SEPA2"}
        text={"Customer portal for live transaction monitoring"}
      />
    </Flex>
  );
};
const PersonCardImage = ({
  name,
  text,
  top,
  left,
  bottom,
  right,
  width,
  textWidth,
  textsx,
  sx,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        ...sx,
      }}
    >
      <CardMedia
        style={{ width: width, height: "auto", borderRadius: 15 }}
        component="img"
        image={`/images/${name}.png`}
        alt={`${name}`}
      />

      <Typography
        fontWeight={600}
        fontSize={16}
        sx={{
          textAlign: "center",
          width: textWidth,
          outline: "1.5px solid white",
          background: "rgba(255, 255, 255, 0.7)",
          py: 0.6,
          borderRadius: 2,
          columnGap: 10,
          position: "absolute",
          top: top,
          left: left,
          bottom: bottom,
          right: right,
          ...textsx,
          // transform: translate("-50%", "-50%"),
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

const Footer = () => {
  return (
    <Flex
      sx={{
        width: "inherit",
        alignSelf: "flex-end",
        columnGap: 0,
        mt: 35,
        alignItems: "flex-end",
      }}
    >
      <Stack
        sx={{
          width: "25rem",
          pl: "8rem",

          alignItems: "flex-end",
          pt: 14,
          pb: 3,
          background: "#5FB083",
        }}
      >
        <Typography
          fontSize={30}
          // width={400}
          sx={{
            lineHeight: 1.2,
          }}
        >
          {" "}
          The human-powered payments network{" "}
        </Typography>
        <Typography fontSize={14} mt={1} maxWidth={320}>
          Driven by a team of over 200 global payments experts with absolute
          dedication to solving our customers’ most complex cross-border
          payments challenges.
        </Typography>
        <Flex sx={{ ...buttonProps, py: 1, borderRadius: 2 }}>
          <Typography alignSelf={"flex-end"} fontWeight={"bold"} fontSize={20}>
            Learn More
          </Typography>
          <KeyboardArrowRightIcon
            sx={{
              p: 0.3,
              background: "black",
              color: "#5AAF87",
              borderRadius: 4,
              "&:hover": {
                opacity: 0.6,
                cursor: "pointer",
              },
            }}
          />
        </Flex>
      </Stack>

      <Stack
        sx={{
          width: "60%",
          py: 3,
          pb: 0,
          pl: 5,
          borderTopLeftRadius: "4rem",
          background:
            "linear-gradient(to bottom right, rgba(93,103,84,1) 3%, rgba(20,35,60,1) 25%, rgba(20,35,60,1) 58%, rgba(20,35,60,1) 95%);",
          outline: "1px solid black",
        }}
      >
        <CardMedia
          style={{
            maxWidth: "8%",
            height: "auto",
            alignSelf: "flex-end",
            marginRight: 25,
          }}
          component="img"
          image="/images/hug.png"
          alt="Hug"
        />
        <CardMedia
          style={{
            width: "450px",
            height: "auto",
            marginLeft: 60,
            marginRight: 30,
            marginTop: 5,
            marginBottom: 50,
          }}
          component="img"
          image={"/images/SEPA5.png"}
          alt="tab"
        />
      </Stack>
    </Flex>
  );
};
const buttonProps = {
  width: "fit-content",
  columnGap: 2,
  background:
    "linear-gradient(to left, rgba(90,175,135,1) 16%, rgba(211,189,0,1) 100%)",
  borderRadius: 4,
  py: 3,
  px: 2,
  pr: 4,
  mt: 4,
};
