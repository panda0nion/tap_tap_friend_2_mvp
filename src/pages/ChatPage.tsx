import React from "react";
import { Box, Container, Typography, Avatar } from "@mui/material";
import JellyBanner from "../components/JellyBanner";
import { chatMessages } from "../mock/data";

export default function ChatPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 2 }}>
      <JellyBanner title="Jelly chat" background="#69B7C6" />

      <Box sx={{ mt: 2, display: "grid", gap: 1.5 }}>
        {chatMessages.map((m) => (
          <Box key={m.id} sx={{ display: "flex", gap: 1.2, alignItems: "flex-start" }}>
            <Avatar sx={{ width: 28, height: 28, bgcolor: "rgba(0,0,0,0.12)" }}>
              {m.user.slice(0, 1).toUpperCase()}
            </Avatar>
            <Box
              sx={{
                background: "rgba(0,0,0,0.04)",
                borderRadius: 3,
                px: 2,
                py: 1.2,
                flex: 1
              }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 800, opacity: 0.8 }}>
                {m.user} · {m.timeAgo}
              </Typography>
              <Typography sx={{ mt: 0.2 }}>{m.text}</Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="body2" sx={{ opacity: 0.75 }}>
          Next: add Jelly AI chat here plus quick actions for events, posts, and reminders.
        </Typography>
      </Box>
    </Container>
  );
}
