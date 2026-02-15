import { Box, Typography } from '@mui/material'
import { useThemeContext } from '../../../contexts/ThemeContext';
import { Data } from '../types';

type Props = Readonly<Pick<Data, "name" | "bio">>;

export default function Info({ name, bio }: Props) {
    const { theme } = useThemeContext();

    return (
        <Box sx={{
            color: theme.colors.primary.fullDark,
        }}>
            <Typography
                variant="h5"
                fontWeight="bold"
                sx={{
                    textAlign: 'center',
                    mt: 2,
                    mb: 1,
                }}
            >
                {name}
            </Typography>
            <Typography
                variant="h6"
                fontWeight="regular"
                sx={{
                    textAlign: 'center',
                    mb: 1,
                }}
            >
                {bio}
            </Typography>
        </Box>
    )
}
