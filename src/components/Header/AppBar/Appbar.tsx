import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { AppBarCustom, AppBarLogo, PhoneIcon } from "./appbarStyles";
import { Toolbar } from "@mui/material";

const pages = [
  "Casco",
  "RCA",
  "Carte Verde",
  "Asigurarea sănătății",
  "Asigurarea bunurilor",
  "Contacte",
];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBarCustom>
      <Container maxWidth="xl">
        <Toolbar>
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon
              sx={{
                display: { xs: "flex", md: "none" },
                marginLeft: "-20px",
              }}
            />
          </IconButton>
          <IconButton sx={{ "&:hover": { backgroundColor: "transparent" } }}>
            <AppBarLogo />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box display={"flex"} color={"#fa7327"}>
            <IconButton href="tel:+37360544111">
              <PhoneIcon />
              <Typography
                variant="body1"
                color="#fa7327"
                fontWeight={"bold"}
                fontSize={"23px"}
                margin={"0 20px 0 10px"}
              >
                0(60)544111
              </Typography>
            </IconButton>
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              backgroundColor: "#01ad40",
              borderRadius: "5px",
            }}
          >
            <Tooltip title="Login">
              <Button variant="outlined">Intra</Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBarCustom>
  );
}
