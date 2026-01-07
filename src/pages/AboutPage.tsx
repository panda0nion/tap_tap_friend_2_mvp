import React from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";

export default function AboutPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: 900, mb: 2 }}>
        About the crew
      </Typography>

      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ opacity: 0.85 }}>
            Tap Tap Friend is a safe space built with our community in mind. It supports connection, consistency, and belonging.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
