// assets
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import HubIcon from "@mui/icons-material/Hub";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import GroupIcon from "@mui/icons-material/Group";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import WaterIcon from "@mui/icons-material/Water";
import PercentIcon from "@mui/icons-material/Percent";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import TelegramIcon from "@mui/icons-material/Telegram";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

// icons
const icons = {
  NoteAltIcon,
  HubIcon,
  SelfImprovementIcon,
  DashboardIcon,
  NotificationsIcon,
  GroupIcon,
  AutoAwesomeIcon,
  WaterIcon,
  PercentIcon,
  SportsVolleyballIcon,
  AccountBalanceWalletIcon,
  WorkspacePremiumIcon,
  ConfirmationNumberIcon,
  LocalActivityIcon,
  TelegramIcon,
  ContentCopyIcon,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const attandance = {
  id: "group-attendance",
  title: "Attendance",
  groupTitleVisible: false,
  groupDivider: false,
  type: "group",
  children: [
    {
      id: "attendance",
      title: "Attendance",
      type: "collapse",
      url: "/attendance",
      icon: icons.NotificationsIcon,
      children: [
       
        {
          id: "my-attendance",
          title: "My Attendance",
          type: "item",
          url: "/my-attendance",
          icon: icons.NotificationsIcon,
          breadcrumbs: false,
        },
        {
          id: "attendance-table",
          title: "My Attendance Table",
          type: "item",
          url: "/attendance-table",
          icon: icons.NotificationsIcon,
          breadcrumbs: false,
        },
        {
          id: "attendance-request",
          title: "Attendance Request",
          type: "item",
          url: "/attendance-request",
          icon: icons.NotificationsIcon,
          breadcrumbs: false,
        },
        {
          id: "my-shift-time",
          title: "My Shift Time",
          type: "item",
          url: "/my-shift-time",
          icon: icons.NotificationsIcon,
          breadcrumbs: false,
        },
        {
          id: "remote-work-request",
          title: "Remote Work Request",
          type: "item",
          url: "/remote-work-request",
          icon: icons.NotificationsIcon,
          breadcrumbs: false,
        },
      ],
    },
  ],
};

export default attandance;