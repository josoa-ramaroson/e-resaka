import { TMessage, TUser } from "../../../types";
import { ProfileImage } from "../../../components";

import users from "../../../data/user.json";

type TProps = {
    message: TMessage;
    setcurrentChatterId: any;
}


const maxLength = 20; // Set your desired length

const truncate = (str: string, length: number) => {
    if (str.length <= length) return str;
    return str.slice(0, length) + '...';
};

export const ChatPreview = (props: TProps) => {
    const { message, setcurrentChatterId } = props;



    // change with fetch or get in axios
    const user: TUser = users.filter((user) => user.id === message.senderId)[0];

    return (
        <div
            className="w-full py-2 px-3 flex gap-3 items-center relative cursor-pointer hover:bg-gray-100 active:bg-gray-300 transition-all"
            onClick={() => setcurrentChatterId(user.id)}>
            <ProfileImage
                userName={truncate(user.username, maxLength)}
                image={user.profilePicture}
                isOnline={user.isOnline}
                className="h-16 w-16 " />
            <div>
                <h3 className="font-bold">{user.username}</h3>
                <p className={((!message.isSeen) ? "font-bold text-black" : "text-custom-black")}>
                    {truncate(message.content, maxLength)}
                </p>
            </div>
            {(!message.isSeen) && <p className="h-6 w-6 p-2 bg-new-message text-sm text-white rounded-full flex justify-center items-center absolute right-1">1</p>}
        </div>
    )
}