
type TProps = {
    icon?: any;
    label: string;
    isActive?: boolean;
    alt?: string;
    onClick?: () => void;
}

export const Tab = (props: TProps) => {

    const { label, icon, isActive } = props;

    return (
        <div className="h-10 flex-1 flex justify-center items-center gap-2 cursor-pointer hover:bg-gray-100 active:bg-gray-300">
            <div className="h-5">
                <img className="h-full" src={icon} alt="icon" />
            </div>
            <p className={"text-md " + (isActive ? "text-primary" : "text-tab-inactive"  
        
            )}>{label}</p>
        </div>
    )
}
