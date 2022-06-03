import React from 'react'
import Typography from '@material-ui/core/Typography'
import SearchIcon from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton'


export default function Header() {
    return (
        <div className="header">
            <Typography
                className="logo"
                variant="h6"
            >
                Vocab
            </Typography>

            <IconButton
                aria-label="search"
                color="inherit"
            >
                <SearchIcon />
            </IconButton>

        </div>
    )
}