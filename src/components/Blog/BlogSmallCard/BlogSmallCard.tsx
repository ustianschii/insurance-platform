import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { CustomDivider } from "../blogStyles";
import {
  CardWrapper,
  CardMediaWrapper,
  CustomButton,
  CardContentWrapper,
} from "./blogSmallCardStyles";
import { BlogSmallType } from "./blogSmallCardTypes";

const BlogSmallCard: FC<BlogSmallType> = ({
  logo,
  theme,
  date,
  title,
  description,
}) => {
  return (
    <Box width={"100%"}>
      <CardWrapper>
        <CardMediaWrapper logo={logo} />
        <CardContentWrapper>
          <Box display={"flex"} marginBottom={"7px"}>
            <Typography color={"#2d53f6"} fontWeight={"bold"} fontSize={"11px"}>
              {theme}
            </Typography>
            <CustomDivider orientation="vertical" flexItem />
            <Typography fontSize={"12px"} fontWeight={600}>
              {date}
            </Typography>
          </Box>
          <Typography
            overflow={"auto"}
            fontSize={"14px"}
            fontWeight={"bold"}
            marginBottom={"7px"}
          >
            {title}
          </Typography>
          <Typography overflow={"auto"} fontSize={"12px"} marginBottom={"7px"}>
            {description}
          </Typography>
          <CustomButton size="small">Citeste mai mult</CustomButton>
        </CardContentWrapper>
      </CardWrapper>
    </Box>
  );
};

export default BlogSmallCard;
