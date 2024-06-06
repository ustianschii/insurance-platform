import {
  Box as MuiBox,
  Container as MuiContainer,
  styled,
} from "@mui/material";
import bannerLogo from "../../assets/order-wp-car.webp";
import bannerBG from "../../assets/order-bg-banner.png";

export const TopBanner = styled(MuiContainer)(() => ({
  display: "flex",
  height: "300px",
  marginTop: "150px",
  marginBottom: "80px",
  backgroundImage: `url(${bannerBG})`,
  backgroundSize: "cover",
  borderRadius: "15px",
  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
}));

export const CarLogo = styled(MuiBox)(() => ({
  backgroundImage: `url(${bannerLogo})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  width: "800px",
  marginTop: "50px",
}));
