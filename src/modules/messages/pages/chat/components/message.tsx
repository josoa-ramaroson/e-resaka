import { TMessage } from "../../../../../types";

type TProps = {
    message: TMessage;
}

const currentUser = "vous";

export const Message = (props: TProps) => {

    const { message } = props;
    return (
        <div className={"w-full py-3 flex items-center " + ((message.author === currentUser) ? " justify-end" : " justify-start")} >
            <div
                className={"max-w-2xl px-5 py-4 flex items-start rounded-2xl" + (message.author == currentUser ? " bg-my-message" : " bg-others-message")}>
                <p className="text-justify text-white">{message.content}</p>
            </div>
        </div>

    );
};