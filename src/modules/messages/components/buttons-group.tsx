import { infoIcon, phoneIcon, videoIcon } from "../../../assets";
import { Button } from ".";

type TProps = {
    className?: string;
    children?: React.ReactNode[] | React.ReactNode;
}

export const ButtonGroup = (props: TProps) => {
    const { className, children } = props;
    return (
        <div className={className}>
            {children}
        </div>
    );
};