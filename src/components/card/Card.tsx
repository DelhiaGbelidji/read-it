import React, {useState} from 'react';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Card,
  CardContent,
  styled,
  MenuItem,
  Menu,
  Box,
  Skeleton,
} from '@mui/material';
import {SxProps} from '@mui/system';
import Image from 'next/image';

import {COLORS} from '../../utils/theme';
import {Styled_IconButton} from '../buttons/IconButton.style';

type Type_Props_Card = {
  imageUrl?: string;
  title?: string;
  actions?: {label: string; action: any}[];
  sx?: SxProps;
  isLoading: boolean;
};

export const Styled_Card = styled(Card)(() => ({
  marginBottom: 16,
  borderColor: COLORS.neutral,
  borderRadius: '8px',
  position: 'relative',
}));

const Rea_Card = ({
  imageUrl,
  title,
  actions,
  sx,
  isLoading,
}: Type_Props_Card) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  if (isLoading) {
    return (
      <Styled_Card sx={{...sx}}>
        <Box sx={{height: 200}}>
          <Skeleton variant='rectangular' width='100%' height='100%' />
        </Box>
        <CardContent>
          <Skeleton variant='text' width='80%' height={24} />
        </CardContent>
      </Styled_Card>
    );
  }

  return (
    <Styled_Card sx={{...sx}}>
      <Box>
        <Box
          sx={{
            position: 'relative',
            height: 200,
            backgroundColor: COLORS.grey200,
          }}>
          <Image
            src={imageUrl || '/assets/default.png'}
            alt={title || 'Image de couverture'}
            fill
            style={{
              objectFit: 'contain',
            }}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </Box>
        {title && <CardContent sx={{height: 80}}>{title}</CardContent>}
      </Box>
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
