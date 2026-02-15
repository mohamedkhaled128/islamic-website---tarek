import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import { useMemo } from 'react';
import { Series } from '../../data/programs-series';
import { useThemeContext } from '../../contexts/ThemeContext';

interface SeriesCardProps {
  series: Series;
  onSelect: (series: Series) => void;
}

export default function SeriesCard({ series, onSelect }: SeriesCardProps) {
  const { theme } = useThemeContext();

  const cardStyle = useMemo(() => ({
    backgroundColor: theme.colors.primary.contrastText,
    borderRadius: '12px',
    padding: '20px',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
    transition: theme.transition,
    cursor: 'pointer',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: `rgba(0, 0, 0, 0.15) 0px 8px 20px`,
      background: `linear-gradient(135deg, ${theme.colors.primary.contrastText} 0%, rgba(13, 59, 44, 0.02) 100%)`,
    },
  }), [theme]);

  const titleStyle = useMemo(() => ({
    color: theme.colors.primary.main,
    fontWeight: 'bold',
    fontSize: '1.3rem',
    marginBottom: '12px',
    textAlign: 'right' as const,
  }), [theme]);

  const descriptionStyle = useMemo(() => ({
    color: theme.colors.primary.dark,
    fontSize: '0.95rem',
    marginBottom: '16px',
    textAlign: 'right' as const,
    lineHeight: '1.6',
  }), [theme]);

  const videoCountStyle = useMemo(() => ({
    color: theme.colors.primary.light,
    fontSize: '0.85rem',
    marginBottom: '16px',
    textAlign: 'right' as const,
  }), [theme]);

  const buttonStyle = useMemo(() => ({
    backgroundColor: theme.colors.primary.main,
    color: theme.colors.primary.contrastText,
    fontWeight: 'bold',
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: theme.transition,
    width: '100%',
    '&:hover': {
      backgroundColor: theme.colors.primary.dark,
      boxShadow: '0 4px 12px rgba(13, 59, 44, 0.3)',
    },
  }), [theme]);

  return (
    <Card sx={cardStyle} onClick={() => onSelect(series)}>
      <CardContent sx={{ padding: '0', textAlign: 'right', flexGrow: 1 }}>
        <Typography sx={titleStyle}>
          {series.name}
        </Typography>
        <Typography sx={descriptionStyle}>
          {series.description}
        </Typography>
        <Typography sx={videoCountStyle}>
          {series.videos.length} حلقة
        </Typography>
      </CardContent>
      <Button sx={buttonStyle}>
        اختر السلسلة
      </Button>
    </Card>
  );
}
