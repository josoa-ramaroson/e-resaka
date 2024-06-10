import { Logo, SwitchMode } from '../components'

export const HeaderChatList = () => {
    return (
        <div className="px-3 h-10 mb-6 flex justify-between items-center">
            <Logo />
            <SwitchMode />
        </div>
    )
}
