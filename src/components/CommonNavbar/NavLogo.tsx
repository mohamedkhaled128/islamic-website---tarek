import { Box, SxProps, Theme } from '@mui/material'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useThemeContext } from '../../contexts/ThemeContext';

type Props = {
    readonly sx: SxProps<Theme>,
    readonly imageWidth: number,
}

export default function NavLogo({ sx, imageWidth }: Props) {
    const { theme } = useThemeContext();

    const imageStyle = useMemo(() => ({
        width: imageWidth,
        height: 'auto',
        filter: theme.dropShadow,
    }), [imageWidth, theme.dropShadow])

    return (
        <Link to="/">
            <Box
                ml={2}
                sx={sx}>
                <img 
                    src={`${process.env.PUBLIC_URL}/logo192.png`}
                    alt="Muslim Website Logo"
                    style={imageStyle}
                />
            </Box>
        </Link>
    )
}
