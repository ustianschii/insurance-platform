import {
  Box as MuiBox,
  Container as MuiContainer,
  Divider as MuiDivider,
  Button as MuiButton,
  styled,
} from "@mui/material";
import blogBigArticleLogo from "../../assets/blog-big-article-logo.jpeg";

export const BlogWrapper = styled(MuiContainer)(() => ({
  height: "700px",
  marginBottom: "100px",
}));

export const BigArticleLogo = styled(MuiBox)(() => ({
  height: "50%",
  backgroundImage: `url(${blogBigArticleLogo})`,
  backgroundSize: "cover",
  borderRadius: "15px",
  marginBottom: "25px",
}));

export const CustomDivider = styled(MuiDivider)(() => ({
  margin: "0 10px 0 10px",
}));

export const CustomButton = styled(MuiButton)(() => ({
  color: "white",
  backgroundColor: "#01ad40",
}));
