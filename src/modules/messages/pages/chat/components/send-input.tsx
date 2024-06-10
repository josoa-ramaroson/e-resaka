
type TProps = {
    className: string;
}

export const SendInput = (props: TProps) => {
    const { className } = props;
    return (
        <div className={className}>
            <input
                type="text"
                placeholder="Entrez un message"
                className="w-full py-3 px-5 h-14 rounded-full drop-shadow-xl" />
        </div>
    );
};