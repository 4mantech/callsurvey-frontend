// import SupportTwoToneIcon from '@mui/icons-material/SupportTwoTone';
import CallIcon from '@mui/icons-material/Call';
import SettingsIcon from '@mui/icons-material/Settings';
import UserIcon from '@mui/icons-material/User';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const menuItems = [
  {
    heading: 'General',
    items: [
      {
        name: 'Call Survey',
        icon: CallIcon,
        badge: '',
        link: '/collapsed-sidebar/blocks',
        items: [
      
          {
            name: 'Dashboard',
            link: 'dashboards/dashboard'
          },
          {
            name: 'Reports',
            link: 'dashboards/reports',
          },
        ]
      },
          // {
          //   name: 'User Profile',
          //   icon: AccountCircleIcon,
          //   link: '/collapsed-sidebar/management/commerce',
          //   items: [
          //     {
          //       name: 'Shop',
          //       link: 'management/commerce/shop'
          //     },
          //     {
          //       name: 'List',
          //       link: 'management/commerce/products/list'
          //     },
          //     {
          //       name: 'Details',
          //       link: 'management/commerce/products/single/1'
          //     },
          //     {
          //       name: 'Create',
          //       link: 'management/commerce/products/create'
          //     }
          //   ]
          // },
    ]
  },
  {
    heading: 'Foundation',
    items: [
      {
        name: 'User',
        icon: UserIcon,
        link: '/collapsed-sidebar/management/users/list' 
      },
      {
        name: 'Settings',
        icon: SettingsIcon,
        link: '/collapsed-sidebar/management/projects/list'
      }
    ]
  }
];

export default menuItems;
