import { jennaImage, phoneIcon, videoIcon } from "../../../../assets";
import { Button, ButtonGroup, ProfileImage } from "../../components";

type TProps = {
  userName: string;
  className: string;
  isOnline: boolean;
};

export const ChatInformation = (props: TProps) => {


  const { className, userName, isOnline } = props;

  return (
    <div className={className}>
      <ProfileImage image={jennaImage}  className="h-32 last:w-10"/>
      <h1 className="font-bold text-2xl">{userName}</h1>
      <h3>{(isOnline) ? "En ligne" : "Hors ligne"}</h3>
      <ButtonGroup className="flex gap-8" >
        <Button
          icon={phoneIcon}
          className="h-8 w-8" />
        <Button
          icon={videoIcon}
          className="h-8 w-8" />
      </ButtonGroup>
    </div>
  )
}
