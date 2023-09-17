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
    path: ''
  },
  {
    title: 'Analytics',
    icon: <ICPie />,
    path: ''
  },
  {
    title: 'History',
    icon: <ICOrder />,
    path: ''
  },
  {
    title: 'To-Do',
    icon: <ICPaper />,
    path: ''
  },
  {
    title: 'Report',
    icon: <ICPrint />,
    path: ''
  },
  {
    title: 'Settings',
    icon: <ICSettings />,
    path: ''
  }
];
