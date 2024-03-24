import React, {useState} from 'react';
import {
  Card,
  CardContent,
  CardActionArea,
  styled,
  MenuItem,
  Menu,
  CardMedia,
  Typography,
} from '@mui/material';
import {COLORS} from '../../utils/theme';
import {Styled_IconButton} from '../buttons/IconButton.style';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {SxProps} from '@mui/system';

type Type_Props_Card = {
  imageUrl?: string;
  title?: string;
  description?: string;
  onClick?: () => void;
  actions?: {label: string; action: any}[];
  sx?: SxProps;
};

export const Styled_Card = styled(Card)(() => ({
  marginBottom: 16,
  borderColor: COLORS.grey600,
  borderRadius: '8px',
  position: 'relative',
}));

export const Styled_CardContent = styled(CardContent)(() => ({
  height: '100%',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
}));

const Rea_Card = ({
  imageUrl,
  title,
  description,
  onClick,
  actions,
  sx,
}: Type_Props_Card) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Styled_Card sx={{...sx}}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          component='img'
          image={imageUrl ? imageUrl : '/assets/default.png'}
          alt={title}
          sx={{height: 200}}
        />
        {(title || description) && (
          <Styled_CardContent>
            {title && (
              <Typography variant='subtitle2' noWrap>
                {title}
              </Typography>
            )}
            {description && (
              <Typography variant='caption' noWrap>
                {description}
              </Typography>
            )}
          </Styled_CardContent>
        )}{' '}
      </CardActionArea>
      {actions && actions.length > 0 && (
        <>
          <Styled_IconButton
            aria-label='settings'
            onClick={handleClickMenu}
            size='small'
            sx={{
              position: 'absolute',
              right: 8,
              bottom: 8,
            }}>
            <MoreVertIcon />
          </Styled_IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}>
            {actions.map((action, index) => (
              <MenuItem
                key={index}
                onClick={() => {
                  action.action();
                  handleCloseMenu();
                }}>
                {action.label}
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </Styled_Card>
  );
};
export default Rea_Card;
