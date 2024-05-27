import {
  Button as MuiButton,
  Card as MuiCard,
  CardMedia as MuiCardMedia,
  CardContent as MuiCardContent,
  styled,
} from "@mui/material";
import { CardMEdiaWrapperProps } from "./blogSmallCardTypes";

export const CardWrapper = styled(MuiCard)(() => ({
  display: "flex",
  height: "190px",
  padding: "25px",
  marginBottom: "10px",
  borderRadius: "15px",
  backgroundColor: "#ffffffdc",
}));

export const CardMediaWrapper = styled(MuiCardMedia)<CardMEdiaWrapperProps>(
  ({ logo }) => ({
    backgroundImage: `url(${logo})`,
    borderRadius: "10px",
    height: "120px",
    width: "160px",
  })
);

export const CardContentWrapper = styled(MuiCardContent)(() => ({
  marginTop: "-18px",
  maxWidth: "390px",
}));

export const CustomButton = styled(MuiButton)(() => ({
  paddingLeft: "0px",
  fontSize: "12px",
  color: "#01ad40",
}));
