import { Box } from '@mui/material';
import { useMemo } from 'react';
import { useThemeContext } from '../../contexts/ThemeContext';
import type { SvgSectionProps } from '../../types';

type Props = {
  readonly Component: React.ElementType<SvgSectionProps>;
};

export default function SVGComponent({ Component }: Props) {
  const { theme } = useThemeContext();
  const outerStyle = useMemo(
    () => ({
      filter: theme.dropShadow,
      height: { xs: '240px', md: '300px' },
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
    }),
    [theme.dropShadow]
  );
  const componentStyle = useMemo(() => ({ height: '100%' }), []);

  return (
    <Box sx={outerStyle}>
      <Component
        style={componentStyle}
        mainColor={theme.colors.primary.main}
      />
    </Box>
  );
}
