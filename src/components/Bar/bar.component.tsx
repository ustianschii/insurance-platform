import * as React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { IProps } from "./bar-types";
import { Container } from "./bar-styles";
const drawerWidth = 240;
const navItems = ["Working hours", "Phone", "Social networks"];

export default function DrawerAppBar(props: IProps) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        LOGO
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined; // ??

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        {/* ^^ ?? */}
        <Toolbar>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              textAlign: "start",
              pl: 10,
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" }, mx: 10 }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff", mx: 3 }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Grid container spacing={10}>
        <Box component="main" sx={{ pb: "center" }}>
          <Toolbar />
          <Grid item xs={12} sx={{ pb: 10 }}>
            <Paper>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique unde fugit veniam eius, perspiciatis sunt?
              </Typography>
            </Paper>
            <Container>
              <Grid item sx={{ pt: 10 }}>
                <Paper>
                  <Typography>
                    !!!!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique unde fugit veniam eius, perspiciatis sunt?
                  </Typography>
                </Paper>
              </Grid>
            </Container>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}
