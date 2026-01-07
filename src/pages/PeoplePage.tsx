import React from "react";
import { Box, Container, Typography, Card, CardContent, Chip } from "@mui/material";

const people = [
  { name: "Aiden", role: "Athlete" },
  { name: "Laura", role: "Family" },
  { name: "Jeffrey", role: "Athlete" },
  { name: "Monica", role: "Coach" },
  { name: "Patrick", role: "Volunteer" }
];

export default function PeoplePage() {
  return (
    <Container maxWidth="sm" sx={{ py: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: 900, mb: 2 }}>
        People
      </Typography>

      <Box sx={{ display: "grid", gap: 1.2 }}>
        {people.map((p) => (
          <Card key={p.name} variant="outlined">
            <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Typography sx={{ fontWeight: 900 }}>{p.name}</Typography>
              <Chip label={p.role} color="primary" variant="outlined" />
            </CardContent>
          </Card>
        ))}
      </Box>

      <Typography variant="body2" sx={{ opacity: 0.75, mt: 2 }}>
        Future: contact, chat, and call controls per member.
      </Typography>
    </Container>
  );
}
