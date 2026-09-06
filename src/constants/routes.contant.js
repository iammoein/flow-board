import DashboardIcon from "@/components/icons/dashboard.icon.vue";
import IssuesIcon from "@/components/icons/issues.icon.vue";

export const ROUTE_NAMES = {
  DASHBOARD: "dashboard",
  ISSUES: "issues",
};

export const ROUTE_PATHS = {
  DASHBOARD: "/",
  ISSUES: "/issues",
};

export const NAV_ITEMS = [
  { label: "داشبورد", name: ROUTE_NAMES.DASHBOARD, icon: DashboardIcon },
  { label: "مسائل", name: ROUTE_NAMES.ISSUES, icon: IssuesIcon },
];
