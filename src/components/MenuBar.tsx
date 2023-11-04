import { useState } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  Button,
  Container,
  Menu,
  MenuItem,
} from "@mui/material";
import { StorefrontTwoTone, KeyboardArrowDown } from "@mui/icons-material";

export const MenuBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <StorefrontTwoTone />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ECommerce Dashboard
          </Typography>
          <Stack
            sx={{ display: { xs: "none", md: "flex" } }}
            direction="row"
            spacing={2}
          >
            <Button color="inherit">Overview</Button>
            <Button
              color="inherit"
              id="xx-button"
              onClick={handleClick}
              aria-controls={open ? "xx-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              endIcon={<KeyboardArrowDown />}
            >
              SalesReport
            </Button>
            <Button color="inherit">Inventory</Button>
            <Button color="inherit">Customer</Button>
          </Stack>
          <Menu
            id="xx-menu"
            anchorEl={anchorEl}
            open={open}
            MenuListProps={{ "aria-labelledby": "xx-button" }}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleClose}>menu 1</MenuItem>
            <MenuItem onClick={handleClose}>menu 2</MenuItem>
            <MenuItem onClick={handleClose}>menu 3</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
