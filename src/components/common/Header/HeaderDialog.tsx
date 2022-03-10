import * as React from 'react'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import PersonIcon from '@mui/icons-material/Person'
import AddIcon from '@mui/icons-material/Add'
import Typography from '@mui/material/Typography'
import { blue } from '@mui/material/colors'

const emails = ['username@gmail.com', 'user02@gmail.com']

export interface HeaderDialogProps {
  open: boolean
  onClose: () => void
}

export function HeaderDialog(props: HeaderDialogProps) {
  const { onClose, open } = props

  return (
    <Dialog open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <Button onClick={() => onClose()}>x</Button>
    </Dialog>
  )
}
