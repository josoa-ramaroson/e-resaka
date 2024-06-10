import { onlineIcon } from '../../../assets';

type TProps = {
    userName?: string;
    image?: string;
    isOnline?: boolean;
    className?: string;
}

export const ProfileImage = (props: TProps) => {
    const { userName, image, isOnline, className } = props;
    return (
        <div className={className + " relative"}>
            <img className="h-full w-full" src={image} alt={userName + " 's image"} />
            {isOnline && <img src={onlineIcon} className="absolute bottom-0 right-0" />}
        </div>
    )
}
