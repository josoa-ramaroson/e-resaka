import { Button } from "../../../components";

type TProps = {
    className: string;
    text: string;
    icon?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}

export const ButtonAuth = (props: TProps) => {
    const { className, text, icon, onClick } = props;

    
    return (
        <>
            <Button 
            text={text} 
            icon={icon} 
            className={"py-3 px-6 rounded-xl flex " + className}
            onClick={onClick} />
        </>
    )
}
