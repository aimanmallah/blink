import React from 'react';
import { styled } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { ConversationsBar } from './components/ConversationsBar/ConversationsBar';
import { Messages } from './components/Messages/Messages';
import { ChatBar } from './components/ChatBar/ChatBar';

const Item = styled(Paper)(() => ({
  backgroundColor: '#fff',
  padding: '5px',
  textAlign: 'center',
  height: '90%',
  margin: '15px',
}));

export const App: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Paper elevation={2} sx={{ height: '100%', backgroundColor: '#f0efed' }}>
        <Grid container>
          <Grid item xs={3}>
            <Item>
              <ConversationsBar />
            </Item>
          </Grid>
          <Grid item xs={9}>
            <Item>
              <Messages />
              <ChatBar />
            </Item>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
