import React from "react";
import ResponsiveAppBar from "../AppBar/Appbar";
import { AppBarContainer } from "../AppBar/appbarStyles";
import HeaderTopBar from "../HeaderTopBar/HeaderTopBar";

const Header = () => {
  return (
    <AppBarContainer>
      <HeaderTopBar />
      <ResponsiveAppBar />
    </AppBarContainer>
  );
};

export default Header;
