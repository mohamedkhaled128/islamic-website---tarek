import {
  Container,
  Box,
  Typography,
  Button,
  Stack,
} from '@mui/material';

import { Link } from 'react-router-dom';

import { useMemo } from 'react';

import Background from './Background';
import Basmala from './Basmala';
import BlurBackground from '../../BlurBackground';

import { useThemeContext } from '../../../contexts/ThemeContext';

import ramadanContent from '../../../data/home';

const GOLD = '#d4af37';

export default function HomeHeader() {
  const { theme } = useThemeContext();

  /* ================= Outer Container ================= */

  const outerStyle = useMemo(
    () => ({
      width: '100%',

      minHeight: '100vh',

      display: 'flex',

      justifyContent: 'center',

      alignItems: 'center',

      position: 'relative' as const,

      py: { xs: 6, md: 8 },

      px: 2,
    }),
    []
  );

  /* ================= Description ================= */

  const descriptionSx = useMemo(
    () => ({
      color: '#fff',

      textAlign: 'center' as const,

      maxWidth: 560,

      mx: 'auto',

      lineHeight: 2,

      fontSize: {
        xs: '0.95rem',
        sm: '1rem',
      },

      fontFamily:
        '"Tajawal", "Cairo", system-ui, sans-serif',

      mt: 4,

      px: { xs: 1, sm: 0 },
    }),
    []
  );

  /* ================= Buttons Container ================= */

  const navStackSx = useMemo(
    () => ({
      display: 'flex',

      flexDirection: 'column',

      alignItems: 'center', // مهم جدا للسنترة

      justifyContent: 'center',

      gap: { xs: 2, sm: 2.5 },

      mt: { xs: 4, sm: 5 },

      width: '100%',
    }),
    []
  );

  /* ================= Button Style ================= */

  const primaryBtnSx = useMemo(
    () => ({
      color: theme.colors.primary.main,

      backgroundColor: GOLD,

      fontWeight: 700,

      fontSize: {
        xs: '0.95rem',
        sm: '1rem',
      },

      width: {
        xs: '90%',
        sm: '320px',
      },

      minWidth: '250px',

      textAlign: 'center',

      margin: '0 auto',

      px: 3.5,

      py: 1.75,

      borderRadius: 2,

      boxShadow:
        '0 4px 14px rgba(212, 175, 55, 0.35)',

      '&:hover': {
        backgroundColor: '#c9a227',

        boxShadow:
          '0 6px 20px rgba(212, 175, 55, 0.4)',

        color: theme.colors.primary.main,
      },
    }),
    [theme.colors.primary.main]
  );

  /* ================= Render ================= */

  return (
    <Box component="header" sx={outerStyle}>
      <Background />

      <BlurBackground
        backgroundColor={theme.colors.primary.main}
        opacity={0.12}
      />

      <Container
        maxWidth="md"
        sx={{
          zIndex: 1,
          position: 'relative',
          textAlign: 'center',
        }}
      >
        <Basmala />

        <Typography component="p" sx={descriptionSx}>
          {ramadanContent.sadaqaSection.description
            .trim()
            .replace(/\s+/g, ' ')}
        </Typography>

        <Stack sx={navStackSx}>
          {ramadanContent.navItems.map((item) => (
            <Button
              key={item.href}
              component={Link}
              to={item.href}
              variant="contained"
              size="large"
              sx={primaryBtnSx}
            >
              {item.name}
            </Button>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
