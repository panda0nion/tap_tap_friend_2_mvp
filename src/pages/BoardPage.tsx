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
  CardContent,
  Chip
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import JellyBanner from "../components/JellyBanner";
import { boardPosts } from "../mock/data";

const topics = ["ALL", "COMMUNITY", "GARDEN", "FOOD", "ARTS", "SPORTS", "MOVEMENT"];

export default function BoardPage() {
  const [query, setQuery] = React.useState("");
  const [topic, setTopic] = React.useState("ALL");

  const filtered = boardPosts.filter((p) => {
    const q = query.trim().toLowerCase();
    const matchesQuery = !q || (p.title + " " + p.author + " " + p.topic).toLowerCase().includes(q);
    const matchesTopic = topic === "ALL" || p.topic === topic;
    return matchesQuery && matchesTopic;
  });

  return (
    <Container maxWidth="sm" sx={{ py: 2 }}>
      <JellyBanner title="Jelly board" background="#49B088" />

      <Typography variant="h5" sx={{ fontWeight: 900, mt: 2 }}>
        Jelly Board
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

      <Box sx={{ display: "flex", gap: 1, mt: 1.5, pb: 0.5, overflowX: "auto" }}>
        {topics.map((t) => (
          <Chip
            key={t}
            label={t}
            clickable
            onClick={() => setTopic(t)}
            color={t === topic ? "primary" : "default"}
            variant={t === topic ? "filled" : "outlined"}
          />
        ))}
      </Box>

      <Grid container spacing={2} sx={{ mt: 0.5 }}>
        {filtered.map((p) => (
          <Grid item xs={6} key={p.id}>
            <Card variant="outlined" sx={{ overflow: "hidden" }}>
              <Box
                sx={{
                  height: 150,
                  background: "linear-gradient(135deg, rgba(0,0,0,0.08), rgba(0,0,0,0.02))",
                  display: "grid",
                  placeItems: "center",
                  position: "relative"
                }}
              >
                <IconButton size="small" sx={{ position: "absolute", top: 8, right: 8 }} aria-label="more">
                  <MoreHorizIcon />
                </IconButton>

                <Typography variant="body2" sx={{ opacity: 0.75, fontWeight: 700 }}>
                  {p.imageHint}
                </Typography>
              </Box>

              <CardContent sx={{ p: 1.5 }}>
                <Typography variant="caption" sx={{ fontWeight: 900, color: "primary.main" }}>
                  {p.topic}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 900, lineHeight: 1.2 }}>
                  {p.title}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.75 }}>
                  {p.author}
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
        onClick={() => alert("Create post coming soon (with caption suggestions)")}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
}
