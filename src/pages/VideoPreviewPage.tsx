import React from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";

export default function VideoPreviewPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: 900, mb: 2 }}>
        Video preview
      </Typography>

      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ opacity: 0.85 }}>
            Beta section for short videos and previews. Later this can connect to S3 video storage and Transcribe captions.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
