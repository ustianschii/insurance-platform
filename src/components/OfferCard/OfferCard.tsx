import { FC } from "react";
import Typography from "@mui/material/Typography";
import { OfferCardType } from "./offerCardTypes";
import {
  CardContainer,
  CardMediaContainer,
  CustomButton,
} from "./offerCardStyles";
import { CustomBadge } from "../../components/common/Badge/CustomBadge";
import { Link } from "react-router-dom";

export const OfferCard: FC<OfferCardType> = ({
  title,
  description,
  logo,
  badgeTitle,
  badgePrice,
  badgeCurrency,
  link,
}) => {
  return (
    <CardContainer>
      <CustomBadge
        badgeTitle={badgeTitle}
        badgePrice={badgePrice}
        badgeCurrency={badgeCurrency}
      ></CustomBadge>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        padding={"10px 0 0 10px"}
      >
        {title}
      </Typography>
      <Typography
        maxWidth={"70%"}
        variant="body1"
        color="text.secondary"
        padding={"0px 0 0 10px"}
      >
        {description}
      </Typography>
      <CardMediaContainer image={logo} />
      <Link to={link}>
        <CustomButton variant="contained" size="small">
          Calculează preț
        </CustomButton>
      </Link>
    </CardContainer>
  );
};
