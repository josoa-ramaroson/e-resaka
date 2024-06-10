import { friendIcon, groupIcon, jennaImage, recentIcon } from "../../../../../assets"
import { ChatPreview, Chats, SearchBar, Tab } from "../components"
import { TabNav } from "./tab-nav"

import { TConversation } from "../../../types/conversation";
import { TMessage } from "../../../types";

import messages from "../../../data/message.json";

type TProps = {
    conversations: TConversation[] | null;
    setcurrentChatterId: any;
};


// function you will change after
function getLastMessage(conversation: TConversation): TMessage {
    return messages.filter((message) => message.id === conversation.lastMessageId)[0];
}

export const MainChatList = (props: TProps) => {
    const { conversations, setcurrentChatterId } = props;

    return (
        <div className="flex flex-col gap-4 flex-1" >
            <SearchBar />
            <TabNav>
                <Tab label="Récents" icon={recentIcon} isActive={true} />
                <Tab label="Amis" icon={friendIcon} />
                <Tab label="Groupes" icon={groupIcon} />
            </TabNav>
            <Chats>
                {conversations?.map((conversation) =>
                    <ChatPreview
                        key={conversation.id}
                        message={getLastMessage(conversation)}
                        setcurrentChatterId={setcurrentChatterId} />)}

            </Chats>
        </div>
    )
}
