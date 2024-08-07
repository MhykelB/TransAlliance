import React from "react";
import { Box, IconButton, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Flex from "../customMuiComponents/Flex";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { SecondPage } from "./SecondPage";
import { ThirdPage } from "./ThirdPage";
import { FourthPage } from "./FourthPage";
import { FifthPage } from "./FifthPage";
const AppPage = () => {
  return (
    <Box // mai wrapper
      sx={{
        overflow: "hidden",
        ml: "auto",
        mr: "auto",
        width: "1250px",
        background: "#F5F5F5",
      }}
    >
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
    </Box>
  );
};
const FirstPage = () => {
  return (
    <Box //first page wrapper
      sx={{
        outline: "2px solid pink",
        pt: 5,
        background:
          "linear-gradient(to bottom right, rgba(93,103,84,1) 3%, rgba(20,35,60,1) 25%, rgba(20,35,60,1) 58%, rgba(32,103,76,1) 95%);",
      }}
    >
      <Flex // navbar
        marginLeft={20}
        marginRight={10}
      >
        <CardMedia
          style={{ maxWidth: "6%", height: "auto" }}
          component="img"
          image="/images/hug.png"
          alt="Hug"
        />
        <Flex
          sx={{
            columnGap: 4,
            ml: "auto",
            zIndex: 1,
          }}
        >
          <NavBarItem text={"Home"} />
          <NavBarItem text={"About"} />
          <NavBarItem text={"Solutions"} />
          <NavBarItem text={"News & Insights"} />
          <NavBarItem text={"Contact Us"} />
          <Button
            onClick={() => {
              window.open(
                "https://www.linkedin.com/company/transalliancegroup/?originalSubdomain=ng",
                "_blank",
                "noopener,noreferrer"
              );
            }}
            sx={{
              fontWeight: 600,
              borderRadius: 3,
              fontSize: 14,
              textTransform: "none",
              py: 1.2,
              px: 3.5,

              background: "rgba(91,251,148,.8)",
              color: "black",
              "&:hover": {
                opacity: 0.8,
                cursor: "pointer",
                background: "rgba(242, 218, 5, 1)",
              },
            }}
            endIcon={
              <ArrowForwardIcon
                sx={{
                  transform: "rotate(-45deg)",
                }}
              />
            }
          >
            Get Started
          </Button>{" "}
        </Flex>
      </Flex>
      <FirstPageWelcomeTextComponent />
      <FirstPageFooter />
    </Box>
  );
};
const NavBarItem = ({ text }) => {
  return (
    <Typography
      color={"rgba(225,225,225, 0.8)"}
      fontSize={14}
      sx={{
        "&:hover": {
          borderBottom: "3px solid rgba(90, 175, 135, 1)",
          color: "white",
          cursor: "pointer",
        },
      }}
    >
      {text}
    </Typography>
  );
};
const FirstPageWelcomeTextComponent = () => {
  return (
    <Flex
      sx={{
        alignItems: "flex-start",
        mt: 12,
        columnGap: 8,
        ml: 20,
        mr: "aut0",
      }}
    >
      <Stack
        gap={2}
        sx={{
          width: "600px",
        }}
      >
        <Typography
          fontSize={"14.65px"}
          sx={{
            backgroundImage:
              "linear-gradient(to right, rgba(242, 116, 5, 1), rgba(211, 189, 0, 1))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Simplified cross-border payment
        </Typography>
        <Typography
          color={"rgba(255, 255, 255, 1)"}
          fontFamily={"Gayathri"}
          fontSize={"70px"}
          sx={{
            width: "580px",
            lineHeight: 0.9,
          }}
        >
          We are the payments people
        </Typography>
        <Typography
          color={"rgba(220, 220, 220, 0.8)"}
          fontSize={"15px"}
          sx={{
            mt: -1,
            width: "440px",
          }}
        >
          Transalliance Group.’s cross-border payments solutions connect
          organisations and communities globally to the network they need to
          thrive. Together, we make money move
        </Typography>
      </Stack>
      <Box
        sx={{
          mt: 0,
          position: "relative",
          pt: 10,
          borderRadius: 11,
          background:
            "linear-gradient(to right, rgba(242, 116, 5, 1), rgba(242, 218, 5, 1))",
        }}
      >
        <Typography
          sx={{
            fontSize: 15,
            fontWeight: 600,
            // letterSpacing: 0.9,
            borderRadius: 3,
            position: "absolute",
            outline: "1.5px solid rgba(255, 255, 255, 1)",
            background: "rgba(255, 255, 255, 0.7)",
            py: 2,
            px: 1,
            top: 35,
            left: -65,
            zIndex: 2,
          }}
        >
          24/7, 365 transaction tracking
        </Typography>
        <CardMedia
          style={{
            width: "300px",
            height: "auto",
            position: "relative",
            zIndex: 1,
          }}
          component="img"
          image="/images/laptop.png"
          alt="Hug"
        />
        <CardMedia
          style={{
            width: "500px",
            height: "auto",
            position: "absolute",
            top: -180,
            left: -18,
            zIndex: 0,
          }}
          component="img"
          image="/images/vector.png"
          alt="vector"
        />
      </Box>
    </Flex>
  );
};
const FirstPageFooter = () => {
  return (
    <Flex
      marginTop={6}
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: 150,
          height: 8,
          background: "#32B477",
          px: 10,
          transform: "rotate(-40deg)",
          right: 300,
          top: -42,
          zIndex: 0,
        }}
      ></Box>

      <Flex
        sx={{
          outline: "1.2px solid rgba(255, 255, 255, .6)",
          background: "rgba(138, 138, 138, 0.3)",
          backdropFilter: "blur(10px)",
          py: 3,
          px: 6,
          pr: 8,
          borderRadius: 3,
          columnGap: 14,
          position: "absolute",
          top: -35,
          left: "12%",
          zIndex: 2,

          // transform: translate("-50%", "-50%"),
        }}
      >
        <Typography color={"white"}> Discover More </Typography>
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
      <CardMedia
        style={{
          width: "60%",
          height: "auto",
          ml: 10,
          borderTopRightRadius: 60,
          background: "rgba(90, 176, 136, 1)",
          zIndex: 1,
        }}
        component="img"
        image="/images/paper-plane.png"
        alt="Hug"
      />
      <CardMedia
        style={{
          width: "400px",
          height: "auto",
          position: "absolute",
          top: -100,
          left: "-10%",
        }}
        component="img"
        image="/images/vector.png"
        alt="Hug"
      />
    </Flex>
  );
};

export default AppPage;
