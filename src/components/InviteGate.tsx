import React from "react";
import { Box, Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { validInvites } from "../mock/invites";

const STORAGE_KEY = "ttf_invite_ok";

export default function InviteGate({ children }: { children: React.ReactNode }) {
  const [ok, setOk] = React.useState<boolean>(() => localStorage.getItem(STORAGE_KEY) === "yes");
  const [code, setCode] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  if (ok) return <>{children}</>;

  return (
    <Box sx={{ minHeight: "100vh", display: "grid", placeItems: "center", p: 2 }}>
      <Card sx={{ width: "100%", maxWidth: 420 }}>
        <CardContent sx={{ display: "grid", gap: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            Tap Tap Friend
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.85 }}>
            Invite only for now. Enter your invite code to continue.
          </Typography>

          <TextField
            label="Invite code"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setError(null);
            }}
            autoFocus
          />

          {error ? (
            <Typography variant="body2" color="error">
              {error}
            </Typography>
          ) : null}

          <Button
            variant="contained"
            onClick={() => {
              const normalized = code.trim().toLowerCase();
              if (!normalized) {
                setError("Please enter an invite code.");
                return;
              }
              if (!validInvites.includes(normalized)) {
                setError("That code does not look right.");
                return;
              }
              localStorage.setItem(STORAGE_KEY, "yes");
              setOk(true);
            }}
          >
            Enter
          </Button>

          <Typography variant="caption" sx={{ opacity: 0.7 }}>
            This gate is an MVP placeholder. Later we will swap to Cognito invite only sign up.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
