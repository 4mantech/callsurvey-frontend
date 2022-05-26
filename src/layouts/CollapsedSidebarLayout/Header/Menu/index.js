import {
  Box,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  styled
} from '@mui/material';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';


import { NavLink, useLocation } from 'react-router-dom';
// import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
// import SidebarMenuItem from '../../Sidebar/SidebarMenu/item';
import menuItems from '../../Sidebar/SidebarMenu/items';

const ListWrapper = styled(Box)(
  ({ theme }) => `
        .MuiTouchRipple-root {
            display: none;
        }
        
        .MuiListItem-root {
            transition: ${theme.transitions.create(['color', 'fill'])};
            
            &.MuiListItem-indicators {
                padding: ${theme.spacing(1, 2)};
            
                .MuiListItemText-root {
                    .MuiTypography-root {
                        &:before {
                            height: 4px;
                            width: 22px;
                            opacity: 0;
                            visibility: hidden;
                            display: block;
                            position: absolute;
                            bottom: -10px;
                            transition: all .2s;
                            border-radius: ${theme.general.borderRadiusLg};
                            content: "";
                            background: ${theme.colors.primary.main};
                        }
                    }
                }

                &.active,
                &:active,
                &:hover {
                
                    background: transparent;
                
                    .MuiListItemText-root {
                        .MuiTypography-root {
                            &:before {
                                opacity: 1;
                                visibility: visible;
                                bottom: 0px;
                            }
                        }
                    }
                }
            }
        }
`
);

function HeaderMenu(props) {
  const { t } = useTranslation();
  const location = useLocation();
  const user = window.localStorage.getItem('user');

  let role = 99;
  if (user) {
    role = JSON.parse(user).role;
  }

  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  let userButton = null;
  if(role !== 1){
    userButton = (<ListItem
    classes={{ root: 'MuiListItem-indicators' }}
    button
    component={NavLink}
    to={`/${location.pathname.split('/')[0]}management/users/list`} 
  >
    <ListItemText
      primaryTypographyProps={{ noWrap: true }}
      primary={t('Users')}
    />
  </ListItem>)
}

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ListWrapper>
        <List disablePadding component={Box} display="flex">
          {userButton}
          {/* <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to={`/${location.pathname.split('/')[1]}/dashboard`}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary={t('Dashboard')}
            />
          </ListItem> */}
        </List>
      </ListWrapper>
      <Menu
        disableScrollLock
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
      >
        <MenuItem component={NavLink} to="/overview">
          {t('Features tour')}
        </MenuItem>
        <MenuItem component={NavLink} to="/docs/introduction">
          {t('Getting started guide')}
        </MenuItem>
        <MenuItem component={NavLink} to="/docs/contact-support">
          {t('Contact support')}
        </MenuItem>
      </Menu>
    </>
  );
}

export default HeaderMenu;
