import { Box as MuiBox, styled } from "@mui/material";

export const FooterWrapper = styled(MuiBox)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  paddingLeft: "50px",
  paddingRight: "50px",
}));
