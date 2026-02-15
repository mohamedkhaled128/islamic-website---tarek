import { Box, Container, Button, List, ListItem, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { Series, Video } from '../../data/programs-series';
import { useThemeContext } from '../../contexts/ThemeContext';

interface VideoPlayerProps {
  series: Series;
  onBack: () => void;
}

export default function VideoPlayer({ series, onBack }: VideoPlayerProps) {
  const { theme } = useThemeContext();
  const [selectedVideo, setSelectedVideo] = useState<Video>(series.videos[0]);

  const containerStyle = useMemo(() => ({
    minHeight: '100vh',
    paddingY: { xs: '20px', md: '40px' },
    paddingX: { xs: '12px', md: '24px' },
    direction: 'rtl' as const,
    overflow: 'hidden',
  }), []);

  const playerContainerStyle = useMemo(() => ({
    display: 'flex',
    gap: { xs: '16px', md: '24px' },
    marginTop: { xs: '16px', md: '24px' },
    flexDirection: { xs: 'column', md: 'row-reverse' } as const,
    alignItems: { xs: 'stretch', md: 'flex-start' },
  }), []);

  const mainPlayerStyle = useMemo(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: '12px', md: '16px' },
    flex: { xs: '1 1 auto', md: '1 1 auto' },
    width: { xs: '100%', md: 'auto' },
    minWidth: { xs: '0', md: '0' },
  }), []);

  const iframeContainerStyle = useMemo(() => ({
    position: 'relative',
    paddingBottom: '56.25%',
    height: 0,
    overflow: 'hidden',
    backgroundColor: '#000',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  }), []);

  const iframeStyle = useMemo<React.CSSProperties>(() => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
    borderRadius: '12px',
  }), []);

  const videoInfoStyle = useMemo(() => ({
    padding: { xs: '12px', md: '20px' },
    backgroundColor: theme.colors.primary.contrastText,
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  }), [theme]);

  const videoTitleStyle = useMemo(() => ({
    color: theme.colors.primary.main,
    fontWeight: 'bold',
    fontSize: { xs: '1rem', md: '1.2rem' },
    marginBottom: { xs: '6px', md: '8px' },
    textAlign: 'right' as const,
    wordBreak: 'break-word',
  }), [theme]);

  const videoDescriptionStyle = useMemo(() => ({
    color: theme.colors.primary.dark,
    fontSize: { xs: '0.85rem', md: '0.95rem' },
    textAlign: 'right' as const,
    lineHeight: '1.6',
    wordBreak: 'break-word',
  }), [theme]);

  const sidebarStyle = useMemo(() => ({
    backgroundColor: theme.colors.primary.contrastText,
    borderRadius: '12px',
    padding: { xs: '12px', md: '16px' },
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    flex: { xs: '1 1 auto', md: '0 0 350px' },
    width: { xs: '100%', md: '350px' },
    height: { xs: 'auto', md: 'fit-content' },
    maxHeight: { xs: 'none', md: '600px' },
    overflowY: 'auto' as const,
  }), [theme]);

  const playlistTitleStyle = useMemo(() => ({
    color: theme.colors.primary.main,
    fontWeight: 'bold',
    fontSize: { xs: '0.95rem', md: '1rem' },
    marginBottom: { xs: '12px', md: '16px' },
    textAlign: 'right' as const,
    paddingBottom: { xs: '8px', md: '12px' },
    borderBottom: `2px solid ${theme.colors.primary.light}`,
  }), [theme]);

  const playlistStyle = useMemo(() => ({
    padding: 0,
    margin: 0,
  }), []);

  const videoItemStyle = (isActive: boolean) => ({
    paddingX: { xs: '10px', md: '12px' },
    paddingY: { xs: '8px', md: '10px' },
    marginBottom: { xs: '6px', md: '8px' },
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: isActive ? theme.colors.primary.light : 'transparent',
    borderRight: isActive ? `4px solid ${theme.colors.primary.main}` : 'none',
    transition: theme.transition,
    textAlign: 'right' as const,
    '&:hover': {
      backgroundColor: isActive ? theme.colors.primary.light : theme.colors.primary.fullLight,
    },
  });

  const videoItemTitleStyle = (isActive: boolean) => ({
    color: isActive ? theme.colors.primary.main : theme.colors.primary.dark,
    fontWeight: isActive ? 'bold' : '600',
    fontSize: { xs: '0.8rem', md: '0.9rem' },
    textAlign: 'right' as const,
    wordBreak: 'break-word',
  });

  const headerStyle = useMemo(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: { xs: '16px', md: '24px' },
    direction: 'rtl' as const,
    gap: { xs: '12px', md: '16px' },
    flexWrap: 'wrap',
  }), []);

  const seriesTitleStyle = useMemo(() => ({
    color: theme.colors.primary.main,
    fontWeight: 'bold',
    fontSize: { xs: '1.3rem', md: '1.8rem' },
    textAlign: 'right' as const,
    wordBreak: 'break-word',
    flex: { xs: '1 0 100%', sm: 'auto' },
  }), [theme]);

  const backButtonStyle = useMemo(() => ({
    backgroundColor: theme.colors.primary.light,
    color: theme.colors.primary.dark,
    fontWeight: 'bold',
    padding: { xs: '8px 12px', md: '10px 20px' },
    fontSize: { xs: '0.8rem', md: '0.95rem' },
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: theme.transition,
    whiteSpace: 'nowrap',
    '&:hover': {
      backgroundColor: theme.colors.primary.main,
      color: theme.colors.primary.contrastText,
      transform: 'translateX(4px)',
    },
  }), [theme]);

  return (
    <Container maxWidth="lg" sx={containerStyle} component="main">
      {/* Header with series title and back button */}
      <Box sx={headerStyle}>
        <Button sx={backButtonStyle} onClick={onBack}>
          ← رجوع
        </Button>
        <Typography sx={seriesTitleStyle}>
          {series.name}
        </Typography>
      </Box>

      {/* Player Container */}
      <Box sx={playerContainerStyle}>
        {/* Main Player Area */}
        <Box sx={mainPlayerStyle}>
          {/* Video Player */}
          <Box sx={iframeContainerStyle}>
            <iframe
              style={iframeStyle}
              src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&modestbranding=1&rel=0&fs=1&controls=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>

          {/* Video Information */}
          <Box sx={videoInfoStyle}>
            <Typography sx={videoTitleStyle}>
              {selectedVideo.title}
            </Typography>
            {selectedVideo.description && (
              <Typography sx={videoDescriptionStyle}>
                {selectedVideo.description}
              </Typography>
            )}
          </Box>
        </Box>

        {/* Sidebar Playlist */}
        <Box sx={sidebarStyle}>
          <Typography sx={playlistTitleStyle}>
            قائمة الحلقات
          </Typography>
          <List sx={playlistStyle}>
            {series.videos.map((video, index) => (
              <ListItem
                key={video.id}
                sx={videoItemStyle(selectedVideo.id === video.id)}
                onClick={() => setSelectedVideo(video)}
              >
                <Box sx={{ width: '100%' }}>
                  <Typography sx={videoItemTitleStyle(selectedVideo.id === video.id)}>
                    {index + 1}. {video.title}
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Container>
  );
}
