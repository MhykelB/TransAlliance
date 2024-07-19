import React from "react";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Flex from "../customMuiComponents/Flex";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export const ThirdPage = () => {
  return (
    <Stack
      sx={{
        pt: 10,
        background:
          "linear-gradient(to top right, rgba(255, 195, 43, .2) 0%, rgba(245,245,245,1) 40%)",
      }}
    >
      <Flex
        sx={{
          mx: 10,
          columnGap: 20,
          alignItems: "flex-start",
        }}
      >
        <IconAndText />
        <NoteAndImage />
      </Flex>
      <Footer />
    </Stack>
  );
};
const GreenIcon = ({ name, title, text, sx }) => {
  return (
    <Stack gap={1}>
      <CardMedia
        sx={{
          p: 1,
          borderRadius: 2,
          background: "#5AAF87",
        }}
        style={{ width: "40px", height: "auto" }}
        component="img"
        image={`/images/${name}.png`}
        alt="name"
      />
      <Typography fontSize={20}> {title}</Typography>
      <Typography
        color={"#757575"}
        fontSize={14}
        sx={{
          mt: -1,
          width: "20.2rem",
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
};
const IconAndText = () => {
  return (
    <Stack gap={5} marginTop={6}>
      <Typography color={"#858585"} letterSpacing={2} fontWeight={700}>
        OUR SERVICE
      </Typography>
      <GreenIcon
        name={"image40"}
        title={"We are your trusted partners"}
        text={
          "We are a dedicated and diligent team of payments specialists that’s committed to helping you unlock opportunity, create value and make payments happen, together."
        }
      />
      <GreenIcon
        name={"image39"}
        title={"We provide the network you need"}
        text={
          "We open access to a resilient global network spanning 90+ countries that’s built to simplify complex challenges and move money at speed."
        }
      />
      <GreenIcon
        name={"image41"}
        title={"We bring certainty through compliance"}
        text={
          "We were born with compliance at our heart. Licensed by the globally trusted Danish FSA, when we move money you can be confident that it gets to the right place with absolute accuracy."
        }
      />
      <GreenIcon
        name={"image42"}
        title={"We execute with expertise"}
        text={
          "We complete an industry-leading 99% of payments for customers in the fast-changing financial services, iGaming, corporate and NGO sectors, drawing on 16 years of proven expertise.."
        }
      />
    </Stack>
  );
};
const NoteAndImage = () => {
  return (
    <Stack>
      <Typography
        fontSize={44}
        fontWeight={700}
        fontFamily={"Gayathri"}
        sx={{
          lineHeight: 1.2,
        }}
      >
        The Transalliance Group. difference
      </Typography>
      <Typography color={"#757575"} fontSize={22} width={"36rem"}>
        Our global payments network is powered by passionate people, transparent
        customer relationships, and leading-edge technology
      </Typography>
      <ImageGroup />
    </Stack>
  );
};
const ImageGroup = ({ sx }) => {
  return (
    <Flex
      sx={{
        columnGap: 0,
        mt: 19,
        alignItems: "flex-start",
        position: "relative",
      }}
    >
      <CardMedia
        sx={{
          ...sx,
        }}
        style={{ width: "250px", height: "auto" }}
        component="img"
        image={`/images/imagebb.png`}
        alt="name"
      />
      <Stack>
        <CardMedia
          style={{ width: "300px", height: "auto" }}
          component="img"
          image={`/images/imageaa.png`}
          alt="name"
        />
        <Flex
          marginTop={3}
          marginLeft={5}
          sx={{
            columnGap: 0,
          }}
        >
          <Typography
            fontSize={25}
            width={220}
            sx={{
              lineHeight: 1.2,
              letterSpacing: 1,
            }}
          >
            Meet our best financial experts{" "}
          </Typography>
          <ArrowForwardIcon
            fontSize="medium"
            sx={{
              ml: -1,

              alignSelf: "flex-end",
              display: "inline",
              transform: "rotate(-45deg)",
            }}
          />{" "}
        </Flex>
        <Stack
          sx={{
            borderRadius: 5,
            position: "absolute",
            outline: "1.5px solid rgba(255, 255, 255, 1)",
            background: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(10px)",
            py: 2,
            px: 3.5,
            top: 45,
            left: -70,
            zIndex: 1,
          }}
        >
          <Typography
            fontWeight={500}
            letterSpacing={1}
            fontSize={13}
            color={"rgba(18, 32, 56, .4)"}
          >
            OUR TEAM
          </Typography>
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: 0.9,
            }}
          >
            Over 200 Experts
          </Typography>
        </Stack>
      </Stack>
    </Flex>
  );
};
const Footer = () => {
  return (
    <Flex
      sx={{
        columnGap: 0,
        mt: 15,
        alignItems: "flex-end",
      }}
    >
      <Stack
        sx={{
          py: 3,
          pb: 0,
          pl: 5,
          flex: 1.4,
          borderTopRightRadius: "3rem",
          background:
            "linear-gradient(to bottom right, rgba(93,103,84,1) 3%, rgba(20,35,60,1) 25%, rgba(20,35,60,1) 58%, rgba(20,35,60,1) 95%);",
          outline: "1px solid black",
        }}
      >
        <CardMedia
          style={{ maxWidth: "6%", height: "auto" }}
          component="img"
          image="/images/hug.png"
          alt="Hug"
        />
        <CardMedia
          style={{
            width: "600px",
            height: "auto",
            marginLeft: 60,
            marginRight: 30,
            marginTop: 15,
          }}
          component="img"
          image={"/images/tab.png"}
          alt="tab"
        />
      </Stack>
      <Stack
        sx={{
          flex: 0.8,
          pt: 6,
          px: 4,
          pb: 3,
          background: "#5FB083",
        }}
      >
        {" "}
        <Typography
          fontWeight={700}
          fontFamily={"Gayathri"}
          fontSize={38}
          width={270}
        >
          One portal,
        </Typography>
        <Typography
          fontFamily={"Gayathri"}
          fontWeight={700}
          pt={0}
          mt={-2}
          fontSize={38}
          width={500}
        >
          every transaction
        </Typography>
        <Typography fontWeight={500} fontSize={17} mt={0} maxWidth={355}>
          Our customer portal provides an intuitive interface to access all of
          our services via a simple, single login.
        </Typography>
        <BulletTexts />
      </Stack>
    </Flex>
  );
};
const TextArray = [
  "Real-time, 24/7, 365 transaction tracking",
  "Customizable & downloadable reports",
  "Rich data analysis",
  "Multiple integration methods, built to suit your needs",
];
const BulletTexts = ({ array }) => {
  return TextArray.map((item) => {
    return (
      <Flex sx={{ columnGap: 0, ml: 1 }} key={item}>
        <FiberManualRecordIcon
          sx={{
            fontSize: "8px",
            alignSelf: "flex-start",
            mt: 1,
          }}
        />
        <Typography
          fontWeight={500}
          maxWidth={350}
          ml={1}
          fontSize={17}
          sx={{
            listStyle: "disc",
          }}
        >
          {" "}
          {item}{" "}
        </Typography>
      </Flex>
    );
  });
};
