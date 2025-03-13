import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';

import {Link, Avatar as MuiAvatar, Stack, Typography} from '@mui/material';
import {ComponentProps} from 'react';
import {COLORS, stringToColor} from '@/utils/theme';
import {Styled_IconButton} from '../buttons/IconButton.style';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

type Type_Props_AccountMenu = ComponentProps<typeof MuiAvatar> & {
  name: string;
};

const Avatar = ({name, ...props}: Type_Props_AccountMenu) => {
  const stringInitials = (str: string): string => {
    if (!str || typeof str !== 'string') return 'U';

    const matches = str.match(/(\b\S)?/g);
    if (!matches) return 'U';

    const initials = matches.join('').match(/(^\S|\S$)?/g);

    if (!initials) return 'U';

    return initials.join('').toUpperCase() || 'U';
  };

  const stringAvatar = (
    name: string,
    props: ComponentProps<typeof MuiAvatar>,
  ) => {
    return {
      ...props,
      sx: {
        bgcolor: stringToColor(name || 'User'),
        ...props.sx,
      },
      children: stringInitials(name),
    };
  };

  return <MuiAvatar {...stringAvatar(name, props)} alt={name} />;
};

const AccountMenu = ({name}: Type_Props_AccountMenu) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Tooltip title='Account settings'>
        <Styled_IconButton
          onClick={handleClick}
          size='small'
          sx={{ml: 2}}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}>
          <Avatar sx={{width: 32, height: 32}} name={name} />
        </Styled_IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}>
        <MenuItem onClick={handleClose}>
          <Link
            href={'/account'}
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}>
            <Stack direction={'row'} spacing={1} justifyContent={'center'}>
              <AccountCircleIcon fontSize='small' />
              <Typography> My account</Typography>
            </Stack>
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <Link
            href={'/api/auth/signout'}
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}>
            <Stack
              direction={'row'}
              spacing={1}
              justifyContent={'center'}
              sx={{color: COLORS.red}}>
              <Logout fontSize='small' />
              <Typography>Sign out</Typography>
            </Stack>
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountMenu;
