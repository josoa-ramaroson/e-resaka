import { infoIcon, phoneIcon, videoIcon } from "../../../../../assets";
import { Button, ButtonGroup } from "../../../../../components";
import { ProfileImage } from "../../../components";

type TProps = {
    image: any;
    userName: string;
}

export const ChatHeader = (props: TProps) => {
    const { image, userName } = props

    return (
        <div className="bg-white px-8 py-7 w-full h-20 flex justify-center items-center gap-5 shadow-lg">
            <ProfileImage
                isOnline={true}
                image={image}
                className="h-14" />
            <div className="flex-1">
                <h1 className="font-bold">{userName}</h1>
                <p className="text-custom-black">Ecrit..</p>
            </div>
            <ButtonGroup className="flex gap-6" >
                <Button
                    icon={phoneIcon}
                    className="h-8 w-8" />
                <Button
                    icon={videoIcon}
                    className="h-8 w-8" />
                <Button
                    icon={infoIcon}
                    className="h-8 w-8" />
            </ButtonGroup>
        </div>
    );
};