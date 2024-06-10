import { ChatInformation, ChatList, ChatPage } from './pages';
import { TMessage } from './types';
import { useEffect, useState } from 'react';


import conversations from "./data/conversation.json";
import messages from "./data/message.json";

export const Messages = () => {

  const currentUserId = 1;
  const [currentChatterId, setcurrentChatterId] = useState(2);

  const getMessageOfChatterId = (chtId: number): TMessage[] => {
    let conversationId = conversations.filter((conversation) =>
    (
      (conversation.members.indexOf(currentChatterId) === 0 || conversation.members.indexOf(currentChatterId) === 1)
      &&
      (conversation.members.indexOf(currentUserId) === 0 || conversation.members.indexOf(currentUserId) === 1)
    ))[0]?.id;

    return messages.filter((message) => message.conversationId == conversationId);
  }


  const [currentMessage, setCurrentMessage] = useState(getMessageOfChatterId(currentChatterId))


  useEffect(() => {
    setCurrentMessage(getMessageOfChatterId(currentChatterId));
  },
    [currentChatterId]);
  return (
    <div className="w-screen h-screen flex" >
      <ChatList
        conversations={conversations}
        className=" py-8 px-8 flex flex-col flex-1 max-w-96 "
        setcurrentChatterId={setcurrentChatterId}
      />
      <ChatPage
        className="flex flex-col flex-1"
        userId={currentChatterId}
        currentMessage={currentMessage}
      />
      <ChatInformation
        userName='Jenna Ortega'
        isOnline={true}
        className="flex-1 max-w-80 flex flex-col justify-center items-center gap-4" />
    </div>
  )
}

