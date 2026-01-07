import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#4E6F7A" },
    background: { default: "#FFFFFF" }
  },
  typography: {
    fontFamily: '"Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'
  },
  shape: { borderRadius: 14 },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none"
        }
      }
    }
  }
});
