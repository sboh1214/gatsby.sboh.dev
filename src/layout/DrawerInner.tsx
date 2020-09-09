import React from 'react'
import { Divider, List, ListSubheader, ListItem, ListItemIcon, ListItemText, makeStyles, createStyles, Theme } from '@material-ui/core'
import AndroidIcon from '@material-ui/icons/Android'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import { navigate } from 'gatsby'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar
  })
)

export default function DrawerInner() {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListSubheader>Info</ListSubheader>
        <ListItem button key="About Me">
          <ListItemIcon>
            <PermIdentityIcon />
          </ListItemIcon>
          <ListItemText primary="About Me" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListSubheader>Apps</ListSubheader>
        <ListItem
          button
          key="Board To Note"
          onClick={() => {
            navigate('/apps/board-to-note/')
          }}
        >
          <ListItemText primary="Board To Note" />
        </ListItem>
        <ListItem
          button
          key="News App"
          onClick={() => {
            navigate('/apps/news-app/')
          }}
        >
          <ListItemText primary="News App" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListSubheader>Posts</ListSubheader>
        <ListItem button key="Android">
          <ListItemIcon>
            <AndroidIcon />
          </ListItemIcon>
          <ListItemText primary="Android" />
        </ListItem>
      </List>
    </div>
  )
}
