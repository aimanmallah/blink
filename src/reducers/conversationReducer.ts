import { v4 as uuid } from 'uuid';

import { ActionTypes, AddMessageAction, ConversationsObject } from '../types';
import conversations from '../assets/conversations.json';

const initialConversationsState: ConversationsObject = conversations.reduce(
  (obj, conversation) => ({
    ...obj,
    [conversation.id]: conversation,
  }),
  {}
);

const addMessageToConversation = (
  state: ConversationsObject,
  conversationId: string,
  message: string
) => {
  const currentConversation = state[conversationId];
  const newMessage = { id: uuid(), last_updated: new Date().toISOString(), text: message };

  return {
    ...state,
    [conversationId]: {
      ...currentConversation,
      messages: [...currentConversation.messages, newMessage],
    },
  };
};

export const conversationsReducer = (
  state = initialConversationsState,
  action: AddMessageAction
) => {
  const { payload, type } = action;
  switch (type) {
    case ActionTypes.addMessage:
      return addMessageToConversation(state, payload.conversationId, payload.message);
    default:
      return state;
  }
};
