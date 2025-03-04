import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Box,
  alpha,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PublicIcon from '@mui/icons-material/Public';
import { theme } from '../theme';

const Header = () => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="primary"
          aria-label="world mood"
          sx={{ mr: 2 }}
        >
          <PublicIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          World Mood
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            position: 'relative',
            borderRadius: 1,
            backgroundColor: alpha(theme.palette.common.black, 0.05),
            '&:hover': {
              backgroundColor: alpha(theme.palette.common.black, 0.1),
            },
            mr: 2,
            ml: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
              width: 'auto',
            },
          }}
        >
          <Box
            sx={{
              p: theme.spacing(0, 2),
              height: '100%',
              position: 'absolute',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SearchIcon />
          </Box>
          <InputBase
            placeholder="Search trends..."
            sx={{
              color: 'inherit',
              '& .MuiInputBase-input': {
                p: theme.spacing(1, 1, 1, 0),
                pl: `calc(1em + ${theme.spacing(4)})`,
                transition: theme.transitions.create('width'),
                width: '100%',
                [theme.breakpoints.up('md')]: {
                  width: '20ch',
                },
              },
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 