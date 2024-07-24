import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import background from "../assets/background.png";
import mobileBackground from "../assets/mobileBackground.png";
import MobileImageMob from "../assets/MobileImageMob.svg";
import rightEllipseMob from "../assets/rightEllipseMob.png";
import AppstoreMob from "../assets/AppstoreMob.svg";
import LeftEllipseHomeMob from "../assets/LeftEllipseHomeMob.png";
import playstoreMob from "../assets/playstoreMob.svg";
import mobileImage from "../assets/mobileImage.png";
import mobilesHomeMob from "../assets/mobilesHomeMob.png";
import LeftEllipse from "../assets/LeftEllipse.png";
import RightEllipse from "../assets/RightEllipse 25.png";
import Exclusive from "../assets/Exclusive.svg";
import premium from "../assets/premium.svg";
import savings from "../assets/savings.svg";
import rangeBrand from "../assets/rangeBrand.svg";
import facebook from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";

import moblePhones from "../assets/mobilePhones.svg";
import Logo from "../assets/Logo.png";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Box sx={{ background: "#EFF5F1" }}>
      <Box
        sx={{
          zIndex: "2",
          position: "relative",
        }}
      >
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <img
            src={background}
            alt=""
            width="100%"
            style={{ position: "absolute", zIndex: "-1" }}
          />
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
          }}
        >
          <img
            src={mobileBackground}
            alt=""
            width="100%"
            style={{ position: "absolute", zIndex: "-1" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            paddingTop: { xl: "50px" },
          }}
        >
          <Box
            sx={{
              width: "510px",
              display: { xs: "flex", md: "unset" },
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: { xs: "34px", md: "54px" },
                color: "#fff",
                lineHeight: { md: "62px" },
                textAlign: { xs: "center", md: "unset" },
                mt: { xs: "33px", md: "unset" },
              }}
            >
              Unlock Incredible Discounts with Koupana!
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                // fontWeight: "600",
                lineHeight: "23px",
                color: "#fff",
                mt: "15px",
                textAlign: { xs: "center", md: "unset" },
                width: { xs: "335px", md: "unset" },
              }}
            >
              Save 20%, 30%, 50% or even get items for free at your favorite
              brands
            </Typography>
            <TextField
              variant="outlined"
              sx={{
                mt: "15px",
                width: { xs: "335px", md: "506px" },
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
            <Button
              sx={{
                width: { xs: "335px", md: "506px" },
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
              Join now
            </Button>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mt: "50px",
                zIndex: "2",
              }}
            >
              <img src={MobileImageMob} />
              <Box sx={{ mt: "20px" }}>
                <img src={AppstoreMob} alt="" />
                <img src={playstoreMob} alt="" style={{ marginLeft: "20px" }} />
              </Box>
            </Box>
          </Box>
          <Box sx={{ mt: "55px", display: { xs: "none", md: "flex" } }}>
            <img
              src={mobileImage}
              alt=""
              style={{
                // position: "absolute",
                zIndex: "-1",
                width: "634px",
                height: "608px",
              }}
            />
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
      <Box sx={{ marginTop: "-26rem", position: "absolute" }}>
        <img src={LeftEllipseHomeMob} />
      </Box>
      {/* ---------user benefits---------- */}
      <Box
        sx={{
          marginTop: { xs: "180px", lg: "13rem", xl: "25rem" },
          mb: "55px",
          textAlign: "center",
          fontWeight: "700",
          fontSize: "40px",
        }}
      >
        User Benefits
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
          <img src={Exclusive} alt="" />
          <Typography
            sx={{ fontWeight: "700", fontSize: "18px", marginBlock: "7px" }}
          >
            Exclusive Discounts
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
            Get access to significant discounts on top brands.
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
            mr: { md: "20px" },
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.07)",
          }}
        >
          <img src={premium} alt="" />
          <Typography
            sx={{ fontWeight: "700", fontSize: "18px", marginBlock: "7px" }}
          >
            Premium Offers
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
            Upgrade to premium for additional exclusive discounts.
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
          <img src={savings} alt="" />
          <Typography
            sx={{ fontWeight: "700", fontSize: "18px", marginBlock: "7px" }}
          >
            Easy Savings
          </Typography>
          <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
            Effortlessly save on your favorite products and services.
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
          <img src={rangeBrand} alt="" />
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "18px",
              marginBlock: "7px",
              textAlign: "start",
            }}
          >
            Wide Range of Brands
          </Typography>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "500", textAlign: "start" }}
          >
            Discounts available on a diverse selection of popular brands.
          </Typography>
        </Card>
      </Box>
      <Box sx={{ mt: "120px", display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            textAlign: "center",
            position: "absolute",
            display: { xs: "none", md: "unset" },
          }}
        >
          <img src={moblePhones} alt="" />
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
              width: { xs: "335px", md: "460px" },
            }}
          >
            How It Works For Users
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
              textAlign: "start",
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

export default Home;
