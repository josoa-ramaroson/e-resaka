import { TMessage } from "../../../types";
import { Message } from "../components";

type TProps = {
    currentMessage: TMessage[];
};

export const ChatMain = (props: TProps) => {

    const {currentMessage} = props;

    return (
        <div className="w-full max px-8 py-7  flex-1 overflow-x-scroll">
            {
                currentMessage.map((currentMessage) => <Message key={currentMessage.id + " " + Math.random()} messageData={currentMessage} />)
            }
        </div>
    );
};