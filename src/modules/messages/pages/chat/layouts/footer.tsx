import { microIcon, sendIcon } from "../../../../../assets";
import { Button } from "../../../components";
import { SendInput } from "../components";

export const ChatInputFooter = () => {
    return (
        <div className="px-12 w-full h-24 bg-blur backdrop-blur-sm shadow-white shadow-sm flex justify-around items-center gap-12">
            <Button
                icon={microIcon}
                className="h-14 w-14 p-3 bg-white rounded-full flex justify-center items-center drop-shadow-lg" />

            <SendInput className="flex-1" />

            <Button
                icon={sendIcon}
                className="h-10 w-10" />
        </div>
    );
};