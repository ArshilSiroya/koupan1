import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/Logo.png";
import downArrow from "../assets/downArrow.svg";
import menu from "../assets/MenuIcon.svg";
import { NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log("🚀 ~ Navbar ~ currentPath:", currentPath);
  return (
    <Box
      sx={{
        height: "100px",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginInline: { xs: "20px", md: "110px" },
      }}
    >
      <img src={Logo} width="187px" height="35px" />

      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Typography
          sx={{
            fontWeight: currentPath == "/" ? "700" : "500",
            fontSize: "16px",
          }}
        >
          <NavLink to="/" style={{ textDecoration: "none", color: "#292D32" }}>
            Home
          </NavLink>
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: currentPath == "/partner" ? "700" : "500",
            marginInline: "40px",
          }}
        >
          <NavLink
            to="/partner"
            style={{ textDecoration: "none", color: "#292D32" }}
          >
            Partner
          </NavLink>
        </Typography>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "16px",
            fontWeight: currentPath == "/about" ? "700" : "500",
          }}
        >
          <NavLink
            to="/about"
            style={{ textDecoration: "none", color: "#292D32" }}
          >
            About
          </NavLink>
        </Typography>
      </Box>

      <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            border: "1px solid #5F5F5F33",
            padding: "8px",
            borderRadius: "63px", // 55px button radius + 8px padding
            mr: "5px",
          }}
        >
          <Button
            sx={{
              borderRadius: "55px",
              backgroundColor: "#50C878",
              width: "50px",
              height: "36px",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "600",
              textTransform: "none",
            }}
          >
            <img src={downArrow} />
          </Button>
        </Box>
        <Box sx={{ display: { md: "none" } }}>
          <img src={menu} alt="" />
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: "none", md: "inline-block" },
          border: "1px solid #5F5F5F33",
          padding: "8px",
          borderRadius: "63px", // 55px button radius + 8px padding
        }}
      >
        <Button
          sx={{
            borderRadius: "55px",
            backgroundColor: "#50C878",
            width: "144px",
            height: "34px",
            color: "#fff",
            fontSize: "14px",
            fontWeight: "600",
            textTransform: "none",
          }}
        >
          Download App
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
