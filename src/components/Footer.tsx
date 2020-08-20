import React from 'react'
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    copyright: {
      marginTop: theme.spacing(6)
    },
    root: {
      marginTop: theme.spacing(1)
    },
    content: {
      paddingRight: theme.spacing(1)
    }
  })
)

export default function Footer() {
  const classes = useStyles()

  return (
    <>
      <Typography className={classes.copyright}>Copyright 2020. Seungbin Oh. All rights reserved.</Typography>
      <div className={classes.root}>
        <a className={classes.content} href="https://github.com/sboh1214/sboh1214.github.io">
          <img src="https://github.com/sboh1214/sboh1214.github.io/workflows/Gatsby%20Publish/badge.svg" alt="" />
        </a>
        <a className={classes.content} href="https://github.com/sboh1214/sboh1214.github.io">
          <img src="https://github.com/sboh1214/sboh1214.github.io/workflows/Test/badge.svg" alt="" />
        </a>
        <a className={classes.content} href="https://codecov.io/gh/sboh1214/sboh1214.github.io">
          <img src="https://codecov.io/gh/sboh1214/sboh1214.github.io/branch/master/graph/badge.svg" alt="" />
        </a>
      </div>
    </>
  )
}
