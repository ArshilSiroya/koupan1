import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import LeftEllipse from "../assets/LeftEllipseAbout.png";
import rightEllipse from "../assets/RightEllipseAbout.png";
import voucherMob from "../assets/voucherMob.svg";
import AbooutEllipseMob from "../assets/AbooutEllipseMob.png";
import bestdealMob from "../assets/bestdealMob.svg";
import KoupanaLogoMob from "../assets/KoupanaLogoMob.svg";
import partners from "../assets/partners.svg";
import voucher from "../assets/voucher.svg";
import bestdeal from "../assets/bestdeal.svg";
import koupanaLogo from "../assets/koupanaLogo.svg";
import zIndex from "@mui/material/styles/zIndex";

const AboutUs = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ mt: "120px" }}>
          <Box
            sx={{
              display: "flex",
              position: "relative",
              zIndex: "999",
              flexDirection: { xs: "column", md: "unset" },
              // textAlign: "center",
              alignItems: "center",
              // justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: { xs: "335px", md: "617px" },
                textAlign: { xs: "center", md: "start" },
                order: { xs: "1", md: "unset" },
              }}
            >
              <Typography sx={{ fontSize: "40px", fontWeight: "700" }}>
                About Us
              </Typography>
              <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
                Welcome to Koupana, your go-to app for exclusive discounts and
                incredible deals. Our mission is to connect savvy shoppers with
                their favorite brands, offering unbeatable discounts of 20%,
                30%, 50%, and even some for free. We aim to make shopping more
                affordable and enjoyable for everyone by providing top-quality
                products at the most competitive prices.
              </Typography>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "500", mt: "16px" }}
              >
                Our user-friendly app allows you to browse, save, and redeem
                discounts effortlessly. We partner with a wide range of brands
                to bring you diverse offers, from fashion and electronics to
                beauty products and dining deals. Join our community of smart
                shoppers and start saving today with Koupana.
              </Typography>

              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  border: "1px solid #5F5F5F33",
                  padding: "8px",
                  mt: "0px",
                  borderRadius: "63px", // 55px button radius + 8px padding
                }}
              >
                <Button
                  sx={{
                    borderRadius: "55px",
                    backgroundColor: "#50C878",
                    width: "334px",
                    height: "74px",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "600",
                    textTransform: "none",
                  }}
                >
                  Discover More About Our Mission and Values!
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                width: { xs: "335px", md: "600px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                ml: "20px",
              }}
            >
              <Box sx={{ display: { xs: "none", md: "unset" } }}>
                <img src={voucher} alt="" />
                <img src={bestdeal} alt="" style={{ marginLeft: "10px" }} />
              </Box>
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                <img src={voucherMob} alt="" />
                <img src={bestdealMob} alt="" style={{ marginLeft: "10px" }} />
              </Box>
              <Box sx={{ display: { xs: "none", md: "unset" } }}>
                <img src={koupanaLogo} alt="" />
              </Box>
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                <img src={KoupanaLogoMob} alt="" />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",
            zIndex: "-2222",
            right: "0",
            display: { xs: "none", md: "flex" },
          }}
        >
          <img src={rightEllipse} alt="" />
        </Box>
      </Box>

      <Box sx={{ marginTop: "-32rem", display: { xs: "none", md: "flex" } }}>
        <img src={LeftEllipse} />
      </Box>

      <Box
        sx={{
          marginTop: "-32rem",
          display: { xs: "flex", md: "none" },
        }}
      >
        <img
          src={AbooutEllipseMob}
          style={{
            marginTop: "-40rem",
            width: "100%",
          }}
        />
      </Box>
    </Box>
  );
};

export default AboutUs;
