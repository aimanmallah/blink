import { combineReducers } from 'redux';

import { StoreState } from '../types';

import { selectedConversationReducer } from './selectedConversationReducer';
import { conversationsReducer } from './conversationReducer';

export const rootReducer = combineReducers<StoreState>({
  conversations: conversationsReducer,
  selectedConversation: selectedConversationReducer,
});
