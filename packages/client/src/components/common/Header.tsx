import {
  AppBar,
  AppBarProps,
  Button,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
//   import { useAuth } from "../auth/Authentication";
import { useGlobalState } from "./GlobalStateContext";

interface StyledAppBarProps extends AppBarProps {}

const StyledAppBar = styled(AppBar)<StyledAppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const Header: React.FC = () => {
  const { toggleDrawer } = useGlobalState();
  return (
    <>
      <StyledAppBar className="no-print" position="fixed">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#EA7200",
          }}
        >
          <Button
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{ flex: 1, display: "flex", justifyContent: "left" }}
          >
            menu
          </Button>
          <>
            <div
              style={{
                backgroundColor: "white",
                height: "30px",
                width: "30px",
                borderRadius: "100%",
              }}
            >
              <img
                src="https://jewishhomeroc.org/wp-content/uploads/2021/07/favicon.png"
                style={{ height: "30px", width: "30px" }}
              />
            </div>
            <Typography
              sx={{ flex: 1, display: "flex", justifyContent: "center" }}
            >
              JHR Connect
            </Typography>
          </>
          <Typography
            sx={{ flex: 1, display: "flex", justifyContent: "right" }}
          >
            Sign In
          </Typography>
        </Toolbar>
      </StyledAppBar>
    </>
  );
};

export default Header;
