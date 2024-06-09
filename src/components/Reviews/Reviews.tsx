import {
  AvatarBig,
  AvatarSmall,
  ReviewsBgRightBlock,
  ReviewsLeftBlock,
  ReviewsWrapper,
  Title,
} from "./reviewsStyles";
import { Box, Typography } from "@mui/material";
import reviewBlockAvatar1 from "../../assets/pic-user-1.webp";
import reviewBlockAvatar2 from "../../assets/pic-user-2.webp";
import reviewBlockAvatar4 from "../../assets/pic-user-4.webp";
import reviewBlockAvatar6 from "../../assets/pic-user-6.webp";
import ReviewItem from "./ReviewItem/ReviewItem";

const Reviews = () => {
  return (
    <ReviewsWrapper disableGutters>
      <ReviewsLeftBlock>
        <Typography
          variant="body2"
          color="#ffad14"
          fontWeight={600}
          marginBottom={"15px"}
        >
          RECENZII
        </Typography>
        <Title variant="h3">Ce spun clienții noștri despre noi</Title>
        <ReviewItem />
      </ReviewsLeftBlock>
      <ReviewsBgRightBlock>
        <Box width={"400px"}>
          <AvatarSmall
            top={"4rem"}
            sx={{
              backgroundImage: `url(${reviewBlockAvatar1})`,
            }}
          />
          <AvatarSmall
            top={"1rem"}
            left={"20rem"}
            sx={{
              backgroundImage: `url(${reviewBlockAvatar2})`,
            }}
          />

          <AvatarBig
            top={"85px"}
            left={"1rem"}
            sx={{
              backgroundImage: `url(${reviewBlockAvatar4})`,
            }}
          />
          <AvatarSmall
            top={"9rem"}
            left={"3rem"}
            sx={{
              backgroundImage: `url(${reviewBlockAvatar6})`,
            }}
          />
        </Box>
      </ReviewsBgRightBlock>
    </ReviewsWrapper>
  );
};

export default Reviews;
