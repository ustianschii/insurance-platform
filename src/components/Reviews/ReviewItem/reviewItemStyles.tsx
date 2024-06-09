import {
  Typography as MuiTypography,
  Box as MuiBox,
  styled,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export const Text = styled(MuiTypography)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  [theme.breakpoints.down("xl")]: {},
  marginBottom: "30px",
}));

export const Author = styled(MuiTypography)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    marginLeft: "40px",
  },
  [theme.breakpoints.down("xl")]: {
    textAlign: "start",
  },
  marginTop: "10px",
  fontWeight: "bold",
}));

export const Rating = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginLeft: "5px",
  },
  [theme.breakpoints.down("lg")]: {
    marginLeft: "35px",
  },
  [theme.breakpoints.down("xl")]: {},
  margin: "5px 0 0 0",
  textAlign: "start",
}));

export const QuoteIcon = styled(FormatQuoteIcon)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
  [theme.breakpoints.down("xl")]: {
    marginLeft: "40px",
  },
  height: "45px",
  width: "45px",
  color: "white",
  marginRight: "25px",
  backgroundColor: "#01ad40",
  borderRadius: "5px",
}));
