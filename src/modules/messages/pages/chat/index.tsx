import { jennaImage } from "../../../../assets";
import { ChatHeader, ChatMain } from "./layouts";
import { ChatInputFooter } from "./layouts/footer";

type TProps = {
  className: string;
};


export const ChatPage = (props: TProps) => {


  const { className } = props;

  return (
    <div className={className + " bg-chat-bg"}>
      <ChatHeader
        userName="Jenna Ortega"
        image={jennaImage} />
      <ChatMain />
      <ChatInputFooter />
    </div>
  )
}
