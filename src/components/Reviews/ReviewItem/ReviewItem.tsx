import { useState } from "react";
import { Box, Typography, Divider, IconButton } from "@mui/material";
import { Author, QuoteIcon, Rating } from "./reviewItemStyles";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { reviewsArr } from "../reviewsArr";
import { Text } from "./reviewItemStyles";

const ReviewItem = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const handlePrevReview = () => {
    setCurrentReview(
      (prev) => (prev - 1 + reviewsArr.length) % reviewsArr.length
    );
  };

  const handleNextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviewsArr.length);
  };

  const review = reviewsArr[currentReview];

  return (
    <Box display={"flex"}>
      <QuoteIcon />
      <Box display={"block"} width={"100%"}>
        <Text>{review.text}</Text>
        <Divider />
        <Author>{review.author}</Author>
        <Rating color={"#fa7327"}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </Rating>
        <Box display={"flex"} m={"15px 0 0 58px"}>
          <IconButton onClick={handlePrevReview} disabled={currentReview === 0}>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ opacity: "0.6", margin: "0 10px 0 10px" }}
          />
          <IconButton
            onClick={handleNextReview}
            disabled={currentReview === reviewsArr.length - 1}
          >
            <KeyboardArrowRightIcon />
          </IconButton>
          <Typography
            display={"flex"}
            marginLeft={"40px"}
            alignItems={"center"}
            fontWeight={"bold"}
          >
            0{review.id}/03
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewItem;
