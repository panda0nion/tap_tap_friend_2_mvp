import React from "react";
import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export default function AppDrawer({
  open,
  onClose,
  onNavigate
}: {
  open: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 280, p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Tap Tap Friend
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.75 }}>
          Safe space for connection
        </Typography>
      </Box>

      <Divider />

      <List>
        <ListItemButton onClick={() => onNavigate("/people")}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="People" />
        </ListItemButton>

        <ListItemButton onClick={() => onNavigate("/about")}>
          <ListItemIcon>
            <InfoOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="About the crew" />
        </ListItemButton>

        <ListItemButton onClick={() => onNavigate("/recipes")}>
          <ListItemIcon>
            <RestaurantMenuIcon />
          </ListItemIcon>
          <ListItemText primary="Recipes" />
        </ListItemButton>

        <ListItemButton onClick={() => onNavigate("/video")}>
          <ListItemIcon>
            <VideoLibraryOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Video preview (beta)" />
        </ListItemButton>

        <Divider sx={{ my: 1 }} />

        <ListItemButton onClick={() => alert("Settings coming soon")}>
          <ListItemIcon>
            <SettingsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}
