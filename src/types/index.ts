export interface Message {
  id: string;
  text: string;
  last_updated: string;
}

export interface Conversation {
  id: string;
  name: string;
  last_updated: string;
  messages: Message[];
}

export enum ActionTypes {
  selectConversation,
  addMessage,
}

export interface StoreState {
  conversations: ConversationsObject;
  selectedConversation: string | null;
}

export interface ConversationsObject {
  [id: string]: Conversation;
}

export interface SelectConversationAction {
  type: ActionTypes.selectConversation;
  payload: string;
}

export interface AddMessageAction {
  type: ActionTypes.addMessage;
  payload: {
    conversationId: string;
    message: string;
  };
}

export interface AddMessageActionProps {
  conversationId: string;
  message: string;
}
