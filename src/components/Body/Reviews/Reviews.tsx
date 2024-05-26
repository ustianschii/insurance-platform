import React from "react";
import { ReviewsWrapper } from "./reviewsStyles";
import { Box, Typography, Divider, IconButton } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import reviewBlockBG from "../../../assets/reviews-block-bg.jpeg";
import reviewBlockAvatar1 from "../../../assets/pic-user-1.webp";
import reviewBlockAvatar2 from "../../../assets/pic-user-2.webp";
import reviewBlockAvatar3 from "../../../assets/pic-user-3.webp";
import reviewBlockAvatar4 from "../../../assets/pic-user-4.webp";
import reviewBlockAvatar5 from "../../../assets/pic-user-5.webp";
import reviewBlockAvatar6 from "../../../assets/pic-user-6.webp";
import reviewBlockAvatar7 from "../../../assets/pic-user-7.webp";
import reviewBlockAvatar8 from "../../../assets/pic-user-8.webp";

const Reviews = () => {
  return (
    <ReviewsWrapper disableGutters>
      <Box sx={{ width: "60%", padding: "40px 0 40px 40px" }}>
        <Typography
          variant="body2"
          color="#ffad14"
          fontWeight={600}
          marginBottom={"15px"}
        >
          RECENZII
        </Typography>
        <Typography
          variant="h3"
          color="initial"
          marginBottom={"50px"}
          width={"70%"}
        >
          Ce spun clienții noștri despre noi
        </Typography>
        <Box sx={{ display: "flex", height: "50%", width: "100%" }}>
          <FormatQuoteIcon
            sx={{
              height: "45px",
              width: "45px",
              color: "white",
              marginRight: "25px",
              backgroundColor: "#01ad40",
              borderRadius: "5px",
            }}
          />
          <Box sx={{ display: "block", width: "100%" }}>
            <Typography>
              <Typography marginBottom={"10px"}>
                Personal foarte prietenos. Mi-au pregatit asigurarea după apel
                telefonic, deși erau deja după grafic de o jumătate de oră.{" "}
              </Typography>
              <Typography marginBottom={"10px"}>
                Am primit și asigurarea cu livrare în aceeași zi, spre marea mea
                surprindere. De atunci cumpăr toate asigurările personale și
                pentru afacere pe RCA.MD!
              </Typography>
              <Typography marginBottom={"30px"}>
                Recomand cu încredere tuturor.
              </Typography>
              <Divider />
            </Typography>
            <Typography marginTop={"10px"} fontWeight={"bold"}>
              Alexandru
            </Typography>
            <Box
              sx={{
                color: "#fa7327",
                margin: "5px 0 0 -5px",
              }}
            >
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </Box>
          </Box>
        </Box>

        <Box display={"flex"} sx={{ margin: "15px 0 0 58px" }}>
          <IconButton sx={{ marginRight: "10px" }}>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <Divider orientation="vertical" flexItem sx={{ opacity: "0.6" }} />
          <IconButton sx={{ marginLeft: "10px" }}>
            <KeyboardArrowRightIcon />
          </IconButton>
          <Typography
            display={"flex"}
            marginLeft={"40px"}
            alignItems={"center"}
            fontWeight={"bold"}
          >
            01/03
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "600px",
          backgroundImage: `url(${reviewBlockBG})`,
          margin: "-10px 0 0 -60px",
        }}
      >
        <Box
          sx={{
            width: "500px",
            height: "100%",
            marginLeft: "75px",
          }}
        >
          <Box
            sx={{
              position: "relative",
              backgroundImage: `url(${reviewBlockAvatar1})`,
              height: "45px",
              width: "45px",
              borderRadius: "20px",
              top: "120px",
            }}
          />
          <Box
            sx={{
              position: "relative",
              backgroundImage: `url(${reviewBlockAvatar2})`,
              backgroundSize: "cover",
              height: "45px",
              width: "45px",
              borderRadius: "20px",
              top: "10px",
              left: "350px",
            }}
          />
          <Box
            sx={{
              position: "relative",
              backgroundImage: `url(${reviewBlockAvatar3})`,
              backgroundSize: "cover",
              height: "65px",
              width: "65px",
              borderRadius: "30px",
              top: "35px",
              left: "460px",
            }}
          />
          <Box
            sx={{
              position: "relative",
              backgroundImage: `url(${reviewBlockAvatar4})`,
              backgroundSize: "cover",
              height: "65px",
              width: "65px",
              borderRadius: "30px",
              top: "85px",
              left: "100px",
            }}
          />
          <Box
            sx={{
              position: "relative",
              backgroundImage: `url(${reviewBlockAvatar5})`,
              backgroundSize: "cover",
              height: "65px",
              width: "65px",
              borderRadius: "30px",
              left: "350px",
              top: "60px",
            }}
          />
          <Box
            sx={{
              position: "relative",
              backgroundImage: `url(${reviewBlockAvatar6})`,
              backgroundSize: "cover",
              height: "45px",
              width: "45px",
              borderRadius: "20px",
              top: " 70px",
              left: "50px",
            }}
          />
          <Box
            sx={{
              position: "relative",
              backgroundImage: `url(${reviewBlockAvatar7})`,
              backgroundSize: "cover",
              height: "45px",
              width: "45px",
              borderRadius: "20px",
              bottom: "-183px",
            }}
          />
          <Box
            sx={{
              position: "relative",
              backgroundImage: `url(${reviewBlockAvatar8})`,
              backgroundSize: "cover",
              height: "65px",
              width: "65px",
              borderRadius: "30px",
              left: "250px",
            }}
          />
        </Box>
      </Box>
    </ReviewsWrapper>
  );
};

export default Reviews;
