import { Box, Container, Grid, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { Series, programsSeries } from '../../data/programs-series';
import { useThemeContext } from '../../contexts/ThemeContext';
import SeriesCard from './SeriesCard';
import VideoPlayer from './VideoPlayer';

export default function ProgramsBody() {
  const { theme } = useThemeContext();
  const [selectedSeries, setSelectedSeries] = useState<Series | null>(null);

  const containerStyle = useMemo(() => ({
    minHeight: '100vh',
    paddingY: '40px',
    paddingX: { xs: '16px', sm: '24px' },
    direction: 'rtl' as const,
  }), []);

  const headerStyle = useMemo(() => ({
    textAlign: 'center',
    marginBottom: '48px',
  }), []);

  const mainTitleStyle = useMemo(() => ({
    color: theme.colors.primary.main,
    fontWeight: 'bold',
    fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
    marginBottom: '12px',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  }), [theme]);

  const subtitleStyle = useMemo(() => ({
    color: theme.colors.primary.dark,
    fontSize: { xs: '0.95rem', sm: '1.1rem' },
    fontWeight: '500',
    lineHeight: '1.6',
  }), [theme]);

  const gridContainerStyle = useMemo(() => ({
    marginTop: '32px',
  }), []);

  const decorativeLineStyle = useMemo(() => ({
    width: '80px',
    height: '4px',
    backgroundColor: theme.colors.primary.main,
    margin: '16px auto 0',
    borderRadius: '2px',
  }), [theme]);

  // If a series is selected, show the video player
  if (selectedSeries) {
    return <VideoPlayer series={selectedSeries} onBack={() => setSelectedSeries(null)} />;
  }

  // Show the series grid
  return (
    <Container maxWidth="lg" sx={containerStyle} component="main">
      {/* Header Section */}
      <Box sx={headerStyle}>
        <Typography sx={mainTitleStyle}>
          البرامج والسلاسل
        </Typography>
        <Box sx={decorativeLineStyle} />
        <Typography sx={subtitleStyle}>
          اختر سلسلة لعرض الحلقات وتشغيل الفيديو
        </Typography>
      </Box>

      {/* Series Grid */}
      <Grid container spacing={3} sx={gridContainerStyle}>
        {programsSeries.map((series) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={series.id}>
            <SeriesCard series={series} onSelect={setSelectedSeries} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
