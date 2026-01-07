import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function TopBar({
  pageTitle,
  onOpenMenu
}: {
  pageTitle: string;
  onOpenMenu: () => void;
}) {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={{ minHeight: 56 }}>
        <IconButton color="inherit" edge="start" onClick={onOpenMenu} aria-label="menu">
          <MenuIcon />
        </IconButton>

        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Tap Tap Friend
          </Typography>
        </Box>

        <IconButton color="inherit" aria-label="search">
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="folder">
          <FolderOpenIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="more">
          <MoreVertIcon />
        </IconButton>
      </Toolbar>

      {pageTitle ? (
        <Toolbar sx={{ minHeight: 44, justifyContent: "center" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            {pageTitle}
          </Typography>
        </Toolbar>
      ) : null}
    </AppBar>
  );
}
