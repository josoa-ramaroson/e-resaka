import { jennaImage } from "../../../../assets";
import { TConversation, TMessage, TUser } from "../../types";
import { ChatHeader, ChatMain } from "./layouts";
import { ChatInputFooter } from "./layouts/footer";

import users from "../../data/user.json";
type TProps = {
  className: string;
  userId: number; 
  currentMessage: TMessage[];
};


export const ChatPage = (props: TProps) => {


  const { className, userId, currentMessage } = props;

  const user: TUser = users.filter((user) => user.id === userId)[0];

  return (
    <div className={className + " bg-chat-bg"}>
      <ChatHeader
        userName={user.username}
        image={user.profilePicture} />
      <ChatMain
        currentMessage={currentMessage}
      />
      <ChatInputFooter />
    </div>
  )
}
