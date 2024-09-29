import {
  Button as MuiButton,
  Card as MuiCard,
  CardMedia as MuiCardMedia,
  styled,
} from "@mui/material";
import { CardMEdiaWrapperProps } from "./blogSmallCardTypes";

export const CardWrapper = styled(MuiCard)(() => ({
  display: "flex",
  padding: "25px",
  marginBottom: "10px",
  borderRadius: "15px",
  backgroundColor: "#000000e",
}));

export const CardMediaWrapper = styled(MuiCardMedia)<CardMEdiaWrapperProps>(
  ({ logo }) => ({
    backgroundImage: `url(${logo})`,
    borderRadius: "10px",
    width: "60%",
    maxHeight: "0%",
    marginRight: "20px",
  })
);

export const CustomButton = styled(MuiButton)(() => ({
  fontSize: "12px",
  color: "#01ad40",
}));
