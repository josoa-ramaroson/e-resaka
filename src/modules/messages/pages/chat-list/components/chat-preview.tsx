import { TMessage } from "../../../../../types";
import { ProfileImage } from "../../../components";

type TProps = {
    image?: string;
    message: TMessage;
    isOnline: boolean;
    isNew?: boolean;
}

const maxLength = 20; // Set your desired length

const truncate = (str: string, length: number) => {
    if (str.length <= length) return str;
    return str.slice(0, length) + '...';
};

export const ChatPreview = (props: TProps) => {
    const { image, message, isOnline, isNew } = props
    return (
        <div className="w-full py-2 px-3 flex gap-3 items-center relative cursor-pointer hover:bg-gray-100 active:bg-gray-300 transition-all">
            <ProfileImage
                userName={truncate(message.author, maxLength)}
                image={image}
                isOnline={isOnline}
                className="h-16 w-16 " />
            <div>
                <h3 className="font-bold">{message.author}</h3>
                <p className={(isNew ? "font-bold text-black" : "text-custom-black")}>
                    {truncate(message.content, maxLength)}
                </p>
            </div>
            {isNew && <p className="h-6 w-6 p-2 bg-new-message text-sm text-white rounded-full flex justify-center items-center absolute right-1">1</p>}
        </div>
    )
}