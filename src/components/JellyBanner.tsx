import React from "react";
import { Box, Typography } from "@mui/material";

export default function JellyBanner({
  title,
  background = "#E8F2F4"
}: {
  title: string;
  background?: string;
}) {
  return (
    <Box
      sx={{
        height: 170,
        borderRadius: 3,
        background,
        display: "grid",
        placeItems: "center",
        border: "1px solid rgba(0,0,0,0.06)"
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 900,
          letterSpacing: 0.5,
          color: "rgba(0,0,0,0.65)"
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
