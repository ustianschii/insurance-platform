import {
  Container as MuiContainer,
  Card as MuiCard,
  CardContent as MuiCardContent,
  Button as MuiButton,
  styled,
} from "@mui/material";

export const OfferCardsContainer = styled(MuiContainer)(() => ({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  height: "650px",
  marginTop: "-100px",
}));

export const CardContainer = styled(MuiCard)(() => ({
  display: "flex",
  position: "relative",
  height: "230px",
  width: "365px",
  borderRadius: "15px",
  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
}));

export const CardContentContainer = styled(MuiCardContent)(() => ({
  display: "block",
  width: "100%",
  height: "50%",
}));

// export const CardMediaContainer = styled(MuiCardContent)(() => ({
//   backgroundImage: `url(${logo})`,
//   position: "absolute",
//   bottom: "0",
//   height: "110px",
//   width: "160px",
//   margin: "0 0 10px 10px",
// }));

export const CustomButton = styled(MuiButton)(() => ({
  position: "absolute",
  bottom: "0",
  right: "0",
  margin: "0 20px 20px 0px",
  backgroundColor: "#01ad4033",
  color: "#01ad40",
}));
