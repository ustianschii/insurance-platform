import React from "react";
import { ReviewsWrapper } from "./reviewsStyles";
import { Box, Typography, Divider, IconButton } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import reviewBlockBG from "../../../assets/reviews-block-bg.jpeg";

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
      ></Box>
    </ReviewsWrapper>
  );
};

export default Reviews;
