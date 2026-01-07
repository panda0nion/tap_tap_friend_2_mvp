import React from "react";
import { Box, Container, Fab, IconButton, Typography, Card, CardContent } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { calendarItems } from "../mock/data";

export default function CalendarPage() {
  return (
    <Box>
      <Box sx={{ backgroundColor: "primary.main", color: "white", px: 3, py: 2.5, position: "relative" }}>
        <Typography variant="h4" sx={{ fontWeight: 900 }}>
          Jelly Calendar
        </Typography>

        <Fab
          size="small"
          color="inherit"
          sx={{ position: "absolute", right: 16, top: 16, background: "white" }}
          aria-label="add"
          onClick={() => alert("Add calendar item coming soon")}
        >
          <AddIcon sx={{ color: "primary.main" }} />
        </Fab>
      </Box>

      <Container maxWidth="sm" sx={{ py: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 900 }}>
            January 2026
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton aria-label="prev">
              <ChevronLeftIcon />
            </IconButton>
            <IconButton aria-label="next">
              <ChevronRightIcon />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ display: "grid", gap: 2 }}>
          {calendarItems.map((day) => (
            <Box key={day.id}>
              <Typography variant="body2" sx={{ opacity: 0.75, mb: 1 }}>
                {day.dateLabel}
              </Typography>

              <Box sx={{ display: "grid", gap: 1 }}>
                {day.items.map((it, idx) => (
                  <Card key={idx} variant="outlined" sx={{ borderLeft: `6px solid ${it.color}` }}>
                    <CardContent sx={{ py: 1.2, "&:last-child": { pb: 1.2 } }}>
                      <Typography sx={{ fontWeight: 900 }}>{it.title}</Typography>
                      <Typography variant="body2" sx={{ opacity: 0.75 }}>
                        {it.time}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
