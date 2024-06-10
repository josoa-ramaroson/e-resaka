import { RegisterStep } from "../constant"

type TProgressProps = {
    step: RegisterStep;
}

export const ProgressTracking = (props: TProgressProps) => {
    const {step} = props;
    
    return (
        <div className="px-[20%] pt-[5%] flex justify-center items-center " >
            <div className={"text-lg align-middle text-center leading-8 rounded-full cursor-pointer " + ((step === RegisterStep.ACCOUNT)? "bg-primary text-white w-8 h-8": "border-primary border-4 text-primary w-9 h-9 ")}>
                1
            </div>
            <div className="flex-1 h-1 bg-primary">

            </div>
            <div className={"text-lg align-middle text-center leading-8 rounded-full cursor-pointer " + ((step === RegisterStep.PERSONAL)? "bg-primary text-white w-8 h-8 ": "border-primary border-4 text-primary w-9 h-9 ")}>
                2
            </div>
            <div className="flex-1 h-1 bg-primary">

            </div>
            <div className={"text-lg align-middle text-center leading-8 rounded-full cursor-pointer " + ((step === RegisterStep.IDENTIFICATION)? "bg-primary text-white w-8 h-8": "border-primary border-4 text-primary w-9 h-9")}>
                3
            </div>
        </div>
    )
}
