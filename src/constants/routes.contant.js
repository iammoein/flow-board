import DashboardIcon from '@/components/icons/dashboard.icon.vue';
import IssuesIcon from '@/components/icons/issues.icon.vue';
import ProjectsIcon from '@/components/icons/projects.icon.vue';

export const ROUTE_NAMES = {
  DASHBOARD: 'dashboard',
  ISSUES: 'issues',
  ISSUE_DETAIL: 'issue-detail',
  PROJECTS: 'projects',
};

export const ROUTE_PATHS = {
  DASHBOARD: '/',
  ISSUES: '/issues',
  ISSUE_DETAIL: '/issues/:id',
  PROJECTS: '/projects',
};

export const NAV_ITEMS = [
  { label: 'Dashboard', name: ROUTE_NAMES.DASHBOARD, icon: DashboardIcon },
  { label: 'Issues', name: ROUTE_NAMES.ISSUES, icon: IssuesIcon },
  { label: 'Projects', name: ROUTE_NAMES.PROJECTS, icon: ProjectsIcon },
];
