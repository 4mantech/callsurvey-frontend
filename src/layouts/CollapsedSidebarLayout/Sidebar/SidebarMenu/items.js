// import SupportTwoToneIcon from '@mui/icons-material/SupportTwoTone';
import CallIcon from '@mui/icons-material/Call';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';

// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const menuItems = [
  {
    heading: 'General',
    items: [
      {
        name: 'Call Surwey',
        icon: CallIcon,
        // badge: '',
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

        name: 'Setting',
        icon: SettingsIcon,
        // badge: '',
        link: '/collapsed-sidebar/blocks',
        items: [
          {
            name: 'User',
            icon: GroupIcon,
            link: '/management/users/list' 
          }
        ]
      },
      
    ]
  }
];

export default menuItems;
