import React from "react";
import { Checkbox, Divider, Stack, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Flex from "../customMuiComponents/Flex";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const FifthPage = () => {
  return (
    <Stack>
      <LadyAndForm />
      <Footer />
    </Stack>
  );
};

const LadyAndForm = () => {
  return (
    <Flex
      mt={2}
      ml={8}
      pt={0}
      pb={4}
      sx={{
        alignItems: "flex-start",
        columnGap: 8,
      }}
    >
      <CardMedia
        style={{ width: "510px", height: "auto", marginTop: 40 }}
        component="img"
        image="/images/image48.png"
        alt="Hug"
      />
      <Stack
        gap={1}
        pt={4}
        px={3}
        pl={3}
        pb={3}
        borderRadius={4}
        sx={{
          background: "rgba(255, 255, 255, 0.7)",
        }}
      >
        <Typography fontSize={24} fontWeight={"bold"}>
          Speak to Sales
        </Typography>
        <Stack pl={7}>
          <Stack gap={1} sx={{ pr: 7 }}>
            {formValues.map((value) => {
              return <FormEntry key={value} label={value} />;
            })}
          </Stack>
          <Flex
            sx={{
              mt: 2,
              alignItems: "flex-start",
            }}
          >
            <Checkbox defaultChecked={false} sx={{ m: 0, p: 0 }} />
            <Typography fontSize={12} width={440}>
              I agree to receiving payment news and trends from Inpay, including
              updates to our products and services. I am aware that I can
              withdraw this consent at any time by contacting Inpay or
              unsubscribing via email. I agree to Inpay processing my personal
              data in accordance with its Privacy Policy
            </Typography>
          </Flex>
          <Flex
            sx={{
              width: "fit-content",

              columnGap: 4,
              background:
                "linear-gradient(to left, rgba(36, 52, 62, .85), #5AAF87)",
              borderRadius: 3,
              py: 1.5,
              px: 3.5,
              mt: 4,
            }}
          >
            <Typography
              alignSelf={"flex-end"}
              fontWeight={"bold"}
              fontSize={20}
            >
              Submit
            </Typography>
            <KeyboardArrowRightIcon
              sx={{
                p: 0.3,
                background: "rgba(91, 251, 148, 1)",
                borderRadius: 4,
              }}
            />
          </Flex>
        </Stack>
      </Stack>
    </Flex>
  );
};
const formValues = ["Email", "First Name", "Last Name", "Message"];
const FormEntry = ({ label, sx }) => {
  return (
    <Stack gap={1}>
      <Typography fontSize={18}>{label} </Typography>
      <TextField
        size="small"
        sx={
          {
            // height: label === "Message" && 48,
          }
        }
        InputProps={{
          style: {
            borderRadius: 8,
            height: label === "Message" ? "100px" : "40px",
          },
        }}
      />
    </Stack>
  );
};

const Footer = () => {
  return (
    <Stack
      gap={1}
      sx={{
        pb: 10,
        background: "rgba(255, 255, 255, 1)",
        pt: 8,
        px: 14,
      }}
    >
      <FooterTextsWrapper />
      <Divider orientation="horizontal" flexItem />
      <FooterIcon />
    </Stack>
  );
};
const FooterTextsWrapper = () => {
  return (
    <Flex
      sx={{
        alignItems: "flex-start",
        justifyContent: "space-around",
        // outline: "1px solid black",
        columnGap: 10,
      }}
    >
      <Stack gap={4} mt={1}>
        <Flex>
          <CardMedia
            style={{ width: "50px", height: "auto" }}
            component="img"
            image="/images/hug-dark.png"
            alt="Hug-dark"
          />
          <Typography alignSelf={"flex-end"}>Transalliance Group.</Typography>
        </Flex>
        <Flex
          sx={{
            width: "fit-content",
            background:
              "linear-gradient(to left, rgba(36, 52, 62, .85), #5AAF87)",

            columnGap: 4,
            borderRadius: 3,
            py: 0.8,
            px: 2,
            mt: 2,
          }}
        >
          <Typography fontWeight={"bold"} fontSize={15}>
            Contact us
          </Typography>
          <KeyboardArrowRightIcon
            sx={{
              p: 0.1,
              background: "rgba(91, 251, 148, 1)",
              borderRadius: 4,
            }}
          />
        </Flex>
      </Stack>
      {footerTextValues.map((value) => {
        return (
          <FooterText
            key={value.title}
            title={value.title}
            textsArray={value.textsArray}
            sx={value.sx}
          />
        );
      })}
    </Flex>
  );
};
const FooterText = ({ title, textsArray, sx }) => {
  return (
    <Stack gap={2}>
      <Typography fontWeight={"bold"} fontSize={18}>
        {title}{" "}
      </Typography>
      {textsArray.map((text) => {
        return (
          <Typography key={text} lineHeight={1.3} maxWidth={150} sx={{ ...sx }}>
            {text}
          </Typography>
        );
      })}
    </Stack>
  );
};

const SocialIcon = ({ name }) => {
  return (
    <CardMedia
      style={{
        width: name === "facebook" ? "10px" : "14px",
        height: "auto",
        outline: "1px solid #122038",
        borderRadius: 50,
        padding: name === "facebook" ? 12 : 15,
        paddingRight: name === "facebook" ? 15 : 12,
        paddingLeft: name === "facebook" ? 15 : 12,
      }}
      component="img"
      image={`/images/${name}.png`}
      alt={`${name}`}
    />
  );
};
const FooterIcon = () => {
  const socials = ["facebook", "twitter", "instagram"];
  return (
    <Stack
      gap={2}
      alignSelf={"flex-end"}
      mt={5}
      mr={5}
      alignContent={"flex-start"}
    >
      <Typography fontSize={18} fontWeight={"bold"}>
        {" "}
        Social Media
      </Typography>
      <Flex sx={{ columnGap: 3 }}>
        {socials.map((value) => {
          return <SocialIcon name={value} key={value} />;
        })}
      </Flex>
    </Stack>
  );
};

const footerTextValues = [
  {
    title: "Offices",
    textsArray: [
      "Denmark Toldbodgade 55B 1253 Coppenhagen United Kingdom:",
      "1 Poultry EC2R 8EJ, London info@inpay.com Phone: + 45 88 610 600",
    ],
    sx: {},
  },
  {
    title: "Solutions",
    textsArray: ["Money Out", "Money In"],
    sx: {},
  },
  {
    title: "Sectors",
    textsArray: ["Financial Services", "iGaming", "Corporates", "NGOs"],
    sx: {},
  },
  {
    title: "Other",
    textsArray: [
      "About us",
      "News & Insights",
      "Compliance",
      "Careers",
      "Contact Us",
    ],
    sx: {},
  },
];
