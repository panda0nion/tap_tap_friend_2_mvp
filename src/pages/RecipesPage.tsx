import React from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";

export default function RecipesPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: 900, mb: 2 }}>
        Recipes
      </Typography>

      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ opacity: 0.85 }}>
            Future section for cooking club recipes, meal prep tips, and Jelly assisted recipe ideas.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
