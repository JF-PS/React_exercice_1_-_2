import React from "react";
import Box from "@mui/material/Box";
import SeasonPage from "./pages/SeasonPage";
function App() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
      }}
    >
      <SeasonPage />
    </Box>
  );
}

export default App;
