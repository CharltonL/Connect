import {
  CSSObject,
  Divider,
  Drawer,
  DrawerProps,
  Icon,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  styled,
  Theme,
} from "@mui/material";

import { useLocation } from "react-router";
import { Link } from "react-router-dom";
//   import { APP_ACTIONS, APP_ENTITIES } from "@/lib/constants";
import { useGlobalState } from "./GlobalStateContext";
//   import { Can } from "../auth/Authorization";
// import {
//   AddLocationAlt,
//   AccountBalance,
//   ReceiptLong,
// } from "@mui/icons-material";

interface SidebarItem {
  path: string;
  label: string;
  icon: string | JSX.Element;
}

export const drawerWidth = 250;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const StyledDrawer = styled(Drawer)<DrawerProps>(({ theme, open }) => {
  return {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
  };
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const sidebarItems: SidebarItem[] = [
  {
    path: "/",
    label: "Home",
    icon: "home",
  },
];

export const Sidebar = () => {
  const { pathname } = useLocation();

  const { drawerOpen, toggleDrawer } = useGlobalState();

  return (
    <StyledDrawer
      variant="temporary"
      anchor="left"
      open={drawerOpen}
      onClose={toggleDrawer}
    >
      <DrawerHeader>
        <IconButton onClick={toggleDrawer}>
          <Icon>chevron_left</Icon>
        </IconButton>
      </DrawerHeader>
      <Divider />
      <MenuList>
        {sidebarItems.map((item, i) => (
          // <Can
          //   key={i}
          //   entity={item.entity}
          //   action={item.action}
          //   yes={
          <MenuItem
            key={i}
            component={Link}
            to={item.path}
            onClick={toggleDrawer}
            sx={{
              minHeight: 48,
              justifyContent: drawerOpen ? "initial" : "center",
              px: 2.5,
            }}
            selected={
              (item.path === "/" && pathname === "/") ||
              (item.path !== "/" && pathname.startsWith(item.path))
            }
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: drawerOpen ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Icon>{item.icon}</Icon>
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              sx={{ opacity: drawerOpen ? 1 : 0 }}
            />
          </MenuItem>
          //   }
          // />
        ))}
      </MenuList>
      <Divider />
    </StyledDrawer>
  );
};

export default Sidebar;
