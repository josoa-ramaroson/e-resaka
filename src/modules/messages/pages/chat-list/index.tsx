import { TConversation } from "../../types";
import { HeaderChatList, MainChatList } from "./layouts";


type TProps = {
  className: string;
  conversations: TConversation[] | null;
  setcurrentChatterId: any;
};


export const ChatList = (props: TProps) => {

  const { className, conversations, setcurrentChatterId } = props;
  return (
    <div className={className + " h-screen border-l-custom-black border-r-2"}>
      <HeaderChatList />
      <MainChatList
        conversations={conversations}
        setcurrentChatterId={setcurrentChatterId} />
    </div>
  )
}
