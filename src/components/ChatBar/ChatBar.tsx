import React, { useState, ChangeEvent, SyntheticEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { addMessage } from '../../actions';
import { StoreState } from '../../types';

export const ChatBar: React.FC = () => {
  const [message, setMessage] = useState('');
  const conversationId = useSelector((state: StoreState) => state.selectedConversation);

  const dispatch = useDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    if (!conversationId) {
      return;
    }
    dispatch(addMessage({ conversationId, message }));
    setMessage('');
  };

  return !conversationId ? null : (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}
    >
      <TextField
        sx={{ width: '670px' }}
        id="message-input"
        label="message"
        variant="outlined"
        value={message}
        onChange={handleInputChange}
      />
      <Button variant="outlined" type="submit">
        Send Message
      </Button>
    </Box>
  );
};
