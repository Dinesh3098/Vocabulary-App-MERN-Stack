import React from 'react'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'


export default function Header() {
    return (
        <div className="header">
            <Link to="/"><img src="/images/logo.png" alt="logo"/></Link>
            <Link to='/search'>
                <div className="header-right">
                    <IconButton  aria-label="search-icon"  color="default">
                        <SearchIcon fontSize="large" margin="left" />
                    </IconButton>
                </div>
                
            </Link>
        </div>
    )
}