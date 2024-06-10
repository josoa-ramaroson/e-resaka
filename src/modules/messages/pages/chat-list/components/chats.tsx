type TProps = {
    children: React.ReactNode[] | React.ReactNode;
}

export const Chats = (props: TProps) => {
    const {children} = props;
    return (
        <div className="flex-1 overflow-y-scroll">
            {children}
        </div>
    )
}