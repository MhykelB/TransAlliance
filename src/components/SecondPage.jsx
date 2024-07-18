import React from "react";
import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Flex from "../customMuiComponents/Flex";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

export const SecondPage = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(to top left, rgba(91,251,148,1) 0%, rgba(245,245,245,1) 40%)",
        pt: 18,
        zIndex: 1,
        position: "relative",
      }}
    >
      <SecondPagePartnersIcon />
      <Box
        sx={{
          px: 12,
        }}
      >
        <SecondPageText />
        <PictureLine1 />
        <PictureLine2 />
      </Box>
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
        columnGap: 42,
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
            mr: 4,
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
          <KeyboardArrowRightRoundedIcon
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
          bottom={-40}
          left={40}
          textsx={{
            px: 2,
            py: 1.5,
            fontSize: 14,
          }}
          textWidth={"fit-content"}
          width={"300px"}
          name={"SEPA1"}
          text={"SEPA Instant SEPA & SWIFT"}
        />
      </Stack>
      <PersonCardImage
        bottom={-40}
        left={-50}
        sx={{
          ml: "auto",
          mr: 6,
          textAlign: "start",
          width: "350px",
          background:
            "linear-gradient(to right, rgba(90,175,135,1) 16%, rgba(211,189,0,1) 100%)",
          borderRadius: 5,
          mt: 8,
        }}
        cardsx={{ transform: "translateX(-50px)" }}
        textWidth={"350px"}
        width={"500px"}
        name={"SEPA2"}
        text={"Customer portal for live transaction monitoring"}
      />
    </Flex>
  );
};
const PictureLine2 = () => {
  return (
    <Stack gap={8}>
      <Flex
        mt={7}
        ml={38}
        sx={{
          columnGap: 7,
        }}
      >
        <Stack gap={0}>
          <PersonCardImage
            sx={{
              width: "300px",
              height: "300px",
              background:
                "linear-gradient(to left, rgba(242, 116, 5, 1), rgba(242, 218, 5, 1))",
              borderRadius: 5,
            }}
            cardsx={{
              transform: "translateY(-40px)",
            }}
            top={60}
            left={-100}
            textsx={{
              px: 2,
              py: 2,
              // fontSize: 16,
            }}
            textWidth={"fit-content"}
            width={"300px"}
            name={"SEPA3"}
            text={"Danish FSA regulated"}
          />
        </Stack>
        <PersonCardImage
          bottom={-30}
          left={50}
          sx={{
            textAlign: "start",
            width: "300px",
            height: "300px",
            background: "white",
            borderRadius: 5,
          }}
          cardsx={{ transform: "translateX(39px)", marginTop: 60 }}
          width={"230px"}
          name={"SEPA4"}
          text={"90+ currencies served"}
          textsx={{
            px: 2,
            py: 1.5,
            borderRadius: 3,
            // background: "pink",
            fontWeight: 400,
          }}
        />
      </Flex>
      <Flex sx={{ ...button2Props }}>
        <Typography alignSelf={"flex-end"} fontWeight={"bold"} fontSize={20}>
          Learn More
        </Typography>
        <KeyboardArrowRightRoundedIcon
          sx={{
            p: 0.3,
            background: "rgba(91, 251, 148, 1)",
            borderRadius: 4,
            "&:hover": {
              opacity: 0.8,
              cursor: "pointer",
              background: "rgba(242, 218, 5, 1)",
            },
          }}
        />
      </Flex>
    </Stack>
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
  cardsx,
  sx,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        ...sx,
      }}
    >
      {name === "SEPA3" && (
        <CardMedia
          style={{
            position: "absolute",
            bottom: -100,
            left: -50,
            width: "300px",
            overflow: "hidden",
            height: "auto",
            borderRadius: 15,
            ...cardsx,
          }}
          component="img"
          image={`/images/vector.png`}
          alt={`${name}`}
        />
      )}
      {(name === "SEPA3" || name === "SEPA4") && (
        <ArrowForwardIcon
          fontSize="medium"
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            ml: "",
            transform: "rotate(-45deg)",
          }}
        />
      )}

      <CardMedia
        style={{
          width: width,
          height: "auto",
          borderRadius: 15,
          ...cardsx,
        }}
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
          outline: "1.2px solid rgba(255, 255, 255, .6)",
          background: "rgba(255, 255, 255, .6)",
          backdropFilter: "blur(10px)",
          py: 0.6,
          borderRadius: 3,
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
        mt: 10,
        alignItems: "flex-end",
      }}
    >
      <Stack
        sx={{
          width: "25rem",
          pl: "10rem",

          alignItems: "flex-end",
          pt: 8,
          pb: 3,
          background: "#5FB083",
        }}
      >
        <Stack>
          <Typography
            fontSize={30}
            sx={{
              lineHeight: 1.2,
            }}
          >
            {" "}
            The human-powered payments network{" "}
          </Typography>
          <Typography fontSize={15} mt={2} maxWidth={320} fontWeight={600}>
            Driven by a team of over 200 global payments experts with absolute
            dedication to solving our customers’ most complex cross-border
            payments challenges.
          </Typography>
          <Flex sx={{ ...buttonProps, py: 1, borderRadius: 3 }}>
            <Typography alignSelf={"flex-end"} fontWeight={500} fontSize={20}>
              Learn More
            </Typography>
            <KeyboardArrowRightRoundedIcon
              sx={{
                p: 0.1,
                background: "black",
                color: "#31E876",
                borderRadius: 8,
                "&:hover": {
                  opacity: 0.6,
                  cursor: "pointer",
                },
              }}
            />
          </Flex>
        </Stack>
      </Stack>

      <Stack
        sx={{
          width: "60%",
          py: 3,
          pb: 0,
          pl: 5,
          borderTopLeftRadius: "4rem",
          background:
            "linear-gradient(to bottom right, rgba(93,103,84,1) 1%,rgba(93,103,84,1) 1%,rgba(20,35,60,1) 40%,  rgba(20,35,60,1) 58%, rgba(20,35,60,1) 95%);",
        }}
      >
        <CardMedia
          style={{
            maxWidth: "8%",
            // height: "auto",
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
            marginBottom: 30,
            transform: "translateY(-30px)",
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
const button2Props = {
  alignSelf: "flex-end",
  width: "fit-content",
  columnGap: 4,
  background: "linear-gradient(to left, rgba(36, 52, 62, .85), #5AAF87)",
  borderRadius: 4,
  py: 2,
  px: 2.5,
  mt: 4,
  mr: 8,
};
