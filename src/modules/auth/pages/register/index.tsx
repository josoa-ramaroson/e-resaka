import { useEffect, useState } from "react"
import { AccountInformation, InfoForm, PersonalInformation, ProgressTracking } from "./components"

import { ButtonAuth } from "../../components";
import { ButtonGroup } from "../../../../components";
import { leftArrow, rightArrow } from "../../../../assets";
import { RegisterStep, RegisterStepTitle } from "./constant";
import { Identification } from "./components/identification";

export const Register = () => {

  const [step, setStep] = useState(RegisterStep.ACCOUNT);

  const [section, setSection] = useState(RegisterStepTitle[step]);

  const handlePrevious = () => {
    if (step !== RegisterStep.ACCOUNT) setStep((currentStep) => currentStep - 1);
  }
  const handleNext = () => {
    if (step !== RegisterStep.IDENTIFICATION) return setStep((currentStep) => currentStep + 1);
    validate();
  }

  const validate = () => {
    console.log("validate");

  }

  useEffect(() => {
    setSection(RegisterStepTitle[step]);
    console.log(step);

  }, [step])

  return (
    <div className="w-screen h-screen px-[27%] py-[5%] bg-register bg-contain flex justify-center items-center">
      <div className="w-full h-full bg-white drop-shadow-2xl shadow-2xl  rounded-2x">
        <InfoForm title={section}>
          {(step == RegisterStep.ACCOUNT) && <AccountInformation />}
          {(step == RegisterStep.PERSONAL) && <PersonalInformation />}
          {(step == RegisterStep.IDENTIFICATION) && <Identification />}
          <ButtonGroup className="flex justify-end gap-4">
            <ButtonAuth
              text="Précedent"
              icon={leftArrow}
              onClick={handlePrevious}
              className={((step === RegisterStep.ACCOUNT) ? "pointer-events-none" : "") + " border-secondary text-secondary border-2 "} />

            <ButtonAuth
              text={(step !== RegisterStep.IDENTIFICATION) ? "Suivant" : "Valider"}
              icon={(step !== RegisterStep.IDENTIFICATION) ? rightArrow : null}
              onClick={handleNext}
              className={"flex-row-reverse  " + ((step !== RegisterStep.IDENTIFICATION) ? "border-primary border-2" : "bg-custom-green-gradient text-white text-lg")} />
          </ButtonGroup>
          <ProgressTracking step={step} />
        </InfoForm>
      </div>
    </div>
  )
}
