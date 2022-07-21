import { ActionTypes } from '../types';
import { SelectConversationAction } from '../types';

export const selectedConversationReducer = (
  selectedConversationId: string | null = null,
  action: SelectConversationAction
) => {
  switch (action.type) {
    case ActionTypes.selectConversation:
      return action.payload;
    default:
      return selectedConversationId;
  }
};
