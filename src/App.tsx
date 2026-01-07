import React from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import TopBar from "./components/TopBar";
import BottomTabs from "./components/BottomTabs";
import AppDrawer from "./components/AppDrawer";
import InviteGate from "./components/InviteGate";

import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import CalendarPage from "./pages/CalendarPage";
import BoardPage from "./pages/BoardPage";
import ChatPage from "./pages/ChatPage";
import PeoplePage from "./pages/PeoplePage";
import AboutPage from "./pages/AboutPage";
import RecipesPage from "./pages/RecipesPage";
import VideoPreviewPage from "./pages/VideoPreviewPage";
import NotFoundPage from "./pages/NotFoundPage";

const mainTabs = ["/home", "/events", "/calendar", "/board", "/chat"];

export default function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const tabIndex = React.useMemo(() => {
    const idx = mainTabs.findIndex((p) => location.pathname.startsWith(p));
    return idx === -1 ? 0 : idx;
  }, [location.pathname]);

  return (
    <InviteGate>
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <TopBar
          pageTitle={getPageTitle(location.pathname)}
          onOpenMenu={() => setDrawerOpen(true)}
        />
        <AppDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          onNavigate={(path) => {
            setDrawerOpen(false);
            navigate(path);
          }}
        />
        <Box component="main" sx={{ flex: 1, pb: 9 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/board" element={<BoardPage />} />
            <Route path="/chat" element={<ChatPage />} />

            <Route path="/people" element={<PeoplePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/video" element={<VideoPreviewPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Box>

        <BottomTabs
          value={tabIndex}
          onChange={(idx) => {
            navigate(mainTabs[idx] ?? "/home");
          }}
        />
      </Box>
    </InviteGate>
  );
}

function getPageTitle(pathname: string) {
  if (pathname.startsWith("/home")) return "";
  if (pathname.startsWith("/events")) return "Events";
  if (pathname.startsWith("/calendar")) return "";
  if (pathname.startsWith("/board")) return "Jelly Board";
  if (pathname.startsWith("/chat")) return "Jelly Chat";
  if (pathname.startsWith("/people")) return "People";
  if (pathname.startsWith("/about")) return "About the crew";
  if (pathname.startsWith("/recipes")) return "Recipes";
  if (pathname.startsWith("/video")) return "Video preview";
  return "";
}
