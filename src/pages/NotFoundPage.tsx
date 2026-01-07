import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: 900 }}>
        Page not found
      </Typography>
      <Typography sx={{ mt: 1, opacity: 0.8 }}>
        That page does not exist.
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" onClick={() => navigate("/home")}>
          Go home
        </Button>
      </Box>
    </Container>
  );
}
