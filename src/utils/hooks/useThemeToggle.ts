'use client'
import { useTheme } from '@mui/material/styles';

function useThemeToggle() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const toggleTheme = () => {
    document.body.style.transition = 'background-color 0.5s ease';
    document.body.style.backgroundColor = isDarkMode ? '#fff' : '#000';
  };

  return { isDarkMode, toggleTheme };
}

export default useThemeToggle