import { FC } from "react";
import Typography from "@mui/material/Typography";
import { OfferCardType } from "./offerCardTypes";
import {
  CardContainer,
  CardContentContainer,
  CardMediaContainer,
  CustomButton,
} from "./offerCardStyles";
import { CustomBadge } from "../../components/common/Badge/CustomBadge";

export const OfferCard: FC<OfferCardType> = ({
  title,
  description,
  logo,
  badgeTitle,
  badgePrice,
  badgeCurrency,
}) => {
  return (
    <CardContainer>
      <CardContentContainer>
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
          variant="body1"
          color="text.secondary"
          padding={"0px 0 0 10px"}
        >
          {description}
        </Typography>
      </CardContentContainer>
      <CardMediaContainer image={logo} />
      <CustomButton variant="contained" size="small">
        Calculează preț
      </CustomButton>
    </CardContainer>
  );
};
