import {
  Box,
  CssBaseline,
  PaperProps,
  styled,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import { Outlet } from "react-router";
import { ErrorBoundary } from "../../ui/ErrorBoundary";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Toaster } from "react-hot-toast";

interface MainContainerProps extends PaperProps {}
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  // ...theme.mixins.toolbar,
  marginTop: theme.spacing(4),
  justifyContent: "flex-end",
}));

const MainContainer = styled("div", {
  shouldForwardProp: (p) => p !== "drawerOpen",
})<MainContainerProps>(() => ({
  height: "100%",
  flexGrow: 1,
  overflowY: "auto",
  overflowX: "hidden",
}));

export const Layout: React.FC = () => {
  const mainContainerRef = useRef<HTMLDivElement>(null);

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        margin: 0,
        overflowX: "hidden",
        // overflowY: "auto",
      }}
    >
      <CssBaseline />
      <Header />
      <Sidebar />
      <MainContainer ref={mainContainerRef}>
        <DrawerHeader />
        <Box sx={{ flexGrow: 1, height: "100%" }}>
          <ErrorBoundary
            fallback={
              <Typography variant="h3">Something went wrong!</Typography>
            }
          >
            <Outlet context={{ mainContainerRef }} />
          </ErrorBoundary>
        </Box>
      </MainContainer>
      <Toaster
        position="bottom-left"
        toastOptions={{
          style: {
            backgroundColor: "#ea7200",
            color: "#fff",
            fontSize: "1.4rem",
          },
        }}
      />
    </Box>
  );
};

export default Layout;
