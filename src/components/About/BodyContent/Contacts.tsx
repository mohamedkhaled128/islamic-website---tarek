import { Facebook, GitHub, LinkedIn, Telegram } from '@mui/icons-material'
import { IconButton, Stack } from '@mui/material'

export default function Contacts() {
    return (
        <Stack
            direction="row"
            spacing={2}
            sx={{
                justifyContent: 'space-evenly',
            }}>
            <IconButton
                target='_blank'
                href="https://www.facebook.com/shawky.ebrahim.ahmed">
                <Facebook />
            </IconButton>

            <IconButton
                target='_blank'
                href="https://t.me/shawkyebrahim2514">
                <Telegram />
            </IconButton>

            <IconButton
                target='_blank'
                href="https://www.linkedin.com/in/shawkyebrahim2514">
                <LinkedIn />
            </IconButton>

            <IconButton
                target='_blank'
                href="https://github.com/shawkyebrahim2514">
                <GitHub />
            </IconButton>
        </Stack>
    )
}
