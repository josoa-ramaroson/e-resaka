
type TProps = {
    icon?: string;
    text?: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export const Button = (props: TProps) => {
    const { icon, text, className, onClick } = props;
    return (
        <div
            className={className + " cursor-pointer"}
            onClick={onClick}>
            {icon && <img src={icon} className="h-full" />}
            {text && <p>{text}</p>}
        </div>
    )
}
