import { TMessage } from "../../../types";

type TProps = {
    messageData: TMessage;
}

const currentUser = 1;

export const Message = (props: TProps) => {

    const { messageData } = props;
    return (
        <div className={"w-full py-3 flex items-center " + ((messageData.senderId === currentUser) ? " justify-end" : " justify-start")} >
            <div
                className={"max-w-2xl px-5 py-4 flex items-start rounded-2xl" + (messageData.senderId == currentUser ? " bg-my-message" : " bg-others-message")}>
                <p className="text-justify text-white">{messageData.content}</p>
            </div>
        </div>

    );
};