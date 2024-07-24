import { Box, Card, Typography } from "@mui/material";
import React from "react";
import instagram from "../assets/instagram.svg";
import twitterLogo from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "206px",
        textAlign: "center",
        // zIndex: "1111",
        // position: "relative",
        // opacity: "1",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <img src={Logo} />
      </Box>
      <Box
        sx={{
          textAlign: "center",
          mt: "30px",
          display: { xs: "none", md: "flex" },
        }}
      >
        <img src={instagram} alt="" />
        <img src={twitterLogo} alt="" style={{ marginInline: "8px" }} />
        <img src={linkedin} alt="" />
        <img src={facebook} alt="" style={{ marginInline: "8px" }} />
        <img src={youtube} alt="" />
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Box sx={{ display: "flex", mt: "16px" }}>
          <Typography sx={{ fontSize: "16px", fontWeight: "700" }}>
            Home
          </Typography>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "500", marginInline: "20px" }}
          >
            Partner
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
            About us
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          width: "350px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex", mt: "16px", alignItems: "center" }}>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "500", color: "#686868" }}
          >
            Terms And Conditions
          </Typography>

          <Typography
            sx={{ fontSize: "16px", fontWeight: "500", marginInline: "20px" }}
          >
            &#8226; Privacy Policy
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default Footer;
