import { ReactNode } from "react";

type TProps = {
    title: string;
    children: ReactNode
}

export const InfoForm = (props: TProps) => {
    const { title, children } = props;
    return (
        <div className="w-full h-full py-8 px-14 flex flex-col gap-12">
            <h1 className="font-extrabold text-xl text-center">{title}</h1>
            <div className="flex flex-col flex-1 gap-3" >
                {children}
            </div>
        </div>
    )
}
