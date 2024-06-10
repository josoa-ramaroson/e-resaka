import { friendIcon, groupIcon, jennaImage, liantsoImage, recentIcon } from "../../../../../assets"
import { ChatPreview, Chats, SearchBar, Tab } from "../components"
import { TabNav } from "./tab-nav"

export const MainChatList = () => {
    return (
        <div className="flex flex-col gap-4 flex-1" >
            <SearchBar />
            <TabNav>
                <Tab label="Récents" icon={recentIcon} isActive={true} />
                <Tab label="Amis" icon={friendIcon} />
                <Tab label="Groupes" icon={groupIcon} />
            </TabNav>
            <Chats >
                <ChatPreview 
                    message={{author: "jenna Ortega", content:"ito le izy bain fa tandremo sao misy mangalatra any"}}
                    image={jennaImage}
                    isOnline={true} 
                    isNew={true}/>
                <ChatPreview
                    message={{author: "liantsoa", content:"ito le izy bain fa tandremo sao misy mangalatra any"}}
                    image={liantsoImage}
                    isOnline={true} />
            </Chats>
        </div>
    )
}
