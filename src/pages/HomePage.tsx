import React from "react";
import { Box, Card, CardContent, Container, Divider, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Box>
      <Box sx={{ backgroundColor: "primary.main", color: "white", px: 3, py: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
          Welcome to Tap Tap Friend
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.9, maxWidth: 560 }}>
          Welcome back to your safe space! Today is a perfect day to connect, learn, and grow together. 💚
        </Typography>
      </Box>

      <Container maxWidth="sm" sx={{ py: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 900, mb: 1 }}>
          💡 What’s New
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          Check out the latest updates
        </Typography>
        <Box component="ul" sx={{ pl: 2, mt: 1 }}>
          <li>
            <Typography variant="body1">Added an Events Club under the Jelly events section.</Typography>
          </li>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" sx={{ fontWeight: 900, mb: 1 }}>
          Our Core Values
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
          These principles guide everything we do in our community and shape how we grow together.
        </Typography>

        <Box component="ul" sx={{ pl: 2, display: "grid", gap: 1 }}>
          <li><Typography>Belonging comes first.</Typography></li>
          <li><Typography>Consistency matters.</Typography></li>
          <li><Typography>Community over consumer.</Typography></li>
          <li><Typography>Led by us, sustained by us.</Typography></li>
        </Box>

        <Box sx={{ my: 3 }} />

        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 900 }}>
              Daily Inspiration
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 800, mt: 1 }}>
              "Celebrate every step forward, no matter how small."
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.75, mt: 1 }}>
              Author: Tap Tap Friend
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
