import React from "react";
import ResponsiveAppBar from "../Header/AppBar/Appbar";
import { AppBarContainer } from "./AppBar/appbarStyles";
import HeaderTopBar from "./HeaderTopBar/HeaderTopBar";

const Header = () => {
  return (
    <AppBarContainer>
      <HeaderTopBar />
      <ResponsiveAppBar />
    </AppBarContainer>
  );
};

export default Header;
