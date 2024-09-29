import { Box, Typography } from "@mui/material";
import { CustomDivider } from "../blogStyles";
import {
  CardWrapper,
  CardMediaWrapper,
  CustomButton,
} from "./blogSmallCardStyles";
import { BlogSmallCardProps } from "./blogSmallCardTypes";

export const BlogSmallCard = ({
  logo,
  theme,
  date,
  title,
  description,
}: BlogSmallCardProps) => {
  return (
    <CardWrapper>
      <CardMediaWrapper logo={logo} />
      <Box>
        <Box display={"flex"}>
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
      </Box>
    </CardWrapper>
  );
};
