import { ActionTypes, AddMessageActionProps, SelectConversationAction } from '../types';

export const selectConversation = (conversation: string): SelectConversationAction => {
  return {
    type: ActionTypes.selectConversation,
    payload: conversation,
  };
};

export const addMessage = ({ conversationId, message }: AddMessageActionProps) => {
  return {
    type: ActionTypes.addMessage,
    payload: {
      conversationId,
      message,
    },
  };
};
