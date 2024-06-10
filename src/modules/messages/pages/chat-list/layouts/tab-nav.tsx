type TProps = {
    children: React.ReactNode[];
}

export const TabNav = (props: TProps) => {

    const {children} = props;

    return (
        <div className="flex gap-0">
            {children}
        </div>
    )
}
