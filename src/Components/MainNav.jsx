import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TheatersIcon from "@mui/icons-material/Theaters";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (value === 0) navigate("/");
    else if (value === 1) navigate("/movies");
    else if (value === 2) navigate("/series");
    else if (value === 3) navigate("/search");
  }, [value]);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          backgroundColor: "#22577E",
          zIndex: 100,
        }}
      >
        <BottomNavigationAction
          style={{ color: "#fff" }}
          label="What's Hot"
          icon={<WhatshotIcon />}
        />
        <BottomNavigationAction
          style={{ color: "#fff" }}
          label="Movies"
          icon={<TheatersIcon />}
        />
        <BottomNavigationAction
          style={{ color: "#fff" }}
          label="Tv Series"
          icon={<TvIcon />}
        />
        <BottomNavigationAction
          style={{ color: "#fff" }}
          label="Search"
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
