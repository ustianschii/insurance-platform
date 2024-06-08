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
  marginBottom: "30px",
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

export const FastOrderWrapper = styled(MuiBox)(() => ({
  padding: "30px 20px 30px 20px",
  textAlign: "left",
  borderRadius: "15px",
  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
  marginBottom: "30px",
}));

export const GoodToKnowWrapper = styled(MuiBox)(() => ({
  textAlign: "left",
  borderRadius: "15px",
  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
  marginBottom: "30px",
}));

export const FAQWrapper = styled(MuiBox)(() => ({
  textAlign: "left",
  borderRadius: "15px",
  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
  marginBottom: "100px",
}));

export const ConstructorWrapper = styled(MuiBox)(() => ({
  width: "75%",
  borderRadius: "15px",
  padding: "30px 20px 30px 20px",
  margin: "0 30px 0 30px",
  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
}));

export const ResultWrapper = styled(MuiBox)(() => ({
  width: "30%",
  borderRadius: "15px",
  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
}));
