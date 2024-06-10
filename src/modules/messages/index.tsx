import { ChatInformation, ChatList, ChatPage } from './pages';

export const Message = () => {
  return (
    <div className="w-screen h-screen flex" >
      <ChatList className=" py-8 px-8 flex flex-col flex-1 max-w-96 " />
      <ChatPage className="flex flex-col flex-1" />
      <ChatInformation
        userName='Jenna Ortega'
        isOnline={true}
        className="flex-1 max-w-80 flex flex-col justify-center items-center gap-4" />
    </div>
  )
}

