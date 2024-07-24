import { Box, Button, Card, TextField, Typography } from "@mui/material";
import React from "react";
import rightEllipse from "../assets/RightEllipsePartner.png";
// import partners from "../assets/partners.png";
import partners from "../assets/partners.svg";
import partnersMob from "../assets/partnersMob.svg";
import LeftEllipse from "../assets/LeftEllipse.png";
import RightEllipse from "../assets/RightEllipse 25.png";
import Exclusive from "../assets/Exclusive.svg";
import moblePhones from "../assets/mobilePhones.svg";
import Brand from "../assets/Brand.svg";
import sales from "../assets/sales.svg";
import analytics from "../assets/analytics.svg";
import integration from "../assets/integration.svg";
import Appstore from "../assets/Appstore.svg";
import partnerMobiles from "../assets/partnerMobiles.svg";
import playstore from "../assets/playstore.svg";
import mobilesHomeMob from "../assets/mobilesHomeMob.png";
import rightEllipseMob from "../assets/rightEllipseMob.png";
// import Appstore from "../assets/Appstore.svg";

const Partner = () => {
  return (
    <Box
      sx={{
        background: "#EFF5F1",
      }}
    >
      <Box sx={{ textAlign: "end", display: "flex", justifyContent: "end" }}>
        <Box
          sx={{ position: "absolute", display: { xs: "none", md: "unset" } }}
        >
          <img src={rightEllipse} alt="" />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          zIndex: "3333",
        }}
      >
        <Box
          sx={{
            width: { xs: "334px", md: "1220px" },
            mt: { md: "120px" },
            height: { xs: "812px", md: "449px" },
            flexDirection: { xs: "column", md: "unset" },
            background: "#50C878",
            borderRadius: "30px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: { md: "576px" }, ml: { md: "30px" } }}>
            <Typography
              sx={{
                fontSize: { xs: "34px", md: "40px" },
                fontWeight: "700",
                color: "#fff",
                textAlign: { xs: "center", md: "start" },
                width: { xs: "290px", md: "unset" },
              }}
            >
              Become a Koupana Partner
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "500",
                color: "#fff",
                textAlign: { xs: "center", md: "start" },
                width: { xs: "290px", md: "unset" },
              }}
            >
              Join quickly using your email address to access our exclusive
              discounts and premium deals. Get started in minutes and begin
              saving!
            </Typography>
            <Box sx={{ display: { xs: "none", md: "unset" } }}>
              <img src={partners} alt="" />
            </Box>
            <Box sx={{ display: { md: "none" } }}>
              <img src={partnersMob} alt="" />
            </Box>
          </Box>
          <Box
            sx={{
              width: { md: "506px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <TextField
              variant="outlined"
              sx={{
                mt: "15px",
                width: { xs: "290px", md: "506px" },
                fontWeight: "500",
                color: "#FFFFFF",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  backgroundColor: "#F2F3F466",
                  "& fieldset": {
                    borderColor: "#fff",
                  },
                  "&:hover fieldset": {
                    borderColor: "#fff",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#fff",
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#FFFFFF",
                  opacity: 1,
                },
              }}
              placeholder="Email Address"
            />
            <TextField
              variant="outlined"
              sx={{
                mt: "15px",
                width: { xs: "290px", md: "506px" },

                fontWeight: "500",
                color: "#FFFFFF",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  backgroundColor: "#F2F3F466",
                  "& fieldset": {
                    borderColor: "#fff",
                  },
                  "&:hover fieldset": {
                    borderColor: "#fff",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#fff",
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#FFFFFF",
                  opacity: 1,
                },
              }}
              placeholder="Business Name"
            />
            <TextField
              variant="outlined"
              sx={{
                mt: "15px",
                width: { xs: "290px", md: "506px" },

                fontWeight: "500",
                color: "#FFFFFF",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  backgroundColor: "#F2F3F466",
                  "& fieldset": {
                    borderColor: "#fff",
                  },
                  "&:hover fieldset": {
                    borderColor: "#fff",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#fff",
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#FFFFFF",
                  opacity: 1,
                },
              }}
              placeholder="Phone numer"
            />
            <TextField
              variant="outlined"
              sx={{
                mt: "15px",
                width: { xs: "290px", md: "506px" },

                fontWeight: "500",
                color: "#FFFFFF",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  backgroundColor: "#F2F3F466",
                  "& fieldset": {
                    borderColor: "#fff",
                  },
                  "&:hover fieldset": {
                    borderColor: "#fff",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#fff",
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#FFFFFF",
                  opacity: 1,
                },
              }}
              placeholder="Contact Name"
            />
            <Button
              sx={{
                width: { xs: "290px", md: "506px" },

                height: "52px",
                border: "1px solid #fff",
                borderRadius: "61px",
                background: "#fff",
                mt: "20px",
                fontSize: "16px",
                fontWeight: "600",
                color: "#50C878",
                "&:hover": {
                  background: "#fff",
                },
              }}
            >
              GET STARTED
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "-26rem",
          position: "absolute",
          display: { xs: "none", md: "unset" },
        }}
      >
        <img src={LeftEllipse} />
      </Box>
      {/* -----partners benefits------ */}
      <Box
        sx={{
          marginTop: { xs: "90px", lg: "13rem", xl: "12rem" },
          mb: "55px",
          textAlign: "center",
          fontWeight: "700",
          fontSize: "40px",
        }}
      >
        Partner Benefits
      </Box>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "unset" },
          alignItems: "center",
          gap: { xs: "20px", md: "unset" },
        }}
      >
        <Card
          sx={{
            width: { xs: "300px", md: "255px" },
            height: { xs: "161px", md: "135px" },
            backgroundColor: "#fff",
            zIndex: "1",
            padding: "15px",
            borderRadius: "14px",
            mr: { md: "20px" },
            textAlign: "start",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.07)",
          }}
        >
          <img src={Brand} alt="" />
          <Typography
            sx={{ fontWeight: "700", fontSize: "18px", marginBlock: "7px" }}
          >
            Increased Brand Visibility
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
            Reach a wider audience effortlessly.
          </Typography>
        </Card>
        <Card
          sx={{
            width: { xs: "300px", md: "255px" },
            height: { xs: "161px", md: "135px" },
            backgroundColor: "#fff",
            zIndex: "1",
            padding: "15px",
            borderRadius: "14px",
            mr: { md: "20px" },
            textAlign: "start",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.07)",
          }}
        >
          <img src={sales} alt="" />
          <Typography
            sx={{ fontWeight: "700", fontSize: "18px", marginBlock: "7px" }}
          >
            Drive More Sales
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
            Attract new customers with enticing offers.
          </Typography>
        </Card>
        <Card
          sx={{
            width: { xs: "300px", md: "255px" },
            height: { xs: "161px", md: "135px" },
            backgroundColor: "#fff",
            zIndex: "1",
            padding: "15px",
            borderRadius: "14px",
            mr: { md: "20px" },
            textAlign: "start",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.07)",
          }}
        >
          <img src={analytics} alt="" />
          <Typography
            sx={{ fontWeight: "700", fontSize: "18px", marginBlock: "7px" }}
          >
            Real-Time Analytics
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
            Instantly access performance insights.
          </Typography>
        </Card>
        <Card
          sx={{
            width: { xs: "300px", md: "255px" },
            height: { xs: "161px", md: "135px" },
            backgroundColor: "#fff",
            zIndex: "1",
            padding: "15px",
            borderRadius: "14px",
            textAlign: "start",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.07)",
          }}
        >
          <img src={integration} alt="" />
          <Typography
            sx={{ fontWeight: "700", fontSize: "18px", marginBlock: "7px" }}
          >
            Easy Integration
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
            Integrate smoothly with your systems.
          </Typography>
        </Card>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: "40px",
          justifyContent: "center",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <img src={Appstore} alt="" />
        </Box>
        <Box sx={{ ml: { xs: "10px", md: "20px" } }}>
          <img src={playstore} alt="" />
        </Box>
      </Box>
      <Box sx={{ mt: "120px", display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            textAlign: "center",
            position: "absolute",
            display: { xs: "none", md: "unset" },
          }}
        >
          <img src={partnerMobiles} alt="" />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-around" },
          marginLeft: { xl: "13rem" },
        }}
      >
        <Box
          sx={{
            display: { xs: "flex", md: "unset" },
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "start",
          }}
        >
          <Typography
            sx={{
              position: "relative",
              textAlign: { xs: "center", md: "center" },
              fontSize: { xs: "28px", md: "40px" },
              fontWeight: "700",
              width: { xs: "335px", md: "515px" },
            }}
          >
            How It Works For Partners
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              width: "367px",
              textAlign: { xs: "center", md: "start" },
            }}
          >
            Browse, redeem, and save with discount codes. Upgrade to premium for
            exclusive deals. Simple, easy, and rewarding!
          </Typography>
          <Box
            sx={{
              display: "inline-block",
              border: "1px solid #5F5F5F33",
              padding: "8px",
              borderRadius: "63px", // 55px button radius + 8px padding
              mt: { xs: "20px", md: "20px" },
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
              Get Started
            </Button>
          </Box>
          {/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <img src={mobilesHomeMob} alt="" />
          </Box> */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                position: "absolute",
                // display: { xs: "none", md: "unset" },
              }}
            >
              <img src={mobilesHomeMob} alt="" />
            </Box>
          </Box>
        </Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Box>
      <Box
        sx={{
          textAlign: "end",
          mt: "-38rem",
          display: { xs: "none", md: "block" },
        }}
      >
        <img src={RightEllipse} alt="" />
      </Box>
      <Box sx={{ textAlign: "end", mt: "-150rem", display: { md: "none" } }}>
        <img src={rightEllipseMob} alt="" style={{ width: "100%" }} />
      </Box>
    </Box>
  );
};

export default Partner;
