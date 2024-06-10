import { HeaderChatList, MainChatList } from "./layouts";

type TProps = {
  className: string;
};


export const ChatList = (props: TProps) => {

  const {className} = props;
  return (
    <div className={className + " h-screen border-l-custom-black border-r-2"}>
      <HeaderChatList />
      <MainChatList />
    </div>
  )
}
