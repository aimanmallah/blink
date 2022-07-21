import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';

import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { selectConversation } from '../../actions';
import { StoreState } from '../../types';
import { Conversation } from '../../types';

export const ConversationsBar: React.FC = () => {
  const dispatch = useDispatch();

  const conversations = useSelector((state: StoreState) =>
    Object.values(state.conversations)
      .map((conversation: Conversation) => conversation)
      .sort((a, b) => new Date(a.last_updated).valueOf() - new Date(b.last_updated).valueOf())
  );

  return (
    <Paper elevation={0} sx={{ height: 375, overflow: 'auto', backgroundColor: '#f0efed' }}>
      <List sx={{ bgcolor: 'background.paper' }}>
        {conversations.map((conversation: Conversation) => {
          return (
            <div key={conversation.id}>
              <ListItemButton>
                <Link
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: '#f0efed',
                    },
                  }}
                  onClick={() => dispatch(selectConversation(conversation.id))}
                >
                  <ListItemText
                    primary={conversation.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {format(new Date(conversation.last_updated), 'dd/MM/yyyy')}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </Link>
              </ListItemButton>
              <Divider variant="middle" component="li" />
            </div>
          );
        })}
      </List>
    </Paper>
  );
};
