import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Box,
  } from "@mui/material";
  import { Link } from "react-router-dom";
  import DarkModeIcon from "@mui/icons-material/DarkMode";
  import LightModeIcon from "@mui/icons-material/LightMode";
  import HomeIcon from "@mui/icons-material/Home";
  
  interface Props {
    mode: "light" | "dark";
    setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  }
  
  const Navbar = ({ mode, setMode }: Props) => {
    return (
      <AppBar position="sticky">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left side: Logo + Home */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              sx={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: 600,
              }}
            >
              📝 Blog App
            </Typography>
  
            <Button
              component={Link}
              to="/"
              color="inherit"
              startIcon={<HomeIcon />}
              sx={{ textTransform: "none" }}
            >
              Home
            </Button>
          </Box>
  
          {/* Right side: Theme toggle */}
          <IconButton
            color="inherit"
            onClick={() =>
              setMode(mode === "light" ? "dark" : "light")
            }
          >
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navbar;
  