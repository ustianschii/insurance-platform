import React from "react";
import {
  AvatarBig,
  AvatarSmall,
  ReviewsBgRightWrapper,
  ReviewsWrapper,
} from "./reviewsStyles";
import { Box, Typography } from "@mui/material";
import reviewBlockAvatar1 from "../../assets/pic-user-1.webp";
import reviewBlockAvatar2 from "../../assets/pic-user-2.webp";
import reviewBlockAvatar3 from "../../assets/pic-user-3.webp";
import reviewBlockAvatar4 from "../../assets/pic-user-4.webp";
import reviewBlockAvatar5 from "../../assets/pic-user-5.webp";
import reviewBlockAvatar6 from "../../assets/pic-user-6.webp";
import reviewBlockAvatar7 from "../../assets/pic-user-7.webp";
import reviewBlockAvatar8 from "../../assets/pic-user-8.webp";
import ReviewItem from "./ReviewItem/ReviewItem";

const Reviews = () => {
  return (
    <ReviewsWrapper disableGutters>
      <Box width={"60%"} p={"40px 0 40px 40px"}>
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
        <ReviewItem />
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
