import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";

import { Routes, Route, useNavigate } from "react-router-dom";
import Section1 from "./Section1";
import Section2 from "./Section2";

export default function ButtonAppBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${250}px)`, ml: `${250}px` }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Main Page
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem
            button
            key={"Section 1"}
            onClick={() => navigate("section1")}
          >
            <ListItemIcon>
              <AcUnitIcon />
            </ListItemIcon>
            <ListItemText primary={"Section 1"} />
          </ListItem>
          <ListItem
            button
            key={"Section 2"}
            onClick={() => navigate("section2")}
          >
            <ListItemIcon>
              <LocalPoliceIcon />
            </ListItemIcon>
            <ListItemText primary={"Section 2"} />
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "64px" }}>
        <Routes>
          <Route path="/section1" element={<Section1 />} />
          <Route path="/section2" element={<Section2 />} />
        </Routes>
      </Box>
    </Box>
  );
}
