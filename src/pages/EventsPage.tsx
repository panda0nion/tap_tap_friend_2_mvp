import React from "react";
import {
  Box,
  Container,
  Fab,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Card,
  CardContent
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import JellyBanner from "../components/JellyBanner";
import { events } from "../mock/data";

export default function EventsPage() {
  const [query, setQuery] = React.useState("");

  const filtered = events.filter((e) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (e.title + " " + e.subtitle).toLowerCase().includes(q);
  });

  return (
    <Container maxWidth="sm" sx={{ py: 2 }}>
      <JellyBanner title="Jelly events" background="#F6C44B" />

      <Box sx={{ mt: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 900 }}>
          Jelly Events
        </Typography>

        <TextField
          fullWidth
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{ mt: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ opacity: 0.6 }} />
              </InputAdornment>
            )
          }}
        />
      </Box>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        {filtered.map((e) => (
          <Grid item xs={6} key={e.id}>
            <Card variant="outlined" sx={{ overflow: "hidden" }}>
              <Box
                sx={{
                  height: 160,
                  background: e.color,
                  display: "grid",
                  placeItems: "center",
                  position: "relative"
                }}
              >
                <IconButton
                  size="small"
                  sx={{ position: "absolute", top: 8, right: 8, color: "rgba(255,255,255,0.95)" }}
                  aria-label="more"
                >
                  <MoreHorizIcon />
                </IconButton>

                <Typography variant="h5" sx={{ fontWeight: 900, color: "white", textAlign: "center" }}>
                  {e.title}
                </Typography>
              </Box>

              <CardContent sx={{ p: 1.5 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
                  {e.title}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  {e.subtitle}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Fab
        color="primary"
        sx={{ position: "fixed", right: 18, bottom: 92 }}
        aria-label="add"
        onClick={() => alert("Create event coming soon")}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
}
