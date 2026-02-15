import { Box } from '@mui/material';

const DARK_GREEN_GRADIENT =
  'linear-gradient(180deg, rgba(13, 59, 44, 0.94) 0%, rgba(8, 42, 32, 0.97) 50%, rgba(5, 28, 22, 0.98) 100%)';

export default function Background() {
  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `${DARK_GREEN_GRADIENT}, url(images/home-header.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
}
