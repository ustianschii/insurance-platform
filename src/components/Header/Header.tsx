import React from "react";
import ResponsiveAppBar from "../Header/AppBar/Appbar";
import { AppBarContainer } from "./headerStyles";

const Header = () => {
  return (
    <AppBarContainer>
      <ResponsiveAppBar />
    </AppBarContainer>
  );
};

export default Header;
