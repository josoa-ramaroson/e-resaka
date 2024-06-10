
type TProps = {
    icon?: string;
    text?: string;
    className?: string;
}

export const Button = (props: TProps) => {
    const { icon, text, className } = props;
    return (
        <div className={className + " cursor-pointer"}>
            {icon && <img src={icon}  className="h-full" />}
            {text && <p>text</p>}
        </div>
    )
}
