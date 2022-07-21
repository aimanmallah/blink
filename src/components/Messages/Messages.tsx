import React from 'react';
import { format } from 'date-fns';

import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { useSelector } from 'react-redux';
import { StoreState } from '../../types';
import { Message } from '../../types';

export const Messages: React.FC = () => {
  const conversationId = useSelector((state: StoreState) => state.selectedConversation);
  const messages = useSelector((state: StoreState) =>
    conversationId
      ? state.conversations[conversationId].messages.sort(
          (a, b) => new Date(a.last_updated).valueOf() - new Date(b.last_updated).valueOf()
        )
      : []
  );

  return (
    <Paper elevation={0} style={{ height: 300, overflow: 'auto', backgroundColor: '#f0efed' }}>
      {messages ? (
        <List sx={{ width: '100%' }}>
          {messages.map(({ id, text, last_updated }: Message) => {
            return (
              <ListItem key={id}>
                <ListItemText
                  primary={format(new Date(last_updated), 'EEEE, do, MMMM yyyy, p')}
                  secondary={<React.Fragment>{text}</React.Fragment>}
                />
              </ListItem>
            );
          })}
        </List>
      ) : null}
    </Paper>
  );
};
