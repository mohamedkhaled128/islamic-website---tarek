import { useMemo } from 'react'
import NavLogo from '../NavLogo'

export default function MobileLogo() {
    const outerStyle = useMemo(() => ({
        display: { xs: 'flex', md: 'none' },
        alignItems: 'center',
    }), [])

    return (
        <NavLogo sx={outerStyle} imageWidth={150} />
    )
}
