import { Typography } from '@mui/material';
import ramadanContent from '../../../data/home';

const GOLD = '#d4af37';

export default function HeaderTitle() {
  return (
    <Typography
      component="h1"
      variant="h2"
      sx={{
        color: '#f8f4ed',
        textAlign: 'center',
        fontWeight: 800,
        letterSpacing: '0.02em',
        fontFamily: '"Tajawal", "Cairo", system-ui, sans-serif',
        fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
        textShadow: `0 2px 20px rgba(0,0,0,0.3)`,
      }}
    >
      {ramadanContent.hero.title}
    </Typography>
  );
}
