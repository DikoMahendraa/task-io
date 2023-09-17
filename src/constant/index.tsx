import {
  ICDashboard,
  ICOrder,
  ICPaper,
  ICPie,
  ICPrint,
  ICSettings
} from '@/src/assets/svg';

export const CURRENT_TAB = 'To-Do';

export interface ListMenu {
  title: string;
  icon: React.ReactNode;
  path: string;
}

export const listMenu: Array<ListMenu> = [
  {
    title: 'Dashboard',
    icon: <ICDashboard />,
    path: '/dashboard'
  },
  {
    title: 'Analytics',
    icon: <ICPie />,
    path: '/dashboard/analytics'
  },
  {
    title: 'History',
    icon: <ICOrder />,
    path: '/dashboard/history'
  },
  {
    title: 'To-Do',
    icon: <ICPaper />,
    path: '/dashboard/todo'
  },
  {
    title: 'Report',
    icon: <ICPrint />,
    path: '/dashboard/report'
  },
  {
    title: 'Settings',
    icon: <ICSettings />,
    path: '/dashboard/settings'
  }
];
