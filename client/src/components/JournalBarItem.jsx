import React from "react";
import { Card, CardContent, CardActions, Typography, Button, Box, Link, Icon } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import dayjs from "dayjs";
import axios from "axios";

const userId = 2

const JournalBarItem = ({ journal, deleteJournal }) => {

  const handleDelete = () => {
    deleteJournal(journal.id);
  }

  return (
    <Card
    variant="outlined"
    sx={{width: 1/4, maxHeight: 250, minWidth: 550}}
    >
      <CardContent>
        <Typography variant="h4" gutterBottom>{journal.title}</Typography>
        <Typography variant="h6" gutterBottom>{dayjs(journal.createdAt).format('MMM-D-YYYY')}</Typography>
        <Box
        sx={{maxHeight: 75, overflow: 'hidden'}}
        >
          <Typography variant="p" gutterBottom>{journal.body.split('\n')[0]}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Link to={`/home`}><Button variant="text">Read Entry</Button></Link>
        <Button onClick={handleDelete}><DeleteForeverIcon /></Button>
      </CardActions>
    </Card>
  )
}

export default JournalBarItem;
