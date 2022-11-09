import * as React from "react";
import {
  Box,
  IconButton,
  Toolbar,
  useTheme,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Typography } from "@mui/material";
import ProtectedLayout from "../layout/ProtectedLayout";
import { Page, Title } from "../component";
import Table from "../component/Table";
import { useGetAllUsersQuery } from "../store/query/auth.query";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { useAuth } from "../hooks/useAuth";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export default function Dashboard() {
  const { data, isLoading } = useGetAllUsersQuery({
    refetchOnMountOrArgChange: true,
  });
  const columns = [
    {
      flex: 0.2,
      minWidth: 150,
      headerName: "Name",
      field: "name",
      renderCell: ({ row }: any) => {
        return (
          <Typography noWrap sx={{ textTransform: "capitalize" }}>
            {row["name"]}
          </Typography>
        );
      },
    },
    {
      flex: 0.2,
      minWidth: 150,
      headerName: "Username",
      field: "username",
      renderCell: ({ row }: any) => {
        return (
          <Typography noWrap sx={{ textTransform: "capitalize" }}>
            {row["username"]}
          </Typography>
        );
      },
    },
    {
      flex: 0.2,
      minWidth: 150,
      headerName: "Email",
      field: "email",
      renderCell: ({ row }: any) => {
        return (
          <Typography noWrap sx={{ textTransform: "capitalize" }}>
            {row["email"]}
          </Typography>
        );
      },
    },
    {
      flex: 0.2,
      minWidth: 150,
      headerName: "Phone No",
      field: "phone",
      renderCell: ({ row }: any) => {
        return (
          <Typography noWrap sx={{ textTransform: "capitalize" }}>
            {row["phone"]}
          </Typography>
        );
      },
    },
    {
      flex: 0.2,
      minWidth: 150,
      headerName: "Website",
      field: "website",
      renderCell: ({ row }: any) => {
        return (
          <Typography noWrap sx={{ textTransform: "capitalize" }}>
            {row["website"]}
          </Typography>
        );
      },
    },
  ];

  return (
    <ProtectedLayout>
      <Page title="Dashboard">
        <Table data={data} columns={columns} isLoading={isLoading} />
      </Page>
    </ProtectedLayout>
  );
}
