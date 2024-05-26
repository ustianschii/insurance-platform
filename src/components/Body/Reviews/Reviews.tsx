import React from "react";
import {
  AvatarBig,
  AvatarSmall,
  QuoteIcon,
  ReviewsBgRightWrapper,
  ReviewsWrapper,
} from "./reviewsStyles";
import { Box, Typography, Divider, IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
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
        <Box display={"flex"} height={"50%"}>
          <QuoteIcon />
          <Box display={"block"} width={"100%"}>
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
            <Box color={"#fa7327"} m={"5px 0 0 -5px"}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </Box>
          </Box>
        </Box>

        <Box display={"flex"} m={"15px 0 0 58px"}>
          <IconButton>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ opacity: "0.6", margin: "0 10px 0 10px" }}
          />
          <IconButton>
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
      <ReviewsBgRightWrapper>
        <Box width={"500px"} height={"100%"} ml={"75px"}>
          <AvatarSmall
            top={"120px"}
            sx={{
              backgroundImage: `url(${reviewBlockAvatar1})`,
            }}
          />
          <AvatarSmall
            top={"10px"}
            left={"350px"}
            sx={{
              backgroundImage: `url(${reviewBlockAvatar2})`,
            }}
          />
          <AvatarBig
            top={"35px"}
            left={"460px"}
            sx={{
              backgroundImage: `url(${reviewBlockAvatar3})`,
            }}
          />
          <AvatarBig
            top={"85px"}
            left={"100px"}
            sx={{
              backgroundImage: `url(${reviewBlockAvatar4})`,
            }}
          />
          <AvatarBig
            left={"350px"}
            top={"60px"}
            sx={{
              backgroundImage: `url(${reviewBlockAvatar5})`,
            }}
          />
          <AvatarSmall
            top={"70px"}
            left={"50px"}
            sx={{
              backgroundImage: `url(${reviewBlockAvatar6})`,
            }}
          />
          <AvatarSmall
            bottom={"-183px"}
            sx={{
              backgroundImage: `url(${reviewBlockAvatar7})`,
            }}
          />
          <AvatarBig
            left={"250px"}
            sx={{
              backgroundImage: `url(${reviewBlockAvatar8})`,
            }}
          />
        </Box>
      </ReviewsBgRightWrapper>
    </ReviewsWrapper>
  );
};

export default Reviews;
