import React from 'react'
import { AppBar, Toolbar, IconButton, makeStyles, createStyles, Theme, Typography, InputBase, fade } from '@material-ui/core'
import { ThemeSwitch } from './ThemeSwitch'
import { navigate } from 'gatsby'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import HideOnScroll from './HideOnScroll'

export default function SearchAppBar({ onMenuClick, drawerWidth }: any) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      appBar: {
        [theme.breakpoints.up('md')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth
        }
      },
      menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
          display: 'none'
        }
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('md')]: {
          marginLeft: theme.spacing(3),
          width: 'auto'
        }
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      inputRoot: {
        color: 'inherit'
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up("md")]: {
          width: '20ch'
        }
      }
    })
  )
  const classes = useStyles()

  return (
    <HideOnScroll>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={onMenuClick} className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <div
            onClick={() => {
              navigate('/')
            }}
          >
            <Typography variant="h6" noWrap>
              Platypus Dev Blog
            </Typography>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div>
            <ThemeSwitch />
          </div>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}
