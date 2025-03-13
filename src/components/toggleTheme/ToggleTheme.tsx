'use client';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {Tooltip} from '@mui/material';

import useThemeToggle from '@/utils/hooks/useThemeToggle';

import {Styled_IconButton} from '../buttons/IconButton.style';

function ThemeToggle() {
  const {isDarkMode, toggleTheme} = useThemeToggle();

  return (
    <Tooltip title='Toggle theme'>
      <Styled_IconButton onClick={toggleTheme} color='inherit'>
        {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </Styled_IconButton>
    </Tooltip>
  );
}

export default ThemeToggle;
