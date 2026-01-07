import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

export default function BottomTabs({
  value,
  onChange
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        borderTop: "1px solid rgba(0,0,0,0.06)"
      }}
    >
      <BottomNavigation
        showLabels={false}
        value={value}
        onChange={(_, next) => onChange(next)}
      >
        <BottomNavigationAction icon={<HomeOutlinedIcon />} aria-label="home" />
        <BottomNavigationAction icon={<GridViewOutlinedIcon />} aria-label="events" />
        <BottomNavigationAction icon={<CalendarMonthOutlinedIcon />} aria-label="calendar" />
        <BottomNavigationAction icon={<ImageOutlinedIcon />} aria-label="board" />
        <BottomNavigationAction icon={<ChatBubbleOutlineOutlinedIcon />} aria-label="chat" />
      </BottomNavigation>
    </Paper>
  );
}
