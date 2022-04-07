import AnalyticsTwoToneIcon from '@mui/icons-material/AnalyticsTwoTone';
// import HealthAndSafetyTwoToneIcon from '@mui/icons-material/HealthAndSafetyTwoTone';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
// import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
// import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import SupportTwoToneIcon from '@mui/icons-material/SupportTwoTone';
// import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';
import CallIcon from '@mui/icons-material/Call';
// import BackupTableTwoToneIcon from '@mui/icons-material/BackupTableTwoTone';
// import AccessibleIcon from '@mui/icons-material/Accessible';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReportIcon from '@mui/icons-material/Report';

// import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';

const menuItems = [
  {
    heading: 'General',
    items: [
      // {
      //   name: 'Blueprints',
      //   icon: BackupTableTwoToneIcon,
      //   badge: 'v3',
      //   link: '',
      //   items: [
      //     {
      //       name: 'Extended sidebar',
      //       link: '/extended-sidebar/dashboards'
      //     },
      //     {
      //       name: 'Accent header',
      //       link: '/accent-header/dashboards',
      //       badge: '',
      //       badgeTooltip: 'Updated'
      //     },
      //     {
      //       name: 'Accent sidebar',
      //       link: '/accent-sidebar/dashboards'
      //     },
      //     {
      //       name: 'Boxed sidebar',
      //       link: '/boxed-sidebar/dashboards'
      //     },
      //     {
      //       name: 'Collapsed sidebar',
      //       link: '/collapsed-sidebar/dashboards'
      //     },
      //     {
      //       name: 'Bottom navigation',
      //       link: '/bottom-navigation/dashboards'
      //     },
      //     {
      //       name: 'Top navigation',
      //       link: '/top-navigation/dashboards'
      //     }
      //   ]
      // },
      {
        name: 'Dashboards',
        icon: DashboardIcon,
        link: '/collapsed-sidebar/dashboards',
        items: [
          {
            name: 'Reports',
            link: 'dashboards/reports',
            badge: '',
            badgeTooltip: 'Reports Dashboard - version 3.0'
          },
          {
            name: 'Expenses',
            link: 'dashboards/expenses',
            badge: '',
            badgeTooltip: 'Expenses Dashboard - version 3.0'
          },
          {
            name: 'Products',
            link: 'dashboards/products',
            badge: '',
            badgeTooltip: 'Products Dashboard - version 3.0'
          },
          {
            name: 'Statistics',
            link: 'dashboards/statistics',
            badge: '',
            badgeTooltip: 'Statistics Dashboard - version 3.0'
          },
          {
            name: 'Automation',
            link: 'dashboards/automation'
          },
          {
            name: 'Analytics',
            link: 'dashboards/analytics'
          },
          {
            name: 'Banking',
            link: 'dashboards/banking'
          },
          {
            name: 'Commerce',
            link: 'dashboards/commerce'
          },
          {
            name: 'Crypto',
            link: 'dashboards/crypto'
          },
          {
            name: 'Finance',
            link: 'dashboards/finance'
          },
          {
            name: 'Fitness',
            link: 'dashboards/fitness'
          },
          {
            name: 'Doctors',
            link: 'dashboards/healthcare/doctor'
          },
          {
            name: 'Hospital',
            link: 'dashboards/healthcare/hospital'
          },
          {
            name: 'Helpdesk',
            link: 'dashboards/helpdesk'
          },
          {
            name: 'Learning',
            link: 'dashboards/learning'
          },
          {
            name: 'Monitoring',
            link: 'dashboards/monitoring'
          },
          {
            name: 'Tasks',
            link: 'dashboards/tasks'
          }
        ]
      },
      {
        name: 'Call Survey',
        icon: CallIcon,
        badge: '',
        link: '/collapsed-sidebar/blocks',
        items: [
          {
            name: 'Charts large',
            link: 'blocks/charts-large'
          },
          {
            name: 'Charts small',
            link: 'blocks/charts-small'
          },
          {
            name: 'Composed cards',
            link: 'blocks/composed-cards'
          },
          {
            name: 'Grids',
            link: 'blocks/grids'
          },
          {
            name: 'Icon cards',
            link: 'blocks/icon-cards'
          },
          {
            name: 'Image cards',
            link: 'blocks/image-cards'
          },
          {
            name: 'Lists large',
            link: 'blocks/lists-large'
          },
          {
            name: 'Lists small',
            link: 'blocks/lists-small'
          },
          {
            name: 'Navigation',
            link: 'blocks/navigation'
          },
          {
            name: 'Profile cards',
            link: 'blocks/profile-cards'
          },
          {
            name: 'Progress circular',
            link: 'blocks/progress-circular'
          },
          {
            name: 'Progress horizontal',
            link: 'blocks/progress-horizontal'
          },
          {
            name: 'Sparklines large',
            link: 'blocks/sparklines-large'
          },
          {
            name: 'Sparklines small',
            link: 'blocks/sparklines-small'
          },
          {
            name: 'Statistics',
            link: 'blocks/statistics'
          }
        ]
      },
      {
        name: 'Details',
        icon: AnalyticsTwoToneIcon,
        link: '/collapsed-sidebar/applications',
        items: [
          {
            name: 'Calendar',
            link: 'applications/calendar'
          },
          {
            name: 'File Manager',
            link: 'applications/file-manager'
          },
          {
            name: 'Jobs Platform',
            link: 'applications/jobs-platform'
          },
          {
            name: 'Mailbox',
            link: 'applications/mailbox/inbox'
          },
          {
            name: 'Messenger',
            link: 'applications/messenger'
          },
          {
            name: 'Projects Board',
            link: 'applications/projects-board'
          }
        ]
      },{
        name: 'Reports',
        icon: ReportIcon,
        link: '/collapsed-sidebar/applications',
        items: [
          {
            name: 'report ปลอมๆ',
            link: 'applications/calendar'
          },
          {
            name: 'เทส',
            link: 'applications/file-manager'
          },
        ]
      }
    ]
  },
  {
    heading: 'Management',
    items: [
      {
        name: 'Users',
        icon: AssignmentIndTwoToneIcon,
        link: '/collapsed-sidebar/management/users',
        items: [
          {
            name: 'List',
            link: 'management/users/list'
          },
          {
            name: 'User Profile',
            link: 'management/users/single'
          }
        ]
      },
      {
        name: 'Settings',
        icon: SettingsIcon,
        link: '/collapsed-sidebar/management/projects/list'
      },
      {
        name: 'User Profile',
        icon: AccountCircleIcon,
        link: '/collapsed-sidebar/management/commerce',
        items: [
          {
            name: 'Shop',
            link: 'management/commerce/shop'
          },
          {
            name: 'List',
            link: 'management/commerce/products/list'
          },
          {
            name: 'Details',
            link: 'management/commerce/products/single/1'
          },
          {
            name: 'Create',
            link: 'management/commerce/products/create'
          }
        ]
      },
      {
        name: 'System',
        icon: SettingsSuggestIcon,
        link: '/collapsed-sidebar/management/invoices',
        items: [
          {
            name: 'List',
            link: 'management/invoices/list'
          },
          {
            name: 'Details',
            link: 'management/invoices/single'
          }
        ]
      }
    ]
  },
  {
    heading: 'Foundation',
    items: [
      {
        name: 'Overview',
        link: '/overview',
        icon: DesignServicesTwoToneIcon
      },
      {
        name: 'Documentation',
        icon: SupportTwoToneIcon,
        link: '/docs'
      }
    ]
  }
];

export default menuItems;
